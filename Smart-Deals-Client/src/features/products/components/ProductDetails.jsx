import { useLoaderData } from "react-router";
import Description from "../../../components/shared/Description/Description";
import Information from "../../../components/shared/Information/Information";
import Bids from "../../bids/components/Bids";
import { useEffect, useState } from "react";

function ProductDetails() {
  const [bids, setBids] = useState([]);

  const details = useLoaderData();

  const { image, condition, usage, description } = details;
  const descriptionDetails = {
    image,
    condition,
    usage,
    description,
  };

  const {
    _id,
    category,
    title,
    price_min,
    price_max,
    created_at,
    seller_name,
    seller_image,
    email,
    contact,
    location,
    seller_contact,
    status,
  } = details;
  const informationDetails = {
    _id,
    category,
    title,
    price_min,
    price_max,
    created_at,
    seller_name,
    seller_image,
    email,
    contact,
    location,
    seller_contact,
    status,
  };

  const handleNewBid = (newBid) => {
    setBids((prevBids) =>
      [...prevBids, newBid].sort((a, b) => b.bid_price - a.bid_price),
    );
  };

  useEffect(() => {
    fetch(`http://localhost:3000/bids/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setBids(data);
      });
  }, [_id]);

  return (
    <>
      <section className="p-20 grid grid-cols-5 gap-10">
        <Description descriptionDetails={descriptionDetails} />
        <Information
          informationDetails={informationDetails}
          handleNewBid={handleNewBid}
        />
      </section>
      <Bids bids={bids} />
    </>
  );
}

export default ProductDetails;
