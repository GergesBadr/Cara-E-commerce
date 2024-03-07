import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async function () {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      return data;
    },
  });

  return { data, isLoading, isError, error };
}
