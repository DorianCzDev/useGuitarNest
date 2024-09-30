import { useOrders } from "../services/useOrders";
import OrdersList from "../ui/OrdersList";
import Spinner from "../ui/Spinner";

function Orders() {
  const { orders, isLoading } = useOrders();

  if (isLoading) return <Spinner />;
  return <OrdersList orders={orders} />;
}

export default Orders;
