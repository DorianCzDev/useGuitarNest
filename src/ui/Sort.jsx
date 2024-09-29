import { useSearchParams } from "react-router-dom";

function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleFilter(name, value) {
    if (searchParams.get(name) === value || !value) {
      searchParams.delete(name);
    } else {
      searchParams.set(name, value);
    }
    setSearchParams(searchParams);
  }

  return (
    <div className="flex w-full justify-end items-center md:pb-6 md:justify-center">
      <select
        onChange={(e) => handleFilter("sort", e.target.value)}
        className="py-1 px-2 outline-none bg-accent-500 rounded text-neutral-400 border border-primary-600"
      >
        <option value="created_at">Default</option>
        <option value="name">Name (A-Z)</option>
        <option value="-name">Name (Z-A)</option>
        <option value="price">Price (low-high)</option>
        <option value="-price">Price (high-low)</option>
        <option value="-featured">Featured first</option>
        <option value="-reviews_number">Popularity</option>
      </select>
    </div>
  );
}

export default Sort;
