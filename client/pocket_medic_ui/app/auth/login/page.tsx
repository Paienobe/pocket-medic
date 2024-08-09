"use client";
import RedirectQuestion from "@/app/components/Auth/RedirectQuestion/RedirectQuestion";
import Button from "@/app/components/UI/Button/Button";
import Input from "@/app/components/UI/Input/Input";
import React from "react";

const LoginPage = () => {
  return (
    <section className="w-1/2 min-h-screen grid grid-cols-1 place-content-center">
      <div className="border border-primary-gray rounded-lg p-4 w-4/5 mx-auto">
        <h1 className="text-3xl text-center font-medium mb-4">Login</h1>
        <div className="grid grid-cols-2 gap-6">
          <Input
            value=""
            className="w-full"
            placeholder="Email"
            type="email"
            changeFunc={() => {}}
          />
          <Input
            value=""
            className="w-full"
            placeholder="Enter Password"
            type="password"
            changeFunc={() => {}}
          />
        </div>
        <Button
          text="Login"
          className="w-full py-3 mt-6"
          clickFunction={() => {}}
        />
      </div>
      <RedirectQuestion
        question="New to Pocket Medic?"
        route="/auth"
        link_text="Register"
      />
    </section>
  );
};

export default LoginPage;
