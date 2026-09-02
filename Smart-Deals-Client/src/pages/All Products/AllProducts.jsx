import { Suspense } from "react";
import Loading from "../../components/ui/Loading/Loading";
import ProductGrid from "../../features/products/components/ProductGrid";
import { allProductsPromise } from "../../utils/getAllProducts";

function AllProducts() {
  return (
    <section>
      <h2 className="mt-20 mb-10 font-bold text-5xl text-primary text-center">
        All <span className="text-secondary">Products</span>
      </h2>
      <Suspense fallback={<Loading />}>
        <ProductGrid productsPromise={allProductsPromise} />
      </Suspense>
    </section>
  );
}

export default AllProducts;
