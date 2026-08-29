import { use } from "react";
import ProductCard from "./ProductCard";

function ProductGrid({ productsPromise }) {
  const products = use(productsPromise);
  return (
    <section>
      <section className="px-20 mb-10 grid grid-cols-3 gap-6">
        {products.map((product) => (
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
