import { NavLink } from "react-router-dom";
import priceFormater from "../helpers/priceFormater";

function OrdersList({ orders }) {
  return (
    <div className="w-[1200px] lg:w-full">
      <OrdersListTableHeader>
        <span className="flex items-center justify-center lg:hidden">
          order id
        </span>
        <OrdersListSpan>total price</OrdersListSpan>
        <OrdersListSpan>status</OrdersListSpan>
        <OrdersListSpan>order accepted</OrdersListSpan>
      </OrdersListTableHeader>
      {orders.map((order) => (
        <NavLink key={order.id} to={`${order.id}`}>
          <OrdersListTableRow>
            <span className="flex items-center justify-center lg:hidden">
              {order.id}
            </span>
            <OrdersListSpan>$ {priceFormater(order.total)}</OrdersListSpan>
            <OrdersListSpan>{order.status}</OrdersListSpan>
            <OrdersListSpan>{order.created_at.split("T")[0]}</OrdersListSpan>
          </OrdersListTableRow>
        </NavLink>
      ))}
    </div>
  );
}

export default OrdersList;

function OrdersListTableHeader({ children }) {
  return (
    <div className="grid grid-cols-[1fr_200px_200px_240px] mx-auto min-w-[800px] w-[940px] text-xl tracking-wider font-light uppercase border-b border-primary-700 py-2 pr-2 lg:grid-cols-[1fr_1fr_1fr] lg:min-w-fit lg:w-fit">
      {children}
    </div>
  );
}

function OrdersListTableRow({ children }) {
  return (
    <div className="grid grid-cols-[1fr_200px_200px_240px] mx-auto min-w-[800px] w-[940px] tracking-wide py-6 pr-2 border-b border-primary-700 transition-all hover:bg-primary-500 font-bold lg:grid-cols-[1fr_1fr_1fr] lg:min-w-fit lg:w-fit">
      {children}
    </div>
  );
}

function OrdersListSpan({ children }) {
  return <span className="flex items-center justify-center">{children}</span>;
}
