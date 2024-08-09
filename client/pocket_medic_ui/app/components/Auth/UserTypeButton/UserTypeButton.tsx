"use client";
import { useAuthContext } from "@/app/context/auth/AuthContext";
import { UserTypeButtonProps } from "./types";
import Image from "next/image";
import { UserType } from "@/app/context/auth/types";

const UserTypeButton = ({
  user_type,
  button_illustration,
}: UserTypeButtonProps) => {
  const { userType, setUserType } = useAuthContext();
  const selectUserType = (user_type: string) => {
    setUserType(user_type as UserType);
  };
  return (
    <button
      className={`border border-primary-gray rounded-lg py-2 p-4 hover:border-primary-blue transition-colors hover:bg-primary-blue-light duration-300 ${
        userType == user_type ? "border-primary-blue bg-primary-blue-light" : ""
      }`}
      onClick={() => selectUserType(user_type)}
    >
      <Image src={button_illustration} alt="" width={250} height={250} />
      <p className="uppercase font-thin">{user_type}</p>
    </button>
  );
};

export default UserTypeButton;
