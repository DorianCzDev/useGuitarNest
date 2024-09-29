import { NavLink } from "react-router-dom";
import SignUpForm from "../ui/SignUpForm";

function SignUp() {
  return (
    <div className="flex items-center flex-col min-h-dvh bg-primary-900">
      <NavLink to={"/"}>
        <img
          src="/logo-white-no-background.svg"
          className="w-[400px] object-cover aspect-[4/3]"
        />
      </NavLink>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
