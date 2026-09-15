import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://smart-deals-mauve.vercel.app",
});

export default axiosInstance;
