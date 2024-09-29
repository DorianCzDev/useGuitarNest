import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUserPasswordApi } from "./apiUser";

export function useUpdatUserPassword() {
  const { mutate: updateUserPassword, isPending } = useMutation({
    mutationFn: updateUserPasswordApi,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Password successfully changed");
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { updateUserPassword, isPending };
}
