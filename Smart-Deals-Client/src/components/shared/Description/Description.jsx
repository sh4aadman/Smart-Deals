function Description({ descriptionDetails }) {
  const { image, condition, usage, description } = descriptionDetails;

  return (
    <section className="col-span-2">
      <figure className="mb-7">
        <img
          className="w-full aspect-video object-cover rounded-sm"
          src={image}
          alt="product-image"
        />
      </figure>
      <section className="p-6 bg-white rounded-sm">
        <h3 className="mb-3 font-semibold text-2xl text-primary">
          Product Description
        </h3>
        <section className="py-3 font-semibold text-base text-secondary leading-5 grid grid-cols-2">
          <p>
            Condition: <span className="text-primary capitalize">{condition}</span>
          </p>
          <p>
            Usage Time: <span className="text-primary capitalize">{usage}</span>
          </p>
        </section>
        <hr className="mb-6 border-0 border-t border-primary opacity-50" />
        <p className="font-medium text-[#969A9D]">{description}</p>
      </section>
    </section>
  );
}

export default Description;
