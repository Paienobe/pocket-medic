import { ReactNode } from "react";
import { AuthContextProvider } from "../context/auth/AuthContext";
import AuthIllustrationPanel from "../components/Auth/AuthIllustrationPanel/AuthIllustrationPanel";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <main className="min-h-screen flex items-center">
      <AuthContextProvider>
        <AuthIllustrationPanel />
        {children}
      </AuthContextProvider>
    </main>
  );
}
