import axios from "axios";

const fetchAllProducts = async () => {
  const response = await axios.get("http://localhost:3000/products");
  return response.data;
};

const allProductsPromise = fetchAllProducts();

export { allProductsPromise };
