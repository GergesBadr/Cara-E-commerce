import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

function SearchShop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queue, setQueue] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    if (queue !== "") {
      searchParams.set("q", queue);
      setSearchParams(searchParams);
    }

    // Reset params
    if (searchParams.get("category")) {
      searchParams.delete("category");
      setSearchParams(searchParams);
    }
    if (searchParams.get("page")) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
  }

  return (
    <form onSubmit={handleSearch} className="w-full sm:w-auto">
      <label htmlFor="search-product" className="mb-2 block font-medium">
        Search for a product:
      </label>
      <div className="relative">
        <input
          type="search"
          name="search-product"
          id="search-product"
          placeholder="e.g phone..."
          value={queue}
          onChange={(e) => setQueue(e.target.value)}
          className="w-full min-w-[260px] rounded-lg px-4 py-3 shadow-sm dark:bg-dark-bg md:min-w-[320px]"
        />
        <button
          aria-label="search"
          className="absolute right-0 top-0 flex h-full w-12 items-center justify-center rounded-br-lg rounded-tr-lg bg-teal-700 text-white"
        >
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      </div>
    </form>
  );
}

export default SearchShop;
