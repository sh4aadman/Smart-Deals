import { Suspense } from "react";
import ProductGrid from "../components/ProductGrid";
import Loading from "../../../components/ui/Loading/Loading";
import { recentProductsPromise } from "../../../utils/getRecentProducts";

function RecentProduct() {
  return (
    <section className="mt-20">
      <h2 className="mb-10 text-center font-bold text-primary text-5xl">
        Recent <span className="text-secondary">Products</span>
      </h2>
      <Suspense fallback={<Loading />}>
        <ProductGrid productsPromise={recentProductsPromise} />
      </Suspense>
    </section>
  );
}

export default RecentProduct;
