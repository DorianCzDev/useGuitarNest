import { FaMoon } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import setLocalStorageItem from "../utilities/setLocalStorageItem";
import getLocalStorageItem from "../utilities/getLocalStorageItem";
import { FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

function Menu() {
  const curCart = useSelector((state) => state.cart.cart);

  const [theme, setTheme] = useState(getLocalStorageItem("theme"));
  useEffect(() => {
    if (theme) {
      document.body.className = theme;
    } else if (!theme) {
      setTheme("dark");
      setLocalStorageItem("theme", "dark");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <div className="mx-auto w-full flex justify-around">
      <div className="flex justify-center items-center basis-1/3 ">
        <div className="text-5xl cursor-pointer  hover:text-fontPrimary-700 transition-all text-fontPrimary-500">
          {theme === "light" && (
            <FaMoon
              onClick={() => {
                setTheme("dark");
                setLocalStorageItem("theme", "dark");
              }}
              className="h-12 sm:h-10"
            />
          )}
          {(theme === "dark" || !theme) && (
            <FaSun
              onClick={() => {
                setTheme("light");
                setLocalStorageItem("theme", "light");
              }}
              className="h-12 sm:h-10"
            />
          )}
        </div>
      </div>
      <div className="flex justify-center items-center basis-1/3">
        <NavLink to="/">
          {theme === "dark" ? (
            <img
              src="/logo-white-no-background.svg"
              alt="logo"
              className="object-cover aspect-[4/2] w-[300px] max-w-fit sm:w-[180px]"
            />
          ) : (
            <img
              src="/logo-black.svg"
              alt="logo"
              className="object-cover aspect-[4/2] w-[300px] max-w-fit sm:w-[180px]"
            />
          )}
        </NavLink>
      </div>
      <div className="flex justify-center items-center basis-1/3 gap-7 sm:gap-1">
        <NavLink to={"/account/user"}>
          <div className="text-5xl cursor-pointer  hover:text-fontPrimary-700 transition-all text-fontPrimary-500">
            <MdOutlineAccountCircle className="h-12 sm:h-10" title="Account" />
          </div>
        </NavLink>
        <NavLink to={`/cart`} className="text-5xl cursor-pointer">
          <div className="w-16 h-16 flex justify-center items-center relative bg-secondary-500 rounded-full hover:bg-secondary-600 transition-all text-slate-50">
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
