import Table from "../../../components/ui/Table/Table";

function Bids({ bids }) {
  const bidsLength = new Intl.NumberFormat("en-US", {
    minimumIntegerDigits: 2,
  }).format(bids.length);

  return (
    <section className="p-20">
      <h2 className="mb-10 font-bold text-5xl text-primary capitalize">
        Bids for this product:{" "}
        <span className="text-secondary">{bidsLength}</span>
      </h2>
      <Table bids={bids} />
    </section>
  );
}

export default Bids;
