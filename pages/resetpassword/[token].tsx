import React, { FormEvent } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { AuthSection, FormHeading, SingleForm } from "../../styles/auth.style";
import { BtnBrand, Container, InputGroup } from "../../styles/common.style";
import { useRouter } from "next/router";
import { toNamespacedPath } from "node:path/win32";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { ResetPasswordInput, ResetPasswordSchema } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPassword } from "../../utils/axios";

const Resetpassword = () => {
  const router = useRouter();
  const token = router.query?.token;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordInput>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const handleResetPassword = async (values: ResetPasswordInput) => {
    try {
      const { data }: { data: { success: boolean; message: string } } =
        await resetPassword(values, token as string);
      if (data.success) {
        toast.success(data.message);
        router.push("/auth");
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
    <AuthSection>
      <Container className="container">
        <FormHeading>Reset Password</FormHeading>
        <SingleForm
          autoComplete="no"
          onSubmit={handleSubmit(handleResetPassword)}
        >
          <InputGroup>
            <FaLock />
            <input
              id="newPassword"
              autoComplete="new-password"
              type="password"
              placeholder="password"
              required
              {...register("newPassword")}
            />
            <label htmlFor="password">Enter New Password</label>
            <p className="error">{errors?.newPassword?.message}</p>
          </InputGroup>
          <InputGroup>
            <FaLockOpen />
            <input
              id="confirmNewPassword"
              autoComplete="new-password"
              type="password"
              placeholder="confirm password"
              required
              {...register("confirmNewPassword")}
            />
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <p className="error">{errors?.confirmNewPassword?.message}</p>
          </InputGroup>
          <BtnBrand type="submit">Submit</BtnBrand>
        </SingleForm>
      </Container>
    </AuthSection>
  );
};

export default Resetpassword;
