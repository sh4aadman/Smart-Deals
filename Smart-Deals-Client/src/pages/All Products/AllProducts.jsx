import { Suspense, useMemo } from "react";
import Loading from "../../components/ui/Loading/Loading";
import ProductGrid from "../../features/products/components/ProductGrid";
import fetchAllProducts from "../../utils/getAllProducts";

function AllProducts() {
  const productsPromise = useMemo(() => {
    return fetchAllProducts();
  }, []);

  return (
    <section>
      <h2 className="mt-20 mb-10 font-bold text-5xl text-primary text-center">
        All <span className="text-secondary">Products</span>
      </h2>
      <Suspense fallback={<Loading />}>
        <ProductGrid productsPromise={productsPromise} />
      </Suspense>
    </section>
  );
}

export default AllProducts;
