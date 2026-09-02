import { useLoaderData } from "react-router";
import Description from "../../../components/shared/Description/Description";
import Information from "../../../components/shared/Information/Information";

function ProductDetails() {
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

  return (
    <section className="p-20 grid grid-cols-5 gap-10">
      <Description descriptionDetails={descriptionDetails} />
      <Information informationDetails={informationDetails} />
    </section>
  );
}

export default ProductDetails;
