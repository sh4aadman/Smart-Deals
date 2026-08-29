const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

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

app.get("/products", async (req, res) => {
  const email = req.query.email;
  const query = {};
  if (email) {
    query.email = email;
  }
  const cursor = productsCollection.find(query);
  const result = await cursor.toArray();
  res.send(result);
});

app.post("/products", async (req, res) => {
  const newProduct = req.body;
  const result = await productsCollection.insertOne(newProduct);
  res.send(result);
});

app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await productsCollection.findOne(query);
  res.send(result);
});

app.patch("/products/:id", async (req, res) => {
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

app.delete("/products/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await productsCollection.deleteOne(query);
  res.send(result);
});

app.patch("/products/:id/status/:text", async (req, res) => {
  const { id, text } = req.params;
  const query = new ObjectId(id);
  const update = {
    $set: {
      status: text,
    },
  };
  const result = await productsCollection.updateOne(query, update);
  res.send(result);
});

app.get("/recent-products", async (req, res) => {
  const cursor = productsCollection.find().sort({ created_at: -1 }).limit(6);
  const result = await cursor.toArray();
  res.send(result);
});

app.get("/bids", async (req, res) => {
  const email = req.query;
  const query = {};
  if (email) {
    query.buyer_email = email;
  }
  const cursor = bidsCollection.find(query);
  const result = cursor.toArray();
  res.send(result);
});

app.post("/bids", async (req, res) => {
  const newBid = req.body;
  const result = await bidsCollection.insertOne(newBid);
  res.send(result);
});

app.get("/bids/:email", async (req, res) => {
  const email = req.params.email;
  const query = { buyer_email: email };
  const result = await bidsCollection.findOne(query);
  res.send(result);
});

app.delete("/bids/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await bidsCollection.deleteOne(query);
  res.send(result);
});

app.delete("/bids/product/:id", async (req, res) => {
  const id = req.params.id;
  const query = { product: new ObjectId(id) };
  const result = await bidsCollection.deleteOne(query);
  res.send(result);
});

app.patch("/bids/status/:id", async (req, res) => {
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
