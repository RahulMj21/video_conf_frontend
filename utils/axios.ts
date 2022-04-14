import axios from "axios";
import { LoginInput, RegisterInput } from "../schemas";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const registerUser = (input: RegisterInput) =>
  api.post("/register", input);
export const loginUser = (input: LoginInput) => api.post("/login", input);
