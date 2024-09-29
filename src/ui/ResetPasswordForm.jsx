import { useForm } from "react-hook-form";
import { useResetPassword } from "../services/useResetPassword";
import { ErrorMessage } from "@hookform/error-message";
import ErrorSpan from "./ErrorSpan";
import SpinnerMini from "./SpinnerMini";
import toast from "react-hot-toast";

function ResetPasswordForm({ email, forgotPasswordToken }) {
  const { resetPassword, isPending } = useResetPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const { password } = data;
    if (password !== data.confirmPassword) {
      return toast.error("Passwords doesn't match");
    }
    resetPassword({ password, forgotPasswordToken, email });
  }

  function onError(errors) {
    if (errors?.category?.message) {
      alert(errors.category.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="py-6 px-10 w-[500px] bg-primary-950 border border-primary-700 rounded-xl sm:w-11/12 sm:px-4 text-slate-200"
    >
      <div className="grid grid-rows-[1fr_auto_16px] gap-2 px-3   pb-2">
        <label className="block" htmlFor="password">
          New password
        </label>
        <input
          className="text-sm py-2 px-3 rounded-md bg-transparent outline-none border border-primary-700 focus:border-primary-500 tracking-wide"
          type="password"
          disabled={isPending}
          {...register("password", {
            required: "Please provide password",
            minLength: {
              value: 6,
              message: "Password cannnot be shorter than 6 characters",
            },
            maxLength: {
              value: 20,
              message: "Password cannot be longer than 20 characters",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <ErrorSpan>{message}</ErrorSpan>}
        />
      </div>
      <div className="grid grid-rows-[1fr_auto_16px] gap-2 px-3  pb-1">
        <label className="block" htmlFor="confirmPassword">
          Confirm new password
        </label>
        <input
          className="text-sm py-2 px-3 rounded-md bg-transparent outline-none border border-primary-700 focus:border-primary-500 tracking-wide"
          type="password"
          disabled={isPending}
          {...register("confirmPassword", {
            required: "Please confirm password",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="confirmPassword"
          render={({ message }) => <ErrorSpan>{message}</ErrorSpan>}
        />
      </div>
      <div className="flex flex-col pb-3 pt-2 pr-3 pl-3 gap-2 ">
        <button
          type="submit"
          disabled={isPending}
          className="flex w-full items-center justify-center outline-none cursor-pointer transition-all border-none bg-secondary-500 py-4 px-6 rounded-lg hover:bg-secondary-600 text-xl tracking-widest text-white"
        >
          {isPending ? <SpinnerMini /> : "Save"}
        </button>
      </div>
    </form>
  );
}

export default ResetPasswordForm;
