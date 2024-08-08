"use client";
import React from "react";
import Button from "../components/UI/Button/Button";
import UserTypeButton from "../components/Auth/UserTypeButton/UserTypeButton";
import { useAuthContext } from "../context/auth/AuthContext";
import { useRouter } from "next/navigation";
import RedirectQuestion from "../components/Auth/RedirectQuestion/RedirectQuestion";

const AuthIntroPage = () => {
  const router = useRouter();
  const { userType } = useAuthContext();

  return (
    <>
      <section className="flex flex-col items-center justify-center w-fit mx-auto">
        <h1 className="text-4xl text-center">
          Join us as a Doctor or a Patient
        </h1>
        <section className="flex items-center gap-8 my-8">
          <UserTypeButton
            user_type="doctor"
            button_illustration="/Doctors-bro.svg"
          />
          <UserTypeButton
            user_type="patient"
            button_illustration="/Oncology patient-pana.svg"
          />
        </section>
        <Button
          text="Create Account"
          disabled={!userType}
          clickFunction={() =>
            router.push(`/auth/register?user_type=${userType}`)
          }
        />
        <RedirectQuestion
          question="Already have an account?"
          route="/auth/login"
          link_text="Log in"
        />
      </section>
    </>
  );
};

export default AuthIntroPage;
