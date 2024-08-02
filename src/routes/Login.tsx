import "../index.css";
import React from "react";
import { useForm } from "react-hook-form";
import { User } from "../types/user";
import { signUpValidationShema } from "../@/components/ui/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../components/Button";
import { useLogin, useSignUp } from "../queries/AuthQuery";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    mode: "onChange",
    resolver: zodResolver(signUpValidationShema),
  });

  const signInMutation = useLogin();
  const navigate = useNavigate();
  const onsubmit = (data: z.infer<typeof signUpValidationShema>) => {
    console.log(data);
    signInMutation.mutate(data, {
      onSuccess: () => {
        navigate("/departure");
      },
      onError: (error) => {
        console.error("Login error:", error);
      },
    });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs md:max-w-lg p-3">
        <form onSubmit={handleSubmit(onsubmit)} className="">
          {/* <div className="mb-4">
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
          </div> */}
          <div className="mb-4">
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
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700  leading-tight focus:outline-none focus:border-black"
              id="password"
              type="password"
              placeholder="password"
              {...register("password")}
            />
            <p className=" text-red-700">
              {errors.password?.message as React.ReactNode}
            </p>
          </div>
          {/* <div className="mb-4">
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
          </div> */}
          {/* <div className="mb-4">
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
          </div> */}
          <div className="">
            <Button
              text="ログイン"
              className=" bg-custom-green text-white w-full"
            />
          </div>
          <div className="flex justify-center mt-2">
            <a className=" text-sm hover:text-gray-300" href="signUp">
              新規登録はこちら
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
