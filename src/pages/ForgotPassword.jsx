import { NavLink } from "react-router-dom";
import ForgotPasswordForm from "../ui/ForgotPasswordForm";
import getLocalStorageItem from "../utilities/getLocalStorageItem";

function ForgotPassword() {
  const theme = getLocalStorageItem("theme");
  return (
    <div className="flex items-center flex-col min-h-dvh bg-primary-900">
      <NavLink to={"/"}>
        {theme === "dark" ? (
          <img
            src="/logo-white-no-background.svg"
            alt="logo"
            className="w-[400px] object-cover aspect-[4/3]"
          />
        ) : (
          <img
            src="/logo-black.svg"
            alt="logo"
            className="w-[400px] object-cover aspect-[4/3]"
          />
        )}
      </NavLink>
      <ForgotPasswordForm />
    </div>
  );
}

export default ForgotPassword;
