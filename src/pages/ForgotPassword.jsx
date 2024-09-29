import { NavLink } from "react-router-dom";
import ForgotPasswordForm from "../ui/ForgotPasswordForm";

function ForgotPassword() {
  return (
    <div className="flex items-center flex-col min-h-dvh bg-primary-900">
      <NavLink to={"/"}>
        <img
          src="/logo-white-no-background.svg"
          className="w-[400px] object-cover aspect-[4/3]"
        />
      </NavLink>
      <ForgotPasswordForm />
    </div>
  );
}

export default ForgotPassword;
