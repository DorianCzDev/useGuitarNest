import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleFilter = (name, value) => {
    searchParams.set(name, value);
    if (!value) searchParams.delete(name);
    setSearchParams(searchParams);
  };
  return (
    <div className="mt-6 flex justify-center border-b border-primary-600">
      <input
        placeholder="Search for products..."
        onChange={(e) => handleFilter("name", e.target.value)}
        className="text-neutral-400 border border-primary-600 w-3/4 outline-none mb-10 focus:border-primary-500 py-3 px-4 bg-accent-500 md:w-full"
      />
    </div>
  );
}

export default Search;
