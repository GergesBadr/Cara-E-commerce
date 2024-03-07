import { useQuery } from "@tanstack/react-query";

export function useFeaturedProducts() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["featured-products"],
    queryFn: async function () {
      // For featured products, get some random 14 products
      const res = await fetch("https://dummyjson.com/products?limit=14&skip=0");
      const data = await res.json();
      return data;
    },
  });

  return { data, isLoading, isError, error };
}
