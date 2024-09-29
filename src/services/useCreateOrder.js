import { useMutation } from "@tanstack/react-query";
import { createOrderApi } from "./apiOrders";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import setLocalStorageItem from "../utilities/setLocalStorageItem";

export function useCreateOrder() {
  const navigate = useNavigate();
  const { mutate: createOrder, isPending } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: () => {
      toast.dismiss();
      navigate("/");
      toast.success("Thanks for purchase");
      // navigate(`/payment/${data._id}`);
      setLocalStorageItem("cart", "");
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { createOrder, isPending };
}
