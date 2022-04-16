import React from "react";
import { BtnBrand, InputGroup } from "../styles/common.style";
import { ForgotPassword, Login, OR } from "../styles/auth.style";
import { FaEnvelope, FaLock } from "react-icons/fa";
import GoogleButton from "../components/GoogleButton";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginInput, LoginSchema } from "../schemas";
import { toast } from "react-toastify";
import { loginUser } from "../utils/axios";
import { NextRouter, useRouter } from "next/router";

const LoginForm = ({ toggleForm }: { toggleForm: Boolean }) => {
  const router: NextRouter = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
  });

  const handleLogin = async (values: LoginInput) => {
    try {
      const { data }: { data: { success: Boolean; message: string } } =
        await loginUser(values);
      if (data.success) {
        toast.success(data.message);
        router.push("/");
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <Login
      onSubmit={handleSubmit(handleLogin)}
      toggleForm={toggleForm}
      autoComplete="no"
    >
      <InputGroup>
        <FaEnvelope />
        <input
          id="email"
          autoComplete="email"
          type="email"
          required
          {...register("email")}
        />
        <label htmlFor="email">Enter email</label>
        <p className="error">{errors?.email?.message}</p>
      </InputGroup>
      <InputGroup>
        <FaLock />
        <input
          id="password"
          autoComplete="new-password"
          type="password"
          required
          {...register("password")}
        />
        <label htmlFor="password">Enter Password</label>
        <p className="error">{errors?.password?.message}</p>
      </InputGroup>
      <BtnBrand>Login</BtnBrand>
      <Link href="/forgotpassword">
        <a>
          <ForgotPassword>Forgot Password ?</ForgotPassword>
        </a>
      </Link>
      <OR>or</OR>
      <GoogleButton />
    </Login>
  );
};

export default LoginForm;
