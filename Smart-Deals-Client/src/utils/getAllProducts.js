const fetchAllProducts = async () => {
  const response = await fetch("http://localhost:3000/products");
  return response.json();
};

const allProductsPromise = fetchAllProducts();

export { allProductsPromise };
