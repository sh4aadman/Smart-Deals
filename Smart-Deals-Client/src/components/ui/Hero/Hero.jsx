import { Link } from "react-router";
import SearchField from "../Search Field/SearchField";
import leftBackground from "../../../assets/images/bg-hero-left.png";
import rightBackground from "../../../assets/images/bg-hero-right.png";

function Hero() {
  return (
    <section className="py-16 min-h-1/2 relative overflow-hidden bg-linear-to-br from-[#fde8fc] to-[#e0f7f5]">
      <img
        className="absolute
      -left-28
      -top-32
      w-1/5
      object-contain"
        src={leftBackground}
        alt="left-background"
      />
      <img
        className="absolute
      -right-28
      -top-32
      w-1/5
      object-contain"
        src={rightBackground}
        alt="right-background"
      />
      <h1 className="font-bold text-primary text-7xl leading-20 text-center capitalize">
        Deal your <span className="text-secondary">Products</span> <br /> in a{" "}
        <span className="text-secondary">Smart</span> way !
      </h1>
      <p className="mt-4 text-neutral text-xl leading-7 text-center">
        SmartDeals helps you sell, resell, and shop from trusted local sellers —
        all in one place!
      </p>
      <SearchField />
      <section className="mt-8 flex justify-center gap-4">
        <Link
          to={"/products"}
          className="border border-secondary bg-secondary rounded-sm px-7 py-3 mr-4 text-white font-semibold"
        >
          Watch All Products
        </Link>
        <Link
          to={"/create-product"}
          className="border border-secondary rounded-sm px-7 py-3 text-secondary font-semibold"
        >
          Post A Product
        </Link>
      </section>
    </section>
  );
}

export default Hero;
