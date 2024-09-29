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
      queryClient.removeQueries(["user"]);
      navigate("/", { replace: true });
      toast.dismiss();
      toast.success("Signed out");
    },
    onError: (err) => {
      queryClient.removeQueries(["user"]);
      toast.dismiss();
      toast.error(err.message);
    },
    onMutate: () => {
      queryClient.removeQueries(["user"]);
    },
  });
  return { signOut, isPending };
}
