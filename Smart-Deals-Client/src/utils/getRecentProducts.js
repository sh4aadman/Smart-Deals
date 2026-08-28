const fetchRecentProducts = async () => {
  const response = await fetch("http://localhost:3000/recent-products");
  return response.json();
};

const recentProductsPromise = fetchRecentProducts();

export { recentProductsPromise };
