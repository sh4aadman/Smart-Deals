function Table({ bids, status = false, details = null }) {
  return (
    <section className="overflow-x-auto rounded-lg">
      <table className="table">
        <thead className={status ? "bg-white" : ""}>
          <tr>
            <th className="font-medium text-lg text-primary leading-6 opacity-80">
              SL no.
            </th>
            <th className="font-medium text-lg text-primary leading-6 opacity-80">
              Product
            </th>
            <th className="font-medium text-lg text-primary leading-6 opacity-80">
              Bidder
            </th>
            <th className="font-medium text-lg text-primary leading-6 opacity-80">
              Bid Price
            </th>
            {status && (
              <th className="font-medium text-lg text-primary leading-6 opacity-80">
                Status
              </th>
            )}
            <th className="font-medium text-lg text-primary leading-6 opacity-80">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white rounded-sm">
          {bids?.map((bid, index) => {
            const product = details || bid?.productInfo;

            return (
              <tr key={bid._id}>
                <td className="font-medium text-primary text-base leading-6">
                  {index + 1}
                </td>
                <td>
                  <section className="flex items-center gap-3">
                    <figure>
                      <img
                        className="h-10 aspect-video object-cover"
                        src={product?.image}
                        alt={`${product?.title}-image`}
                      />
                    </figure>
                    <section>
                      <section className="font-medium text-base text-primary leading-5">
                        {product?.title}
                      </section>
                      <section className="text-sm text-primary opacity-80">
                        ${product?.price_min}
                      </section>
                    </section>
                  </section>
                </td>
                <td>
                  <section className="flex items-center gap-3">
                    <figure>
                      <img
                        className="w-10 rounded-full aspect-square object-cover"
                        src={bid?.buyer_image}
                        alt={"buyer-image"}
                      />
                    </figure>
                    <section>
                      <section className="font-medium text-base text-primary leading-5">
                        {bid?.buyer_name}
                      </section>
                      <section className="text-sm text-primary opacity-80">
                        {bid?.buyer_contact
                          ? bid.buyer_contact
                          : "Invalid Contact"}
                      </section>
                    </section>
                  </section>
                </td>
                <td>
                  <p className="font-medium text-base text-primary leading-5">
                    ${bid?.bid_price}
                  </p>
                </td>
                {status && (
                  <td>
                    <p className="inline px-2.5 py-1.5 rounded-full bg-[#FFC107] text-xs text-primary">
                      {bid?.status}
                    </p>
                  </td>
                )}
                {status ? (
                  <td>
                    <button className="px-3.5 py-1.5 rounded-sm border border-error font-medium text-sm text-error cursor-pointer">
                      Remove Bid
                    </button>
                  </td>
                ) : (
                  <td>
                    <button className="mr-2 px-3.5 py-1.5 rounded-sm border border-success font-medium text-sm text-success cursor-pointer">
                      Accept Offer
                    </button>
                    <button className="px-3.5 py-1.5 rounded-sm border border-error font-medium text-sm text-error cursor-pointer">
                      Reject Offer
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
