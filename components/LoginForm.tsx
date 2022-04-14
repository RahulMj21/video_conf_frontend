import React from "react";
import { BtnBrand, InputGroup } from "../styles/common.style";
import { ForgotPassword, Login, OR } from "../styles/auth.style";
import { FaEnvelope, FaLock } from "react-icons/fa";
import GoogleButton from "../components/GoogleButton";
import Link from "next/link";

const LoginForm = ({ toggleForm }: { toggleForm: Boolean }) => {
  return (
    <Login toggleForm={toggleForm} autoComplete="no">
      <InputGroup>
        <FaEnvelope />
        <input name="email" autoComplete="email" type="email" required />
        <label htmlFor="email">Enter email</label>
      </InputGroup>
      <InputGroup>
        <FaLock />
        <input
          name="password"
          autoComplete="new-password"
          type="password"
          required
        />
        <label htmlFor="password">Enter Password</label>
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
