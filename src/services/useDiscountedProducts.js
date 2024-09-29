import { useQuery } from "@tanstack/react-query";
import { getDiscountedProductsApi } from "./apiProducts";

export function useDiscountedProducts() {
  const { isLoading, data: discountedProducts } = useQuery({
    queryKey: ["discountedProducts"],
    queryFn: getDiscountedProductsApi,
  });
  return { isLoading, discountedProducts };
}
