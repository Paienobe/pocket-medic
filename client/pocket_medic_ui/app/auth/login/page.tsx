"use client";
import RedirectQuestion from "@/app/components/Auth/RedirectQuestion/RedirectQuestion";
import Button from "@/app/components/UI/Button/Button";
import Input from "@/app/components/UI/Input/Input";
import React, { useState } from "react";
import { initialState } from "./constants";
import { LoginData } from "./types";
import { authEndpoints } from "@/app/services/api/auth";
import { preserveSession } from "@/app/lib/actions";

const LoginPage = () => {
  const [loginData, setLoginData] = useState(initialState);
  const updateLoginData = (key: keyof LoginData, value: string) => {
    setLoginData({ ...loginData, [key]: value });
  };
  const handleLogin = () => {
    authEndpoints.login(loginData).then((response) => {
      preserveSession(response);
    });
  };
  return (
    <section className="w-1/2 min-h-screen grid grid-cols-1 place-content-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="border border-primary-gray rounded-lg p-4 w-4/5 mx-auto"
      >
        <h1 className="text-3xl text-center font-medium mb-4">Login</h1>
        <div className="grid grid-cols-2 gap-6">
          <Input
            value={loginData.email}
            className="w-full"
            placeholder="Email"
            type="email"
            changeFunc={(e) => updateLoginData("email", e.target.value)}
          />
          <Input
            value={loginData.password}
            className="w-full"
            placeholder="Enter Password"
            type="password"
            changeFunc={(e) => updateLoginData("password", e.target.value)}
          />
        </div>
        <Button text="Login" type="submit" className="w-full py-3 mt-6" />
      </form>
      <RedirectQuestion
        question="New to Pocket Medic?"
        route="/auth"
        link_text="Register"
      />
    </section>
  );
};

export default LoginPage;
