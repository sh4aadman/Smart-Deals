import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth Context/AuthProvider";
import axios from "axios";

function MyProducts() {
  const { user } = use(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`http://localhost:3000/products?email=${user.email}`)
      .then((response) => setProducts(response.data));
  }, [user]);

  return (
    <section className="mt-20 mb-10 min-h-[33.5vh]">
      <section className="mb-10">
        <h2 className="font-bold text-5xl text-primary text-center">
          My Products <span className="text-secondary">{products.length}</span>
        </h2>
      </section>
      <section className="mx-20">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th className="font-medium text-lg text-primary leading-6 opacity-80">
                  SL No
                </th>
                <th className="font-medium text-lg text-primary leading-6 opacity-80">
                  Image
                </th>
                <th className="font-medium text-lg text-primary leading-6 opacity-80">
                  Product Name
                </th>
                <th className="font-medium text-lg text-primary leading-6 opacity-80">
                  Category
                </th>
                <th className="font-medium text-lg text-primary leading-6 opacity-80">
                  Price
                </th>
                <th className="font-medium text-lg text-primary leading-6 opacity-80">
                  Status
                </th>
                <th className="font-medium text-lg text-primary leading-6 opacity-80">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="w-full bg-white">
              {products.map((product, idx) => (
                <tr key={product._id}>
                  <td className="font-medium text-primary text-base leading-5">
                    {idx + 1}
                  </td>
                  <td>
                    <figure>
                      <img
                        className="h-10 aspect-video object-cover"
                        src={product.image}
                        alt={`${product.title}-image`}
                      />
                    </figure>
                  </td>
                  <td>
                    <p className="font-medium text-primary text-base leading-5 capitalize">
                      {product.title}
                    </p>
                  </td>
                  <td>
                    <p className="font-medium text-primary text-base leading-5">
                      {product.category}
                    </p>
                  </td>
                  <td>
                    <p className="font-medium text-primary text-base leading-5">
                      ${product.price_min}
                    </p>
                  </td>
                  <td>
                    <p className="inline px-2.5 py-1.5 rounded-full bg-[#FFC107] text-xs text-primary capitalize">
                      {product.status}
                    </p>
                  </td>
                  <td className="grow">
                    <button className="mr-2 px-3.5 py-1.5 rounded-sm border border-secondary font-medium text-sm text-secondary cursor-pointer">
                      Edit
                    </button>
                    <button className="mr-2 px-3.5 py-1.5 rounded-sm border border-error font-medium text-sm text-error cursor-pointer">
                      Delete
                    </button>
                    <button className="px-3.5 py-1.5 rounded-sm border border-success font-medium text-sm text-success cursor-pointer">
                      Make Sold
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}

export default MyProducts;
