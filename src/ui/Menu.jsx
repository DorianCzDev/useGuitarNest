import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Menu() {
  const curCart = useSelector((state) => state.cart.cart);
  return (
    <div className="mx-auto w-full flex justify-around">
      <div className="flex justify-center items-center basis-1/3 "></div>
      <div className="flex justify-center items-center basis-1/3">
        <NavLink to="/">
          <img
            src="/logo-white-no-background.svg"
            alt="logo"
            className="object-cover aspect-[4/2] w-[300px] max-w-fit sm:w-[180px]"
          />
        </NavLink>
      </div>
      <div className="flex justify-center items-center basis-1/3 gap-7 sm:gap-1">
        <NavLink to={"/account/user"}>
          <span className="text-5xl cursor-pointer  hover:text-neutral-400 transition-all">
            <MdOutlineAccountCircle className="h-12 sm:h-10" title="Account" />
          </span>
        </NavLink>
        <NavLink to={`/cart`} className="text-5xl cursor-pointer">
          <div className="w-16 h-16 flex justify-center items-center relative bg-secondary-500 rounded-full hover:bg-secondary-600 transition-all">
            <IoCartOutline className="h-12 sm:h-10" title="Cart" />
            <div className="absolute right-1 bottom-2 bg-white rounded-full text-black flex justify-center items-center font-bold text-base h-6 w-6">
              {curCart?.length > 9 ? "9+" : curCart?.length || "0"}
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
