import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import { formatDate } from "../../../utils/formatDate";
import BidForm from "../../../features/bids/components/BidForm";
import { useRef } from "react";

function Information({ informationDetails, handleNewBid }) {
  const bidModalRef = useRef(null);

  const {
    _id,
    title,
    category,
    price_min,
    price_max,
    created_at,
    seller_image,
    seller_name,
    email,
    location,
    seller_contact,
    status,
  } = informationDetails;

  const handleModalOpen = () => {
    bidModalRef.current.showModal();
  };

  return (
    <section className="col-span-3 flex flex-col items-start gap-6">
      <Link
        to={"/products"}
        className="capitalize flex items-center gap-2 font-medium text-xl text-primary"
      >
        <FaArrowLeft className="text-primary" /> Back to Products
      </Link>
      <h2 className="font-bold text-5xl text-primary">{title}</h2>
      <p className="inline px-2.5 py-1.5 text-xs text-secondary rounded-full bg-[#e2daf2]">
        {category}
      </p>
      <section className="w-full p-6 bg-white rounded-sm">
        <p className="font-bold text-3xl text-[#4CAF50]">
          $ {price_min} - {price_max}
        </p>
        <p className="mt-2 text-base text-primary">
          Price start from {price_min}
        </p>
      </section>
      <section className="w-full p-6 bg-white rounded-sm">
        <p className="font-semibold text-2xl text-primary">Product Details</p>
        <p className="mt-6 mb-3 text-base text-primary">
          <span className="font-semibold">Product ID:</span> {_id}
        </p>
        <p className="text-base text-primary">
          <span className="font-semibold">Posted:</span>{" "}
          {formatDate(created_at)}
        </p>
      </section>
      <section className="w-full p-6 bg-white rounded-sm">
        <p className="mb-6 font-semibold text-2xl text-primary">
          Seller Information
        </p>
        <section className="mb-5 flex items-center gap-4">
          <figure className="w-14 h-14 rounded-full">
            <img
              className="rounded-full"
              src={seller_image}
              alt="seller-image"
            />
          </figure>
          <section>
            <p className="font-semibold text-base text-primary leading-5">
              {seller_name}
            </p>
            <p className="mt-2 text-sm text-primary opacity-80">{email}</p>
          </section>
        </section>
        <section className="space-y-3">
          <p className="text-base text-primary font-semibold">
            Location:
            <span className="font-normal"> {location}</span>
          </p>
          <p className="text-base text-primary font-semibold">
            Contact: <span className="font-normal">{seller_contact}</span>
          </p>
          <p className="text-base text-primary font-semibold flex items-center gap-2">
            Status:{" "}
            <span className="px-2.5 py-1.5 bg-[#FFC107] rounded-full font-normal text-xs">
              {status}
            </span>
          </p>
        </section>
      </section>
      <button
        onClick={handleModalOpen}
        className="w-full py-5 bg-secondary rounded-sm capitalize font-semibold text-xl text-white cursor-pointer"
      >
        I want to buy this product
      </button>
      <BidForm id={_id} ref={bidModalRef} handleNewBid={handleNewBid} />
    </section>
  );
}

export default Information;
