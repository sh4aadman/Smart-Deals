import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import { formatDate } from "../../../utils/formatDate";
import { use, useRef } from "react";
import { AuthContext } from "../../../context/Auth Context/AuthProvider";

function Information({ informationDetails }) {
  const { user } = use(AuthContext);
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

  const handleModalClose = () => {
    bidModalRef.current.close();
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.value.name;
    const email = e.target.value.email;
    const photoURL = e.target.value.photoURL;
    const bid = e.target.value.bid;
    const contactInfo = e.target.value.contactInfo;
    const newBid = {
      product: _id,
      buyer_image: photoURL,
      buyer_name: name,
      buyer_contact: contactInfo,
      buyer_email: email,
      bid_price: bid,
      status: "pending",
    };
    console.log(newBid);
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
        onClick={() => handleModalOpen()}
        className="w-full py-5 bg-secondary rounded-sm capitalize font-semibold text-xl text-white cursor-pointer"
      >
        I want to buy this product
      </button>
      <dialog ref={bidModalRef} className="modal">
        <div className="modal-box">
          <h3 className="mb-6 font-bold text-2xl text-primary text-center">
            Give Seller Your Offered Price
          </h3>
          <form onSubmit={handleBidSubmit} className="my-4">
            <fieldset className="fieldset space-y-6">
              <section className="flex items-center gap-4">
                <section>
                  <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                    Buyer Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={user?.displayName}
                    className="input outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                    placeholder="Your Name"
                    required
                    readOnly
                  />
                </section>
                <section>
                  <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                    Buyer Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user?.email}
                    className="input outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                    placeholder="Your Email"
                    required
                    readOnly
                  />
                </section>
              </section>
              <section className="flex flex-col">
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Buyer Image URL
                </label>
                <input
                  type="url"
                  name="photoURL"
                  value={user?.photoURL}
                  className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                  placeholder="https://your_image_url"
                />
              </section>
              <section className="flex flex-col">
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Place Your Price
                </label>
                <input
                  type="number"
                  name="bid"
                  className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                  placeholder="Your Price"
                  required
                />
              </section>
              <section>
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Contact Info
                </label>
                <input
                  type="tel"
                  name="contactInfo"
                  className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                  placeholder="Your Contact Info"
                  required
                />
              </section>
            </fieldset>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={handleModalClose}
                className="px-4 py-3.5 mr-4 border border-secondary bg-white rounded-sm font-semibold text-base text-secondary cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleBidSubmit}
                className="px-4 py-3.5 border border-secondary bg-secondary rounded-sm font-semibold text-base text-white cursor-pointer"
              >
                Submit Bid
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
}

export default Information;
