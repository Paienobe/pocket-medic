import { RegisterData } from "@/app/auth/register/types";
import { authInstance } from "../axios/instances";
import { LoginData } from "@/app/auth/login/types";

const registerUser = async (data: RegisterData) => {
  try {
    const request = await authInstance.post("/register/", data);
    return request.data;
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (data: LoginData) => {
  try {
    const request = await authInstance.post("/login/", data);
    return request.data;
  } catch (error) {
    console.log(error);
  }
};

export const authEndpoints = {
  register: registerUser,
  login: loginUser,
};
