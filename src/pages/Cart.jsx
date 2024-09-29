import { useSelector } from "react-redux";
import { useCartProducts } from "../services/useCartProducts";
import { useUser } from "../services/useUser";
import Spinner from "../ui/Spinner";
import CartTable from "../ui/CartTable";
import CartSummary from "../ui/CartSummary";
import EmptyCart from "../ui/EmptyCart";

function Cart() {
  const { cartProducts, isLoading } = useCartProducts();
  const { user } = useUser();
  const cart = useSelector((state) => state.cart.cartAfterFetch);

  if (isLoading) return <Spinner />;
  if (!cartProducts) return <EmptyCart />;

  return (
    <div className="grid grid-cols-[1fr_450px] mx-auto mt-12 mb-20 w-full relative lg:block">
      <CartTable products={cartProducts} cart={cart} />
      <CartSummary user={user} />
    </div>
  );
}

export default Cart;
