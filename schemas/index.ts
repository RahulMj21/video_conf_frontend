import { object, string, TypeOf } from "zod";

export const RegisterSchema = object({
  name: string({ required_error: "name is required" })
    .nonempty("name field is required")
    .min(3, "name should be atleast 3 characters long")
    .max(30, "name should not exceed 30 characters"),
  email: string({ required_error: "email is required" }).email(
    "please provide a valid email"
  ),
  password: string({ required_error: "password is required" })
    .nonempty("password field is required")
    .min(8, "password should be atleast 8 characters long")
    .max(30, "password should not exceed 30 characters"),
  confirmPassword: string({
    required_error: "confirm password is required",
  }).nonempty("confirmPassword field is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "confirm password field dosen't matches with the password field",
  path: ["confirmPassword"],
});

export const LoginSchema = object({
  email: string({ required_error: "email is required" }).email(
    "please provide a valid email"
  ),
  password: string({ required_error: "password is required" })
    .nonempty("password field is required")
    .min(8, "password should be atleast 8 characters long")
    .max(30, "password should not exceed 30 characters"),
});
export const RoomSchema = object({
  roomName: string({ required_error: "please enter room name" })
    .nonempty("please provide room name")
    .min(3, "room name should contain atleast 3 characters")
    .max(15, "room name can not be longer than 15 characters"),
});
export const UpdatePasswordSchema = object({
  password: string({
    required_error: "please provide current password",
  }).nonempty("please provide current password"),
  newPassword: string({
    required_error: "please provide new password",
  })
    .nonempty("please provide new password")
    .min(8, "new password should be atleast 8 characters long")
    .max(20, "new password should not be longer than 20 characters"),
  confirmNewPassword: string({
    required_error: "please provide confirm new password",
  }).nonempty("please provide confirm new password"),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: "new password and confirm new password mismatched",
  path: ["confirmNewPassword"],
});
export const ResetPasswordSchema = object({
  newPassword: string({
    required_error: "please provide new password",
  })
    .nonempty("please provide new password")
    .min(8, "new password should be atleast 8 characters long")
    .max(20, "new password should not be longer than 20 characters"),
  confirmNewPassword: string({
    required_error: "please provide confirm new password",
  }).nonempty("please provide confirm new password"),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: "new password and confirm new password mismatched",
  path: ["confirmNewPassword"],
});

export type RegisterInput = TypeOf<typeof RegisterSchema>;
export type LoginInput = TypeOf<typeof LoginSchema>;
export type RoomInput = TypeOf<typeof RoomSchema>;
export type UpdatePasswordInput = TypeOf<typeof UpdatePasswordSchema>;
export type ResetPasswordInput = TypeOf<typeof ResetPasswordSchema>;
