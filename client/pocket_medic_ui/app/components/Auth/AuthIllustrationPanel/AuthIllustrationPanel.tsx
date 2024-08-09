"use client";
import { useAuthContext } from "@/app/context/auth/AuthContext";
import { UserType } from "@/app/context/auth/types";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const AuthIllustrationPanel = () => {
  const { userType, setUserType } = useAuthContext();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const user_type = searchParams.get("user_type");

  useEffect(() => {
    if (!userType) {
      setUserType(user_type as UserType);
    }
  }, [userType]);

  if (pathName == "/auth") {
    return null;
  }

  const signupIllustrations = {
    doctor: "/Doctors-cuate.svg",
    patient: "/Oncology patient-rafiki.svg",
  };

  return (
    <section className="relative min-h-screen w-1/2">
      {pathName.includes("register") && (
        <Image
          src={signupIllustrations[user_type as UserType]}
          alt=""
          fill
          priority
        />
      )}
      {pathName.includes("login") && (
        <Image src="/Login-cuate.svg" alt="" fill priority />
      )}
    </section>
  );
};

export default AuthIllustrationPanel;
