import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import priceFormater from "../helpers/priceFormater";
import { getTotalCartPrice } from "../utilities/cartSlice";
import Button from "./Button";

function CartSummary({ user }) {
  const price = useSelector(getTotalCartPrice);
  const navigate = useNavigate();

  function handleClick() {
    if (!user) {
      toast.error("To make order please log in");
      return navigate("/login");
    }
    navigate("/cart/update-user");
  }

  return (
    <aside className="sticky w-4/5 top-56 h-[450px] mx-auto mt-8 lg:static lg:h-max">
      <h1 className="text-[40px] font-bold tracking-widest p-2 mb-3 text-fontPrimary-600 text-center border-b border-primary-700">
        Summary
      </h1>
      <section className="flex justify-between items-center">
        <span className="text-xl tracking-wider text-fontPrimary-600">
          Estimated Total:
        </span>
        <span className="text-xl tracking-wider text-fontPrimary-500font-bold">
          $ {priceFormater(price)}
        </span>
      </section>
      <Button onClick={handleClick}>Continue</Button>
    </aside>
  );
}

export default CartSummary;
