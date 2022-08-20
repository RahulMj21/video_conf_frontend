import React, { FormEvent, useRef } from "react";
import toast from "react-hot-toast";
import { FaEnvelope } from "react-icons/fa";
import GuestRoute from "../components/GuestRoute";
import { AuthSection, FormHeading, SingleForm } from "../styles/auth.style";
import { BtnBrand, Container, InputGroup } from "../styles/common.style";
import { forgotPassword } from "../utils/axios";

const ForgotPassword = GuestRoute(() => {
  const emailRef = useRef<HTMLInputElement>(null);

  const handleForgotPassword = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (!emailRef.current?.value) return;
      const { data }: { data: { success: boolean; message: string } } =
        await forgotPassword({ email: emailRef.current.value });
      if (data.success) {
        toast.success(data.message);
      }
      return (emailRef.current.value = "");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <AuthSection>
      <Container className="container">
        <FormHeading>Forgot Password</FormHeading>
        <SingleForm autoComplete="no" onSubmit={handleForgotPassword}>
          <InputGroup>
            <FaEnvelope />
            <input
              ref={emailRef}
              name="email"
              placeholder="email"
              autoComplete="email"
              type="email"
              required
            />
            <label htmlFor="email">Enter email</label>
          </InputGroup>
          <BtnBrand type="submit">Submit</BtnBrand>
        </SingleForm>
      </Container>
    </AuthSection>
  );
});

export default ForgotPassword;
