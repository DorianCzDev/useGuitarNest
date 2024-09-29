import { NavLink, useSearchParams } from "react-router-dom";
import ResetPasswordForm from "../ui/ResetPasswordForm";

function ResetPassword() {
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email");
  const forgotPasswordToken = searchParams.get("forgotPasswordToken");

  return (
    <div className="flex items-center flex-col min-h-dvh bg-primary-900">
      <NavLink to={"/"}>
        <img
          src="/logo-white-no-background.svg"
          className="w-[400px] object-cover aspect-[4/3]"
        />
      </NavLink>
      <ResetPasswordForm
        email={email}
        forgotPasswordToken={forgotPasswordToken}
      />
    </div>
  );
}

export default ResetPassword;
