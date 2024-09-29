import { useMutation } from "@tanstack/react-query";
import { verifyEmailApi } from "./apiUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useVerifyEmail() {
  const navigate = useNavigate();
  const { mutate: verifyEmail, isPending } = useMutation({
    mutationFn: verifyEmailApi,
    onSuccess: () => {
      navigate("/");
      toast.dismiss();
      toast.success("Email verified! You can log in now");
    },
    onError: (err) => {
      navigate("/");
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { verifyEmail, isPending };
}
