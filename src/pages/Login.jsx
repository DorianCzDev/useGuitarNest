import { NavLink } from "react-router-dom";
import LoginForm from "../ui/LoginForm";
import getLocalStorageItem from "../utilities/getLocalStorageItem";

function Login() {
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
      <LoginForm />
    </div>
  );
}

export default Login;
