import { useMutation } from "@tanstack/react-query";
import { reportReviewApi } from "./apiReviews";
import toast from "react-hot-toast";

export function useReportReview() {
  const { mutate: reportReview, isPending } = useMutation({
    mutationFn: reportReviewApi,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Review reported");
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { reportReview, isPending };
}
