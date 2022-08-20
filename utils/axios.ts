import axios from "axios";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import {
  LoginInput,
  RegisterInput,
  ResetPasswordInput,
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
export const forgotPassword = (input: { email: string }) =>
  api.post("/forgotpassword", input);
export const resetPassword = (input: ResetPasswordInput, token: string) =>
  api.put(`/resetpassword/${token}`, input);
export const updateUserPassword = (input: UpdatePasswordInput) =>
  api.put("/updatepassword", input);
export const updateUserProfile = (input: {
  name: string | undefined;
  email: string | undefined;
  avatar: string | ArrayBuffer;
}) => api.put("/updateprofile", input);

// room
export const fetchAllRooms = () => api.get("/rooms");
export const fetchSingleRooms = (roomId: string) => api.get(`/room/${roomId}`);
export const createNewRoom = (input: RoomInput) =>
  api.post("/createroom", input);
