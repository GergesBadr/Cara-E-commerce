import { useQuery } from "@tanstack/react-query";

export function useProductsByCategory(category) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", category],
    queryFn: async function () {
      const res = await fetch(
        `https://dummyjson.com/products/category/${category}`,
      );
      const data = await res.json();
      return data;
    },
  });

  return { data, isLoading, isError, error };
}
