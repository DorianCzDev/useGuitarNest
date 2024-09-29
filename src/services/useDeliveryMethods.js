import { useQuery } from "@tanstack/react-query";
import { getDeliveryMethodsApi } from "./apiDeliveryMethods";

export function useDeliveryMethods() {
  const { data: deliveryMethods, isLoading } = useQuery({
    queryKey: ["deliveryMethods"],
    queryFn: getDeliveryMethodsApi,
  });

  return { deliveryMethods, isLoading };
}
