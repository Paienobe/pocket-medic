import { Dispatch, ReactNode, SetStateAction } from "react";

export type AuthContextType = {
  userType: UserType | null;
  setUserType: Dispatch<SetStateAction<UserType | null>>;
};
export type AuthContextProps = { children: ReactNode };

export type UserType = "doctor" | "patient";
