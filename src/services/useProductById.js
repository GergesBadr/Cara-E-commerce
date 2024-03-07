import { useQuery } from "@tanstack/react-query";

export function useProductById(productId) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", productId],
    queryFn: async function () {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await res.json();
      return data;
    },
  });

  return { data, isLoading, isError, error };
}
