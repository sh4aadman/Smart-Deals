import { use, useState } from "react";
import { AuthContext } from "../../../context/Auth Context/AuthProvider";
import { toast, Toaster } from "sonner";

function BidForm({ id, ref, handleNewBid }) {
  const { user } = use(AuthContext);
  const [userBid, setUserBid] = useState(0);

  const handleModalClose = () => {
    ref.current.close();
  };

  const handleBidChange = (e) => {
    setUserBid(parseInt(e.target.value));
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = user?.displayName;
    const email = user?.email;
    const photoURL = user?.photoURL;
    const bid = userBid;
    const contactInfo = e.target.value.contactInfo;
    const newBid = {
      product: id,
      buyer_image: photoURL,
      buyer_name: name,
      buyer_contact: contactInfo,
      buyer_email: email,
      bid_price: bid,
      status: "pending",
    };
    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          ref.current.close();
          toast("Your Bid has been palced!", {
            duration: 8000,
          });
          newBid._id = data.insertedId;
          handleNewBid(newBid);
        }
      });
  };

  return (
    <>
      <dialog ref={ref} className="modal">
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
                  readOnly
                />
              </section>
              <section className="flex flex-col">
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Place Your Price
                </label>
                <input
                  type="number"
                  name="bid"
                  onChange={handleBidChange}
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
      <Toaster />
    </>
  );
}

export default BidForm;
