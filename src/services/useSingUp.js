import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signUpApi } from "./apiUser";

export function useSingnUp() {
  const navigate = useNavigate();

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success("Please check your email to activate the account");
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { signUp, isPending };
}
