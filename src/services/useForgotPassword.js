import { useMutation } from "@tanstack/react-query";
import { forgotPasswordApi } from "./apiUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useForgotPassword() {
  const navigate = useNavigate();
  const { mutate: forgotPassword, isPending } = useMutation({
    mutationFn: forgotPasswordApi,
    onSuccess: () => {
      navigate("/");
      toast.dismiss();
      toast.success("Please check your email for reset password link");
    },
    onError: (err) => {
      navigate("/");
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { forgotPassword, isPending };
}
