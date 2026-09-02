import { Link, NavLink } from "react-router";

function Navbar() {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/products"}>All Products</NavLink>
      </li>
      <li>
        <NavLink to={"/my-products"}>My Products</NavLink>
      </li>
      <li>
        <NavLink to={"/my-bids"}>My Bids</NavLink>
      </li>
      <li>
        <NavLink to={"/create-product"}>Create Product</NavLink>
      </li>
    </>
  );

  return (
    <section className="navbar bg-white shadow-sm px-20 py-4">
      <section className="navbar-start">
        <section className="dropdown">
          <section tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </section>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base leading-[1.52] text-black"
          >
            {links}
          </ul>
        </section>
        <Link className="text-3xl font-bold text-primary leading-10 cursor-pointer" to={"/"}>
          Smart<span className="text-secondary">Deals</span>
        </Link>
      </section>
      <section className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal gap-8 text-base leading-[1.52] text-black">
          {links}
        </ul>
      </section>
      <section className="navbar-end">
        <Link
          to={"/auth/login"}
          className="border border-secondary rounded-sm px-7 py-3 mr-4 text-secondary font-semibold"
        >
          Login
        </Link>
        <Link
          to={"/auth/register"}
          className="border border-secondary bg-secondary rounded-sm px-7 py-3 text-white font-semibold"
        >
          Register
        </Link>
      </section>
    </section>
  );
}

export default Navbar;
