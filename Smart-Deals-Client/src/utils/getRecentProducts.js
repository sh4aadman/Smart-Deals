import axiosInstance from "../hooks/useAxios";

const fetchRecentProducts = async () => {
  const response = await axiosInstance.get("/recent-products");
  return response.data;
};

const recentProductsPromise = fetchRecentProducts();

export default recentProductsPromise;
