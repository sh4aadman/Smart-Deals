import { use } from "react";
import ProductCard from "./ProductCard";

function ProductGrid({ recentProductsPromise }) {
  const recentProducts = use(recentProductsPromise);
  return (
    <section>
      <section className="px-20 mb-10 grid grid-cols-3 gap-6">
        {recentProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </section>
      <section className="mb-20 flex justify-center">
        <button className="bg-secondary font-semibold text-white rounded-sm px-7 py-3">
          Show All
        </button>
      </section>
    </section>
  );
}

export default ProductGrid;
