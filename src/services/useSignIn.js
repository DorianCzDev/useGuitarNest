import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signInApi } from "./apiUser";

export function useSignIn() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: signIn, isPending } = useMutation({
    mutationFn: signInApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { signIn, isPending };
}
