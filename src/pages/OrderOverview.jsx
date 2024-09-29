import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";
import { createValidProductObject } from "../helpers/createValidProductObject";
import { useCartProducts } from "../services/useCartProducts";
import { useUser } from "../services/useUser";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDeliveryMethods } from "../services/useDeliveryMethods";
import { useCreateOrder } from "../services/useCreateOrder";
import OrderCustomerDetails from "../ui/OrderCustomerDetails";
import {
  OrderSummaryNumberSpan,
  OrderSummarySpan,
  OrderSummaryTableFooter,
  OrderSummaryTableHeader,
  OrderSummaryTableRow,
} from "../ui/OrderSummaryUI";
import priceFormater from "../helpers/priceFormater";
import OrderSummaryAside from "../ui/OrderSummaryAside";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";
import DeliveryMethod from "../ui/DeliveryMethod";

function OrderOverview() {
  const [deliveryDetails, setDeliveryDetails] = useState({
    supplier: "",
    cost: 0,
  });
  const cart = useSelector((state) => state.cart.cartAfterFetch);
  const navigate = useNavigate();
  const { user, isLoadingUser } = useUser();
  const { cartProducts, isLoading: isLoadingProducts } = useCartProducts();
  const { deliveryMethods, isLoading: isLoadingDeliveryMethods } =
    useDeliveryMethods();
  const { createOrder, isPending: isOrdering } = useCreateOrder();
  function handleButton() {
    const body = {
      clientProducts,
      supplier: deliveryDetails.supplier,
      deliveryCost: deliveryDetails.cost,
      totalPrice,
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      city: user.city,
      email: user.email,
      phoneNumber: user.phoneNumber,
      postCode: user.postCode,
      country: user.country,
    };

    createOrder({ body });
  }

  useEffect(() => {
    if (!cart || cart.length < 1 || (!isLoadingUser && !user)) {
      return navigate("/cart");
    }
  }, [navigate, cart, user, isLoadingUser]);

  if (isLoadingProducts || isLoadingDeliveryMethods || isLoadingUser)
    return <Spinner />;

  if (isLoadingProducts) return <Spinner />;

  const products = createValidProductObject(cartProducts, cart);
  const cartPrice = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalPrice = deliveryDetails.cost
    ? cartPrice + deliveryDetails.cost
    : cartPrice + 0;

  const clientProducts = products.map((product) => {
    const object = {
      productId: product.id,
      quantity: product.quantity,
      price: product.price,
      image: product.image,
      name: product.name,
    };
    return object;
  });
  return (
    <div className="mt-10 mx-auto grid grid-cols-[1fr_450px] relative lg:block">
      <article>
        <h1 className="text-[40px] font-bold tracking-widest p-2 mb-6 text-neutral-400">
          Order overview
        </h1>
        <OrderCustomerDetails user={user} />
        <div className="mt-5">
          <OrderSummaryTableHeader>
            <span className=" my-auto px-6 font-light text-lg md:hidden"></span>
            <OrderSummarySpan>Name</OrderSummarySpan>
            <OrderSummarySpan>Unit price</OrderSummarySpan>
            <OrderSummarySpan>Amount</OrderSummarySpan>
            <OrderSummarySpan>Total price</OrderSummarySpan>
          </OrderSummaryTableHeader>
          {products.map((product) => (
            <OrderSummaryTableRow key={product.id}>
              <div className=" my-auto px-6 flex justify-center items-center md:hidden">
                <img
                  className="flex w-auto h-auto max-w-10 max-h-[60px] object-cover"
                  src={product.image}
                />
              </div>
              <OrderSummarySpan>
                <NavLink
                  href={`/products/${product.name.replaceAll(" ", "_")}`}
                  className="flex items-center min-h-10 uppercase"
                >
                  {product.name}
                </NavLink>
              </OrderSummarySpan>
              <OrderSummaryNumberSpan>
                {priceFormater(product.price)}
              </OrderSummaryNumberSpan>
              <OrderSummaryNumberSpan>
                {product.quantity}
              </OrderSummaryNumberSpan>
              <OrderSummaryNumberSpan>
                {priceFormater(product.price * product.quantity)}
              </OrderSummaryNumberSpan>
            </OrderSummaryTableRow>
          ))}
          <OrderSummaryTableFooter>
            <span className="my-auto px-6 font-light text-lg pr-10">
              Cart price:
            </span>
            <span className="my-auto px-6 font-light text-lg pr-6">
              $ {priceFormater(cartPrice)}
            </span>
          </OrderSummaryTableFooter>
        </div>
      </article>
      <aside className="sticky top-[300px] w-[84%] h-fit py-4 px-7 rounded-2xl bg-accent-500 mt-8 mx-auto lg:static">
        <OrderSummaryAside
          deliveryDetails={deliveryDetails}
          totalCartPrice={cartPrice}
          totalPrice={totalPrice}
        />
        <div className="pb-4">
          <Button
            onClick={handleButton}
            disabled={deliveryDetails.cost === 0 || isOrdering}
          >
            {isOrdering ? <SpinnerMini /> : "Pay and order"}
          </Button>
        </div>
      </aside>
      <DeliveryMethod
        deliveryMethods={deliveryMethods}
        setDeliveryDetails={setDeliveryDetails}
      />
    </div>
  );
}

export default OrderOverview;
