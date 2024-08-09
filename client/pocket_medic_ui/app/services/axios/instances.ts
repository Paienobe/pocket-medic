import { BASE_URL } from "@/app/config";
import axios from "axios";

const createInstance = (urlPath: string) => {
  return axios.create({
    baseURL: `${BASE_URL}${urlPath}`,
    headers: { "Content-Type": "application/json" },
  });
};

export const authInstance = createInstance("/auth");
