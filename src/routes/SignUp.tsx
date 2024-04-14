import "../index.css";
import React from "react";
import { useForm } from "react-hook-form";
import { User } from "../types/user";
import { validationShema } from "../utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    mode: "onChange",
    resolver: zodResolver(validationShema),
  });

  const onsubmit = (data: User) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs md:max-w-lg">
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="bg-cream-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
              id="name"
              type="text"
              placeholder="山田脩太"
              {...register("name")}
            />
            <p className=" text-red-700">
              {errors.name?.message as React.ReactNode}
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
              id="email"
              type="email"
              placeholder="email"
              {...register("email")}
            />
            <p className=" text-red-700">
              {errors.email?.message as React.ReactNode}
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700  leading-tight focus:outline-none focus:border-black"
              id="password"
              type="password"
              placeholder="******************"
              {...register("password")}
            />
            <p className=" text-red-700">
              {errors.password?.message as React.ReactNode}
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Grade
            </label>
            <select
              {...register("grade", { valueAsNumber: true })}
              name="grade"
              className="w-full h-9 shadow appearance-none border rounded py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
            >
              <option value="">Grade</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
            <p className=" text-red-700">
              {errors.grade?.message as React.ReactNode}
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              SailNo.
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700  leading-tight focus:outline-none focus:border-black"
              id="sailNo"
              type="text"
              placeholder="31-50"
              {...register("sailNo")}
            />
            <p className=" text-red-700">
              {errors.sailNo?.message as React.ReactNode}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className=" p-1 bg-custom-black text-white w-[45%] rounded-md transform hover:scale-95 duration-100"
              type="submit"
            >
              SignUp
            </button>
            <a className="" href="#">
              Login here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
