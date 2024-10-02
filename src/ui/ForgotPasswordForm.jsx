import { useForm } from "react-hook-form";
import { useForgotPassword } from "../services/useForgotPassword";
import SpinnerMini from "./SpinnerMini";
import { ErrorMessage } from "@hookform/error-message";
import ErrorSpan from "./ErrorSpan";

function ForgotPasswordForm() {
  const { forgotPassword, isPending } = useForgotPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    forgotPassword(data.email);
  }

  function onError(errors) {
    if (errors?.category?.message) {
      alert(errors.category.message);
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="py-6 px-10 w-[500px] bg-primary-950 border border-primary-700 rounded-xl sm:w-11/12 sm:px-4 text-fontPrimary-500"
    >
      <div className="grid grid-rows-[1fr_auto_16px] gap-2 px-3 pb-1">
        <label className="block" htmlFor="email">
          Please provide your email
        </label>
        <input
          className="text-sm py-2 px-3 rounded-md bg-transparent outline-none border border-primary-700 focus:border-primary-500 tracking-wide"
          type="email"
          disabled={isPending}
          {...register("email", {
            required: "Please provide email",
            maxLength: {
              value: 50,
              message: "No more than 50 characters",
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <ErrorSpan>{message}</ErrorSpan>}
        />
      </div>
      <div className="flex flex-col pb-3 pt-2 pr-3 pl-3 gap-2 ">
        <button
          type="submit"
          disabled={isPending}
          className="flex w-full items-center justify-center outline-none cursor-pointer transition-all border-none bg-secondary-500 py-4 px-6 rounded-lg hover:bg-secondary-600 text-xl tracking-widest text-white"
        >
          {isPending ? <SpinnerMini /> : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default ForgotPasswordForm;
