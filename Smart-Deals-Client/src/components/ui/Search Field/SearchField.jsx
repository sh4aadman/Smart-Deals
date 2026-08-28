import { CiSearch } from "react-icons/ci";

function SearchField() {
  return (
    <section
      className="mt-8 w-1/3 mx-auto
    flex
    rounded-full
    shadow-lg"
    >
      <section className="grow">
        <label className="input validator join-item w-full rounded-s-full outline-0 border-0">
          <input
            type="text"
            name="search"
            className="outline-none bg-white rounded-s-full placeholder:text-neutral placeholder:text-sm"
            placeholder="Search for Products, Categories, etc."
          />
        </label>
      </section>
      <button className="btn btn-secondary join-item rounded-e-full">
        <CiSearch />
      </button>
    </section>
  );
}

export default SearchField;
