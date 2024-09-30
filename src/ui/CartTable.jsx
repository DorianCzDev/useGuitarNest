import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
  setCartAfterFetch,
} from "../utilities/cartSlice";
import { NavLink } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import priceFormater from "../helpers/priceFormater";

function CartTable({ cart, products }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCartAfterFetch(products));
  }, [dispatch, products]);

  return (
    <div>
      <h1 className="text-5xl font-bold tracking-widest p-2 mb-10 text-neutral-400 lg:text-center">
        Cart
      </h1>
      <article>
        {cart &&
          cart.map((product) => (
            <CartTableRow key={product.id}>
              <div className="flex justify-center items-center bg-white mr-5 md:hidden">
                <NavLink
                  to={`/product/${product.name}`}
                  className="flex items-center min-h-10"
                >
                  <img
                    src={product.image}
                    className="flex w-auto h-auto max-w-10 max-h-[60px] object-cover"
                  />
                </NavLink>
              </div>
              <NavLink
                to={`/product/${product.name}`}
                className="flex items-center min-h-10"
              >
                <CartTableCol>{product.name}</CartTableCol>
              </NavLink>
              <CartTableCol>
                <QuantityContainer>
                  <Button
                    onClick={() => dispatch(decreaseItemQuantity(product.id))}
                  >
                    <FaMinus />
                  </Button>
                  {product.quantity}
                  <Button
                    onClick={() => dispatch(increaseItemQuantity(product.id))}
                  >
                    <FaPlus />
                  </Button>
                </QuantityContainer>
              </CartTableCol>
              <CartTableCol>$ {priceFormater(product.price)}</CartTableCol>
              <CartTableCol>
                <Button onClick={() => dispatch(deleteItem(product.id))}>
                  <MdDelete className="text-2xl" />
                </Button>
              </CartTableCol>
            </CartTableRow>
          ))}
      </article>
    </div>
  );
}

export default CartTable;

function CartTableRow({ children }) {
  return (
    <div className="w-[94%] grid grid-cols-[80px_1fr_200px_120px_80px] py-6 px-2 mx-auto mb-3 rounded-2xl bg-accent-500 text-neutral-200 h-[116px] md:grid-cols-[35%_25%_30%_10%]">
      {children}
    </div>
  );
}

function CartTableCol({ children }) {
  return (
    <div className="flex items-center text-lg uppercase font-bold tracking-wider">
      {children}
    </div>
  );
}

function QuantityContainer({ children }) {
  return (
    <div className="flex items-center justify-evenly h-10 w-[120px] bg-primary-900 rounded-xl">
      {children}
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center cursor-pointer border-none outline-none bg-transparent text-lg text-neutral-500 transition-all hover:text-neutral-400"
    >
      {children}
    </button>
  );
}
