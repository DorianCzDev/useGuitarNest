import { NavLink } from "react-router-dom";

function OrderCustomerDetails({ user, type = "cart" }) {
  return (
    <div className=" bg-accent-500 rounded-xl w-max relative py-5 px-7 group  md:mb-5 md:w-full md:flex md:flex-col md:items-center md:text-center">
      <p className="text-lg py-2 tracking-wide">{`${user.firstName} ${user.lastName}`}</p>
      <p className="text-lg py-2 tracking-wide">{`${user.address} ${user.postCode} ${user.city} `}</p>
      <p className="text-lg py-2 tracking-wide">{`${user.phoneNumber} ${user.country} `}</p>
      {type === "cart" && (
        <NavLink
          to={`/cart/update-user`}
          className="absolute top-5 right-4 text-secondary-500 cursor-pointer text-lg opacity-0 transition-all group-hover:opacity-100"
        >
          edit
        </NavLink>
      )}
    </div>
  );
}

export default OrderCustomerDetails;
