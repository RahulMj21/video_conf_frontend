import React from "react";
import { BtnBrand, InputGroup } from "../styles/common.style";
import { OR, Register } from "../styles/auth.style";
import { FaEnvelope, FaLock, FaUnlock, FaUser } from "react-icons/fa";
import GoogleButton from "../components/GoogleButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterInput, RegisterSchema } from "../schemas";
import toast from "react-hot-toast";
import { registerUser } from "../utils/axios";
import { NextRouter, useRouter } from "next/router";

const RegisterForm = ({ toggleForm }: { toggleForm: Boolean }) => {
  const router: NextRouter = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
  });
  const handleRegister = async (values: RegisterInput) => {
    try {
      const { data }: { data: { success: Boolean; message: string } } =
        await registerUser(values);
      if (data.success) {
        toast.success(data.message);
        router.push("/");
      }
    } catch (error: any) {
      return toast.error(
        error?.response?.data?.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <Register
      onSubmit={handleSubmit(handleRegister)}
      autoComplete="no"
      toggleForm={toggleForm}
    >
      <InputGroup>
        <FaUser />
        <input
          autoComplete="off"
          type="text"
          id="name"
          required
          {...register("name")}
        />
        <label htmlFor="name">Enter Name</label>
        <p className="error">{errors?.name?.message}</p>
      </InputGroup>
      <InputGroup>
        <FaEnvelope />
        <input
          autoComplete="off"
          type="email"
          required
          id="email"
          {...register("email")}
        />
        <label htmlFor="email">Enter email</label>
        <p className="error">{errors?.email?.message}</p>
      </InputGroup>
      <InputGroup>
        <FaLock />
        <input
          autoComplete="new-password"
          type="password"
          required
          id="password"
          {...register("password")}
        />
        <label htmlFor="password">Enter Password</label>
        <p className="error">{errors?.password?.message}</p>
      </InputGroup>
      <InputGroup>
        <FaUnlock />
        <input
          autoComplete="new-password"
          type="password"
          required
          id="confirmPassword"
          {...register("confirmPassword")}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <p className="error">{errors?.confirmPassword?.message}</p>
      </InputGroup>
      <BtnBrand type="submit">Register</BtnBrand>
      <OR>or</OR>
      <GoogleButton />
    </Register>
  );
};

export default RegisterForm;
