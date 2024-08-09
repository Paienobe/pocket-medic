"use client";
import RedirectQuestion from "@/app/components/Auth/RedirectQuestion/RedirectQuestion";
import Button from "@/app/components/UI/Button/Button";
import Input from "@/app/components/UI/Input/Input";
import { useEffect, useState } from "react";
import { RegisterData } from "./types";
import { authEndpoints } from "@/app/services/api/auth";
import { useSearchParams } from "next/navigation";
import { initialState } from "./constants";

const RegisterPage = () => {
  const searchParams = useSearchParams();
  const user_type = searchParams.get("user_type");
  const [registerData, setRegisterData] = useState(initialState);

  useEffect(() => {
    user_type == "doctor"
      ? setRegisterData({ ...registerData, is_doctor: true, is_patient: false })
      : setRegisterData({
          ...registerData,
          is_doctor: false,
          is_patient: true,
        });
  }, [user_type]);

  const updateRegisterData = (key: keyof RegisterData, value: string) => {
    setRegisterData({ ...registerData, [key]: value });
  };

  const handleSumit = async () => {
    authEndpoints.register(registerData).then((response) => {
      console.log({ response });
    });
  };

  return (
    <section className="w-1/2 min-h-screen grid grid-cols-1 place-content-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSumit();
        }}
        className="border border-primary-gray rounded-lg p-4 w-4/5 mx-auto"
      >
        <h1 className="text-3xl text-center font-medium mb-4">Register</h1>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <Input
              value={registerData.first_name}
              className="w-full"
              placeholder="First Name"
              changeFunc={(e) =>
                updateRegisterData("first_name", e.target.value)
              }
            />
            <Input
              value={registerData.last_name}
              className="w-full"
              placeholder="Last Name"
              changeFunc={(e) =>
                updateRegisterData("last_name", e.target.value)
              }
            />
          </div>
          <Input
            value={registerData.email}
            className="w-full"
            placeholder="Email"
            type="email"
            changeFunc={(e) => updateRegisterData("email", e.target.value)}
          />
          <div className="grid grid-cols-2 gap-6">
            <Input
              value={registerData.password}
              className="w-full"
              placeholder="Enter Password"
              changeFunc={(e) => updateRegisterData("password", e.target.value)}
            />
            <Input
              value={registerData.password2}
              className="w-full"
              placeholder="Confirm Password"
              changeFunc={(e) =>
                updateRegisterData("password2", e.target.value)
              }
            />
          </div>
        </div>
        <Button
          text="Register"
          type="submit"
          className="w-full py-3 mt-6"
          clickFunction={() => {}}
        />
      </form>
      <RedirectQuestion
        question="Already have an account?"
        route="/auth/login"
        link_text="Log in"
      />
    </section>
  );
};

export default RegisterPage;
