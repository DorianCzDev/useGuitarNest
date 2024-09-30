import OrderCustomerDetails from "./OrderCustomerDetails";

function PlacedOrderOverview({ order }) {
  const user = {
    firstName: order.firstName,
    lastName: order.lastName,
    address: order.address,
    postCode: order.postCode,
    city: order.city,
    phoneNumber: order.phoneNumber,
    country: order.country,
  };

  return <OrderCustomerDetails user={user} type="order" />;
}

export default PlacedOrderOverview;
