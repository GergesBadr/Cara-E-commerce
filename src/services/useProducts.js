import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PRODUCTS_PER_PAGE } from "../utils/constants";

export function useProducts() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";
  const searchedValue = searchParams.get("q");
  const currPage = Number(searchParams.get("page")) || 1;

  let query = "";
  let paginate = "?limit=0";

  if (category !== "all") {
    query = `/category/${category}`;
  }

  if (searchedValue) {
    query = `/search?q=${searchedValue}`;
  }

  if (currPage) {
    const from = (currPage - 1) * PRODUCTS_PER_PAGE;
    paginate = `?skip=${from}&limit=${PRODUCTS_PER_PAGE}`;
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", query, paginate],
    queryFn: async function () {
      const res = await fetch(
        `https://dummyjson.com/products${query}${paginate}`,
      );
      const data = await res.json();
      return data;
    },
  });

  // For more better UX, I could prefetch previous and next page from the current page.
  // but I decided to keep it simple.

  return { data, isLoading, isError, error };
}
