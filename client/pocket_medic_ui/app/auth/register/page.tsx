"use client";
import RedirectQuestion from "@/app/components/Auth/RedirectQuestion/RedirectQuestion";
import Button from "@/app/components/UI/Button/Button";
import Input from "@/app/components/UI/Input/Input";

const RegisterPage = () => {
  return (
    <section className="w-1/2 min-h-screen grid grid-cols-1 place-content-center">
      <div className="border border-primary-gray rounded-lg p-4 w-4/5 mx-auto">
        <h1 className="text-3xl text-center font-medium mb-4">Register</h1>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <Input
              value=""
              className="w-full"
              placeholder="First Name"
              changeFunc={() => {}}
            />
            <Input
              value=""
              className="w-full"
              placeholder="Last Name"
              changeFunc={() => {}}
            />
          </div>
          <Input
            value=""
            className="w-full"
            placeholder="Email"
            type="email"
            changeFunc={() => {}}
          />
          <div className="grid grid-cols-2 gap-6">
            <Input
              value=""
              className="w-full"
              placeholder="Enter Password"
              changeFunc={() => {}}
            />
            <Input
              value=""
              className="w-full"
              placeholder="Confirm Password"
              changeFunc={() => {}}
            />
          </div>
        </div>
        <Button
          text="Register"
          className="w-full py-3 mt-6"
          clickFunction={() => {}}
        />
      </div>
      <RedirectQuestion
        question="Already have an account?"
        route="/auth/login"
        link_text="Log in"
      />
    </section>
  );
};

export default RegisterPage;
