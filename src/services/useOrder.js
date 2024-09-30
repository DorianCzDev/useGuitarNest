import { useQuery } from "@tanstack/react-query";
import { getOrderApi } from "./apiOrders";

export function useOrder(id) {
  const { isLoading, data: order } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrderApi(id),
  });
  return { isLoading, order };
}
