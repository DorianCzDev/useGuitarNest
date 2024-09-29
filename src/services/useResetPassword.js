import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { resetPasswordApi } from "./apiUser";

export function useResetPassword() {
  const navigate = useNavigate();
  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: resetPasswordApi,
    onSuccess: () => {
      navigate("/");
      toast.dismiss();
      toast.success("Password changed");
    },
    onError: (err) => {
      navigate("/");
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { resetPassword, isPending };
}
