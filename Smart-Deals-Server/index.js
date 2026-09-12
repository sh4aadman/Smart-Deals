const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const { initializeApp, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const serviceAccount = require("./smart-deals-firebase-adminsdk-key.json");

initializeApp({
  credential: cert(serviceAccount),
});

app.use(cors());
app.use(express.json());

const verifyFirebaseToken = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({ message: "Unauthorized access" });
  }
  const token = authorization.split(" ")[1];
  try {
    const decoded = await getAuth().verifyIdToken(token);
    req.decoded = decoded;
    next();
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized access" });
  }
};

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db("smart_deals_db");
const productsCollection = db.collection("products");
const bidsCollection = db.collection("bids");
const usersCollection = db.collection("users");

app.post("/users", async (req, res) => {
  const newUser = req.body;
  const existingUser = await usersCollection.findOne({ email: newUser.email });
  if (existingUser) {
    res.send({ message: "User already exists!" });
  }
  const result = await usersCollection.insertOne(newUser);
  res.send(result);
});

app.get("/products", async (req, res) => {
  const cursor = productsCollection.find();
  const result = await cursor.toArray();
  res.send(result);
});

app.get("/recent-products", async (req, res) => {
  const cursor = productsCollection.find().sort({ created_at: -1 }).limit(6);
  const result = await cursor.toArray();
  res.send(result);
});

app.get("/products/user/:email", verifyFirebaseToken, async (req, res) => {
  const email = req.params.email;
  if (email !== req.decoded.email) {
    return res.status(403).send({ message: "Forbidden access" });
  }
  const cursor = productsCollection.find({ email });
  const result = await cursor.toArray();
  res.send(result);
});

app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await productsCollection.findOne(query);
  res.send(result);
});

app.post("/products", verifyFirebaseToken, async (req, res) => {
  const newProduct = req.body;
  if (newProduct.email !== req.decoded.email) {
    return res.status(403).send({ message: "Forbidden access" });
  }
  const result = await productsCollection.insertOne(newProduct);
  res.send(result);
});

app.patch("/products/:id", verifyFirebaseToken, async (req, res) => {
  const id = req.params.id;
  const updateDetails = req.body;
  const query = { _id: new ObjectId(id) };
  const update = {
    $set: {
      name: updateDetails.name,
      price: updateDetails.price,
    },
  };
  const result = await productsCollection.updateOne(query, update);
  res.send(result);
});

app.delete("/products/:id", verifyFirebaseToken, async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await productsCollection.deleteOne(query);
  res.send(result);
});

app.patch("/products/:id/status/:text", async (req, res) => {
  const { id, text } = req.params;
  const query = { _id: new ObjectId(id) };
  const update = {
    $set: {
      status: text,
    },
  };
  const result = await productsCollection.updateOne(query, update);
  res.send(result);
});

app.get("/bids", verifyFirebaseToken, async (req, res) => {
  const email = req.query.email;
  const query = {};
  if (email) {
    if (email !== req.decoded.email) {
      return res.status(403).send({ message: "Forbidden access" });
    }
    query.buyer_email = email;
  }
  const bids = await bidsCollection.find(query).toArray();
  const productIds = bids.map((bid) => new ObjectId(bid.product));
  const products = await productsCollection
    .find(
      {
        _id: { $in: productIds },
      },
      {
        projection: {
          title: 1,
          image: 1,
          price_min: 1,
        },
      },
    )
    .toArray();
  const result = bids.map((bid) => {
    const product = products.find(
      (product) => product._id.toString() === bid.product,
    );
    return { ...bid, productInfo: product };
  });
  res.send(result);
});

app.get("/bids/:productId", async (req, res) => {
  const productId = req.params.productId;
  const query = { product: productId };
  const cursor = bidsCollection.find(query).sort({ bid_price: -1 });
  const result = await cursor.toArray();
  res.send(result);
});

app.post("/bids", verifyFirebaseToken, async (req, res) => {
  const newBid = req.body;
  if (newBid.buyer_email !== req.decoded.email) {
    return res.status(403).send({ message: "Forbidden access" });
  }
  const result = await bidsCollection.insertOne(newBid);
  res.send(result);
});

app.delete("/bids/:id", verifyFirebaseToken, async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await bidsCollection.deleteOne(query);
  res.send(result);
});

app.delete("/bids/product/:id", verifyFirebaseToken, async (req, res) => {
  const id = req.params.id;
  const query = { product: new ObjectId(id) };
  const result = await bidsCollection.deleteMany(query);
  res.send(result);
});

app.patch("/bids/status/:id", verifyFirebaseToken, async (req, res) => {
  const id = req.params.id;
  const updatedDetails = req.body;
  const query = { _id: new ObjectId(id) };
  const update = {
    $set: {
      status: updatedDetails.status,
    },
  };
  const result = await bidsCollection.updateOne(query, update);
  res.send(result);
});

client
  .connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is ruuning on port : ${port}`);
    });
  })
  .catch(console.dir);
