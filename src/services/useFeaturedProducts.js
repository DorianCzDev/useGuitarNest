import { useQuery } from "@tanstack/react-query";
import { getFeaturedProductsApi } from "./apiProducts";

export function useFeaturedProducts() {
  const { isLoading, data: featuredProducts } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: getFeaturedProductsApi,
  });
  return { isLoading, featuredProducts };
}
