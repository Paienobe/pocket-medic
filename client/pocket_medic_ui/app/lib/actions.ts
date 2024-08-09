"use server";

import { cookies } from "next/headers";
import { SessionResponse } from "../services/api/types";

export const preserveSession = async (data: SessionResponse) => {
  cookies().set("pocket_medic_user", JSON.stringify(data.user), {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production",
    maxAge: 60 * 60 * 24 * 7, // a week
    path: "/",
  });

  cookies().set("pocket_medic_access_token", data.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production",
    maxAge: 60 * 60, // an hour
    path: "/",
  });

  cookies().set("pocket_medic_refresh_token", data.refresh_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production",
    maxAge: 60 * 60 * 24 * 7, // a week
    path: "/",
  });
};

export const clearSession = async () => {
  cookies().set("pocket_medic_user", "");
  cookies().set("pocket_medic_access_token", "");
  cookies().set("pocket_medic_refresh_token", "");
};
