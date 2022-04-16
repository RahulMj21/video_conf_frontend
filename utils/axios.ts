import axios from "axios";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import {
  LoginInput,
  RegisterInput,
  RoomInput,
  UpdatePasswordInput,
} from "../schemas";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// auth
export const registerUser = (input: RegisterInput) =>
  api.post("/register", input);
export const loginUser = (input: LoginInput) => api.post("/login", input);
export const logoutUser = () => api.get("/logout");

// user
export const fetchMe = () => api.get("/me");
export const fetchCurrentUser = (cookies: NextApiRequestCookies) =>
  api.get("/me", {
    headers: {
      Authorization: `Bearer ${
        cookies.accessToken ? cookies.accessToken : null
      }`,
      "x-refresh": `${cookies.refreshToken ? cookies.refreshToken : null}`,
    },
  });
export const updateUserPassword = (input: UpdatePasswordInput) =>
  api.put("/updatepassword", input);

// room
export const fetchAllRooms = () => api.get("/rooms");
export const createNewRoom = (input: RoomInput) =>
  api.post("/createroom", input);
