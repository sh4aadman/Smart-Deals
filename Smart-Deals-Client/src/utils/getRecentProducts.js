import axios from "axios";

const fetchRecentProducts = async () => {
  const response = await axios.get("http://localhost:3000/recent-products");
  return response.data;
};

const recentProductsPromise = fetchRecentProducts();

export { recentProductsPromise };
