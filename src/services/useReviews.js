import { useQuery } from "@tanstack/react-query";
import { getProductReviewsApi } from "./apiReviews";
import { useSearchParams } from "react-router-dom";

export function useProductReviews(productId) {
  const [searchParams] = useSearchParams();
  const rating = searchParams.get("rating");
  const { isLoading, data: { reviews, ratingsCount } = {} } = useQuery({
    queryKey: ["reviews", productId, rating],
    queryFn: () => getProductReviewsApi(productId, rating),
  });
  return { isLoading, reviews, ratingsCount };
}
