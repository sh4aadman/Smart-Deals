import axiosInstance from "../hooks/useAxios";

const fetchAllProducts = async () => {
  const response = await axiosInstance.get("/products");
  return response.data;
};

export default fetchAllProducts;
