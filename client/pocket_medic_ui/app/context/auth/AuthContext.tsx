"use client";
import { createContext, useContext, useState } from "react";
import { AuthContextProps, AuthContextType, UserType } from "./types";

const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [userType, setUserType] = useState<UserType | null>(null);
  return (
    <AuthContext.Provider value={{ userType, setUserType }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
