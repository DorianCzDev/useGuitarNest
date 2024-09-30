import { useQuery } from "@tanstack/react-query";
import { getUserOrdersApi } from "./apiOrders";

export function useOrders() {
  const { isLoading, data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: getUserOrdersApi,
  });
  return { isLoading, orders };
}
