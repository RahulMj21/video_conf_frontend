import { object, string, TypeOf } from "zod";

export const RegisterSchema = object({
  name: string()
    .nonempty("name field is required")
    .min(3, "name should be atleast 3 characters long")
    .max(30, "name should not exceed 30 characters"),
  email: string().email("please provide a valid email"),
  password: string()
    .nonempty("password field is required")
    .min(6, "password should be atleast 3 characters long")
    .max(30, "password should not exceed 30 characters"),
  confirmPassword: string().nonempty("confirmPassword field is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "confirm password field dosen't matches with the password field",
  path: ["confirmPassword"],
});

export const LoginSchema = object({
  email: string().email("please provide a valid email"),
  password: string()
    .nonempty("password field is required")
    .min(6, "password should be atleast 3 characters long")
    .max(30, "password should not exceed 30 characters"),
});

export type RegisterInput = TypeOf<typeof RegisterSchema>;
export type LoginInput = TypeOf<typeof LoginSchema>;
