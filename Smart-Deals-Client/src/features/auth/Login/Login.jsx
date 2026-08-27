import { Link } from "react-router";

function Login() {
  return (
    <section className="bg-accent h-[calc(100vh-85px)] flex justify-center items-center">
      <section className="card bg-white w-1/4 shrink-0 shadow-xl">
        <section className="card-body p-10">
          <h1 className="font-semibold text-3xl text-primary text-center">
            Login
          </h1>
          <p className="mt-2 mb-6 leading-6 text-primary text-base text-center">
            Don't have an account?{" "}
            <Link className="font-medium text-secondary" to={"/auth/register"}>
              Register Now
            </Link>
          </p>
          <fieldset className="fieldset">
            <label className="label font-medium text-sm text-primary leading-5">
              Email
            </label>
            <input
              type="email"
              className="input outline-0 py-2 w-full border-accent text-base focus:border-secondary placeholder:text-base placeholder:leading-6"
              placeholder="Email"
            />
            <label className="label mt-4 font-medium text-sm text-primary leading-5">
              Password
            </label>
            <input
              type="password"
              className="input outline-0 py-2 w-full border-accent text-base focus:border-secondary placeholder:text-base placeholder:leading-6"
              placeholder="Password"
            />
            <section className="mt-1.5">
              <a className="link link-hover text-sm text-primary opacity-60 leading-5">
                Forgot password?
              </a>
            </section>
            <button className="mt-6 py-3.5 bg-secondary rounded-sm font-semibold text-base text-white cursor-pointer">
              Sign In
            </button>
          </fieldset>
          <section>
            <p className="font-semibold text-base text-primary text-center">OR</p>
          </section>
          <button className="btn py-4 bg-white font-semibold text-base text-primary border-accent">
            <svg
              aria-label="Google logo"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Sign In with Google
          </button>
        </section>
      </section>
    </section>
  );
}

export default Login;
