import { useQuery } from "@tanstack/react-query";
import { getCurrentUserApi } from "./apiUser";

export function useUser() {
  const {
    isLoading,
    data: user,
    isLoadingError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUserApi,
    retry: false,
  });

  return { isLoading, user, isLoadingError };
}
