import { ErrorMessage } from "@hookform/error-message";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useUpdateUser } from "../services/useUpdateUser";
import { useUser } from "../services/useUser";
import { countries } from "../utilities/countries";
import Button from "./Button";
import ErrorSpan from "./ErrorSpan";
import SpinnerMini from "./SpinnerMini";

function UpdateUserForm() {
  const { user, isLoading } = useUser();
  const location = useLocation();
  const pathname = location.pathname;
  const { updateUser, isPending } = useUpdateUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isLoading) {
      return reset(user);
    }
  }, [isLoading, user, reset]);

  function onSubmit(data) {
    updateUser(data);
  }

  function onError(errors) {
    if (errors?.category?.message) {
      alert(errors.category.message);
    }
  }

  return (
    <article>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="pb-16">
        <div className="grid grid-cols-[1fr_1fr] gap-3 md:grid-cols-[1fr]">
          <div className="grid grid-rows-[1fr_auto_16px]">
            <label
              htmlFor="firtsName"
              className="mt-2 pb-1 pl-1 font-light tracking-wider text-neutral-400 border-b border-primary-700"
            >
              first name
            </label>
            <input
              className=" text-lg py-[6px] px-3 mt-2 rounded-md font-light outline-none tracking-wider border bg-transparent border-primary-600"
              type="text"
              {...register("firstName", {
                required: "This field is required",
                maxLength: {
                  value: 40,
                  message: "No more than 40 characters",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="firstName"
              render={({ message }) => <ErrorSpan>{message}</ErrorSpan>}
            />
          </div>
          <div className="grid grid-rows-[1fr_auto_16px]">
            <label
              htmlFor="lastName"
              className="mt-2 pb-1 pl-1 font-light tracking-wider text-neutral-400 border-b border-primary-700"
            >
              last name
            </label>
            <input
              className=" text-lg py-[6px] px-3 mt-2 rounded-md font-light outline-none tracking-wider border bg-transparent border-primary-600"
              type="text"
              disabled={isLoading || isPending}
              {...register("lastName", {
                required: "This field is required",
                maxLength: {
                  value: 40,
                  message: "No more than 40 characters",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="lastName"
              render={({ message }) => <ErrorSpan>{message}</ErrorSpan>}
            />
          </div>
        </div>
        <div className="grid grid-cols-[1fr] gap-3">
          <div className="grid grid-rows-[1fr_auto_16px]">
            <label
              htmlFor="address"
              className="mt-2 pb-1 pl-1 font-light tracking-wider text-neutral-400 border-b border-primary-700"
            >
              street address
            </label>
            <input
              className=" text-lg py-[6px] px-3 mt-2 rounded-md font-light outline-none tracking-wider border bg-transparent border-primary-600"
              type="text"
              disabled={isLoading || isPending}
              {...register("address", {
                required: "This field is required",
                maxLength: {
                  value: 40,
                  message: "No more than 40 characters",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="address"
              render={({ message }) => <ErrorSpan>{message}</ErrorSpan>}
            />
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-3 md:grid-cols-[1fr]">
          <div className="grid grid-rows-[1fr_auto_16px]">
            <label
              htmlFor="city"
              className="mt-2 pb-1 pl-1 font-light tracking-wider text-neutral-400 border-b border-primary-700"
            >
              city
            </label>
            <input
              className=" text-lg py-[6px] px-3 mt-2 rounded-md font-light outline-none tracking-wider border bg-transparent border-primary-600"
              type="text"
              disabled={isLoading || isPending}
              {...register("city", {
                required: "This field is required",
                maxLength: {
                  value: 40,
                  message: "No more than 40 characters",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="city"
              render={({ message }) => <ErrorSpan>{message}</ErrorSpan>}
            />
          </div>
          <div className="grid grid-rows-[1fr_auto_16px]">
            <label
              htmlFor="postCode"
              className="mt-2 pb-1 pl-1 font-light tracking-wider text-neutral-400 border-b border-primary-700"
            >
              post code
            </label>
            <input
              className=" text-lg py-[6px] px-3 mt-2 rounded-md font-light outline-none tracking-wider border bg-transparent border-primary-600"
              type="text"
              disabled={isLoading || isPending}
              {...register("postCode", {
                required: "This field is required",
                maxLength: {
                  value: 10,
                  message: "No more than 10 characters",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="postCode"
              render={({ message }) => <ErrorSpan>{message}</ErrorSpan>}
            />
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-3 md:block">
          <div className="grid grid-rows-[1fr_auto_16px]">
            <label
              htmlFor="phoneNumber"
              className="mt-2 pb-1 pl-1 font-light tracking-wider text-neutral-400 border-b border-primary-700"
            >
              phone number
            </label>
            <input
              className=" text-lg py-[6px] px-3 mt-2 rounded-md font-light outline-none tracking-wider border bg-transparent border-primary-600"
              type="text"
              disabled={isLoading || isPending}
              {...register("phoneNumber", {
                required: "This field is required",
                maxLength: {
                  value: 20,
                  message: "No more than 20 characters",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="phoneNumber"
              render={({ message }) => <ErrorSpan>{message}</ErrorSpan>}
            />
          </div>
          <div className="grid grid-rows-[1fr_auto_16px] ">
            <label
              htmlFor="country"
              className="mt-2 pb-1 pl-1 font-light tracking-wider text-neutral-400 border-b border-primary-700"
            >
              country
            </label>
            <select
              className=" text-lg py-2 px-2 mt-2 rounded-md font-light outline-none tracking-wider border bg-primary-900 border-primary-600 md:px-0 md:pl-2 md:w-full"
              defaultValue={"Poland"}
              disabled={isLoading || isPending}
              {...register("country", {
                required: "This field is required",
              })}
            >
              {countries.map((country) => (
                <option value={country} key={country}>
                  {country}
                </option>
              ))}
            </select>
            <ErrorMessage
              errors={errors}
              name="country"
              render={({ message }) => <ErrorSpan>{message}</ErrorSpan>}
            />
          </div>
        </div>
        <Button disabled={isLoading || isPending}>
          {isPending ? (
            <SpinnerMini />
          ) : pathname.includes("cart") ? (
            "Continue"
          ) : (
            "Save"
          )}
        </Button>
      </form>
    </article>
  );
}

export default UpdateUserForm;
