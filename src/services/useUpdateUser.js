import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserApi } from "./apiUser";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export function useUpdateUser() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      if (!location.pathname.includes("cart")) {
        toast.dismiss();
        toast.success(
          "Your default shipment details have been successfully saved"
        );
      } else {
        navigate("/cart/overview");
      }
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { updateUser, isPending };
}
