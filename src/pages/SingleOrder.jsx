import { useParams } from "react-router-dom";
import { useOrder } from "../services/useOrder";
import Spinner from "../ui/Spinner";
import PlacedOrderOverview from "../ui/PlacedOrderOverview";
import PlacedOrderStatus from "../ui/PlacedOrderStatus";
import priceFormater from "../helpers/priceFormater";

function SingleOrder() {
  const { id } = useParams();
  const { order, isLoading } = useOrder(id);
  if (isLoading) return <Spinner />;
  const { orderProducts } = order;
  return (
    <>
      <div className="flex gap-7 md:block">
        <PlacedOrderOverview order={order} />
        <PlacedOrderStatus order={order} />
      </div>
      <div className="mt-5">
        <OrderSummaryTableHeader>
          <span className=" my-auto px-6 font-light text-lg md:hidden"></span>
          <OrderSummarySpan>Name</OrderSummarySpan>
          <OrderSummarySpan>Unit price</OrderSummarySpan>
          <OrderSummarySpan>Amount</OrderSummarySpan>
          <OrderSummarySpan>Total price</OrderSummarySpan>
        </OrderSummaryTableHeader>
        {orderProducts.map((item) => (
          <OrderSummaryTableRow key={item.id}>
            <div className=" my-auto px-6 flex justify-center items-center md:hidden"></div>
            <OrderSummarySpan>{item.name}</OrderSummarySpan>
            <OrderSummaryNumberSpan>
              {priceFormater(item.price)}
            </OrderSummaryNumberSpan>
            <OrderSummaryNumberSpan>{item.quantity}</OrderSummaryNumberSpan>
            <OrderSummaryNumberSpan>
              {priceFormater(item.price * item.quantity)}
            </OrderSummaryNumberSpan>
          </OrderSummaryTableRow>
        ))}
        <OrderSummaryTableFooter>
          <span className="my-auto px-6 font-light text-lg pr-10">
            Total price (with delivery cost):
          </span>
          <span className="my-auto px-6 font-light text-lg pr-6">
            {priceFormater(order.total)} $
          </span>
        </OrderSummaryTableFooter>
      </div>
    </>
  );
}

export default SingleOrder;

export function OrderSummaryTableHeader({ children }) {
  return (
    <div className="grid grid-cols-[80px_1fr_140px_120px_180px] border border-primary-700 rounded-t-lg h-[60px] w-full md:grid-cols-[35%_20%_20%_25%]">
      {children}
    </div>
  );
}

export function OrderSummarySpan({ children }) {
  return <span className=" my-auto px-6 font-light text-lg">{children}</span>;
}

export function OrderSummaryNumberSpan({ children }) {
  return (
    <span className=" my-auto  font-light text-lg pl-10 md:flex md:justify-center md:pl-2">
      {children}
    </span>
  );
}

export function OrderSummaryTableRow({ children }) {
  return (
    <div className="grid grid-cols-[80px_1fr_140px_120px_180px] border-b border-l border-r border-primary-700  min-h-[70px] w-full bg-accent-500 md:grid-cols-[35%_20%_20%_25%]">
      {children}
    </div>
  );
}

export function OrderSummaryTableFooter({ children }) {
  return (
    <div className="flex justify-end items-center pr-10 border-l border-r border-b rounded-b-lg h-[60px] min-h-[60px] w-full border-primary-700 md:h-max">
      {children}
    </div>
  );
}
