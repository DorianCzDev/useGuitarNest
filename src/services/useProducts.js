import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getProductsApi } from "./apiProducts";

export function useProducts() {
  const [searchParams] = useSearchParams();
  let params = [];
  for (let entry of searchParams.entries()) {
    params.push(entry);
  }
  let category = "";
  if (window.location.href.includes("guitars")) {
    category = "guitar";
  } else if (window.location.href.includes("amplifiers")) {
    category = "amplifier";
  } else if (window.location.href.includes("pickups")) {
    category = "pickup";
  } else if (window.location.href.includes("multieffects")) {
    category = "multi effect";
  }

  const {
    isLoading,
    data: { products, productsCount, productsNeck, productsBody } = {},
  } = useQuery({
    queryKey: ["products", category, params],
    queryFn: () => getProductsApi({ category, params }),
  });

  return { isLoading, products, productsCount, productsNeck, productsBody };
}
