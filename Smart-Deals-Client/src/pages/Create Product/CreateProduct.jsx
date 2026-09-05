import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

function CreateProduct() {
  return (
    <section className="mt-20 mb-10">
      <section className="mb-10 flex flex-col justify-center items-center gap-5">
        <Link
          to={"/"}
          className="flex items-center gap-2 font-medium text-primary text-xl"
        >
          <FaArrowLeft /> Back to products
        </Link>
        <h2 className="font-bold text-5xl text-primary">
          Create <span className="text-secondary">A Product</span>
        </h2>
      </section>
      <section className="flex justify-center">
        <form className="w-1/2 bg-white rounded-sm shadow-lg">
          <fieldset className="fieldset p-10">
            <section className="mb-6 flex items-center gap-4">
              <section className="flex-1 flex flex-col">
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Title
                </label>
                <input
                  type="text"
                  className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                  placeholder="e.g. Yamaha Fz Guitar for Sale"
                />
              </section>
              <section className="flex-1 flex flex-col">
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Category
                </label>
                <select
                  defaultValue="Pick a color"
                  className="select w-full outline-0 text-primary"
                >
                  <option className="text-base" disabled={true}>
                    Select A Category
                  </option>
                  <option>Crimson</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>
              </section>
            </section>
            <section className="mb-6 flex items-center gap-4">
              <section className="flex-1 flex flex-col">
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Min Price You Want to Sale ($)
                </label>
                <input
                  type="number"
                  className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                  placeholder="e.g. 18.5"
                />
              </section>
              <section className="flex-1 flex flex-col">
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Max Price You Want to Sale ($)
                </label>
                <input
                  type="number"
                  className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                  placeholder="Optional (default = Min Price)"
                />
              </section>
            </section>
            <section className="mb-6 flex gap-4">
              <section className="flex-1 flex flex-col">
                <label className="label mb-2.5 font-medium text-sm text-primary leading-3.5">
                  Product Condition
                </label>
                <section className="flex items-center gap-10">
                  <section className="flex items-center gap-1">
                    <input
                      type="radio"
                      id="brandNew"
                      name="condition"
                      value="brandNew"
                      className="radio radio-sm radio-secondary"
                    />
                    <label
                      for="brandNew"
                      className="font-medium text-sm text-primary leading-5"
                    >
                      Brand New
                    </label>
                  </section>
                  <section className="flex items-center gap-1">
                    <input
                      type="radio"
                      id="used"
                      name="condition"
                      value="used"
                      className="radio radio-sm radio-secondary"
                    />
                    <label
                      for="Used"
                      className="font-medium text-sm text-primary leading-5"
                    >
                      Used
                    </label>
                  </section>
                </section>
              </section>
              <section className="flex-1 flex flex-col">
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Product Usage Time
                </label>
                <input
                  type="text"
                  className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                  placeholder="e.g. 1 year 3 month"
                />
              </section>
            </section>
            <section className="mb-6 flex flex-col">
              <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                Your Product Image URL
              </label>
              <input
                type="url"
                className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                placeholder="https://..."
              />
            </section>
            <section className="mb-6 flex items-center gap-4">
              <section className="flex-1 flex flex-col">
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Seller Name
                </label>
                <input
                  type="text"
                  className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                  placeholder="e.g. Artisan Roasters"
                />
              </section>
              <section className="flex-1 flex flex-col">
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Seller Email
                </label>
                <input
                  type="email"
                  className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                  placeholder="leli31955@nrlord.com"
                />
              </section>
            </section>
            <section className="mb-6 flex items-center gap-4">
              <section className="flex-1 flex flex-col">
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Seller Contact
                </label>
                <input
                  type="tel"
                  className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                  placeholder="e.g. +1-555-1234"
                />
              </section>
              <section className="flex-1 flex flex-col">
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Seller Image URL
                </label>
                <input
                  type="url"
                  className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                  placeholder="https://..."
                />
              </section>
            </section>
            <section className="mb-6 flex flex-col">
              <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                Location
              </label>
              <input
                type="text"
                className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                placeholder="City, Country"
              />
            </section>
            <section className="mb-6 flex flex-col">
              <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                Simple Description about Your Product
              </label>
              <input
                type="text"
                className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough..... "
              />
            </section>
            <button className="w-full py-5 bg-secondary rounded-sm capitalize font-semibold text-xl text-white cursor-pointer">
              Create A Product
            </button>
          </fieldset>
        </form>
      </section>
    </section>
  );
}

export default CreateProduct;
