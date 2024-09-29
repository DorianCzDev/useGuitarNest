import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signOutApi } from "./apiUser";

export function useSignOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: signOut, isPending } = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: ["user"], exact: true });
      navigate("/", { replace: true });
      toast.dismiss();
      toast.success("Signed out");
    },
    onError: (err) => {
      queryClient.resetQueries({ queryKey: ["user"], exact: true });
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { signOut, isPending };
}
