import { Link } from "react-router";

function ProductCard({ product }) {
  const { _id, title, price_min, price_max, image } = product;

  return (
    <section className="p-4 rounded-lg shadow-xl bg-white">
      <figure className="mb-4">
        <img
          className="w-full rounded-lg aspect-video object-cover object-center"
          src={image}
          alt={`${title} - image`}
        />
      </figure>
      <h3 className="mb-2 font-medium text-primary text-2xl">{title}</h3>
      <p className="mb-4 font-semibold text-secondary text-xl">
        $ {price_min} - {price_max}
      </p>
      <Link
        to={`/products/${_id}`}
        className="inline-block w-full border border-secondary rounded-sm px-7 py-3 text-secondary font-semibold text-center"
      >
        View Details
      </Link>
    </section>
  );
}

export default ProductCard;
