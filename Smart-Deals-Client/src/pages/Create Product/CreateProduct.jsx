import { use, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../context/Auth Context/AuthProvider";
import { toast } from "sonner";

function CreateProduct() {
  const products = useLoaderData();

  const { user } = use(AuthContext);

  const formRef = useRef(null);
  const navigate = useNavigate();

  const categories = [...new Set(products.map((product) => product.category))];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price_min = Number(form.priceMin.value);
    const price_max = Number(form.priceMax.value);
    const email = user.email;
    const category = form.category.value;
    const created_at = new Date().toISOString();
    const image = form.productImg.value;
    const status = "pending";
    const location = form.location.value;
    const seller_image = user.photoURL;
    const seller_name = user.displayName;
    const condition = form.condition.value;
    const usage = form.usage.value;
    const description = form.description.value;
    const seller_contact = form.contact.value;
    const newProduct = {
      title,
      price_min,
      price_max,
      email,
      category,
      created_at,
      image,
      status,
      location,
      seller_image,
      seller_name,
      condition,
      usage,
      description,
      seller_contact,
    };
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Your product has been created!");
          formRef.current.reset();
          navigate("/my-products");
        }
      });
  };

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
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-1/2 bg-white rounded-sm shadow-lg"
        >
          <fieldset className="fieldset p-10">
            <section className="mb-6 flex items-center gap-4">
              <section className="flex-1 flex flex-col">
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                  placeholder="e.g. Yamaha Fz Guitar for Sale"
                />
              </section>
              <section className="flex-1 flex flex-col">
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Category
                </label>
                <select
                  name="category"
                  defaultValue="Pick a Category"
                  className="select w-full outline-0 text-primary"
                >
                  <option className="text-base" value={""}>
                    Select A Category
                  </option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
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
                  name="priceMin"
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
                  name="priceMax"
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
                      htmlFor="brandNew"
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
                      htmlFor="Used"
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
                  name="usage"
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
                name="productImg"
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
                  value={user.displayName}
                  className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                  placeholder="e.g. Artisan Roasters"
                  readOnly
                />
              </section>
              <section className="flex-1 flex flex-col">
                <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                  Seller Email
                </label>
                <input
                  type="email"
                  value={user.email}
                  className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                  placeholder="leli31955@nrlord.com"
                  readOnly
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
                  name="contact"
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
                  value={user.photoURL}
                  className="input w-full outline-0 text-base text-primary placeholder:opacity-50 placeholder:leading-6"
                  placeholder="https://..."
                  readOnly
                />
              </section>
            </section>
            <section className="mb-6 flex flex-col">
              <label className="label mb-1.5 font-medium text-sm text-primary leading-3.5">
                Location
              </label>
              <input
                type="text"
                name="location"
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
                name="description"
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
