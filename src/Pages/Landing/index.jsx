import React from "react";
import { TextInput } from "../../Components/TextInput";
import { ButtonUi } from "../../Components/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { back_base_url } from "../../Lib/config";
import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${back_base_url}/api/v1/auth/login`,
        data
      );
      window.localStorage.setItem("token", response.data.token);
      if (response.data.user.role === "Admin") {
        window.location.href = "/admin/dashboard";
      }
      if (response.data.user.role === "Investor") {
        window.location.href = "/ventura/dashboard";
      }
      if (response.data.user.role === "Entrepreneur") {
        window.location.href = "/entrepreneur/dashboard";
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="flex items-center flex-col gap-5">
        <div className="bg-yellow-700 " onClick={() => navigate("/")}>
          <img src="/assets/conbiz/images/resources/logo-1.png" alt="logo" />
        </div>
        <form
          className="flex flex-col gap-4 w-[500px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextInput
            label="Email or Phone Number"
            name="emailOrPhoneNumber"
            control={control}
            rules={{
              required: "Email or Phone Number is required",
            }}
            className={"text-white"}
          />
          <TextInput
            label="Password"
            type="password"
            name="password"
            control={control}
            rules={{
              required: "Password is required",
            }}
            className={"text-white"}
          />
          <ButtonUi
            label="Login"
            type="submit"
            className="bg-green-500 hover:bg-green-600 py-2 px-10"
          />
        </form>
        <p>
          Don't have an Account?{" "}
          <NavLink to={"/register/entrepreneur"} style={{ cursor: "pointer" }}>
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};
