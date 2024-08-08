import { ReactNode } from "react";
import { AuthContextProvider } from "../context/auth/AuthContext";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <main className="min-h-screen">
      <AuthContextProvider>{children}</AuthContextProvider>
    </main>
  );
}
