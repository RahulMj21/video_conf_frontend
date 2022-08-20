import React from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";
import AuthProtectedRoute from "../components/AuthProtectedRoute";
import { AuthSection, FormHeading, SingleForm } from "../styles/auth.style";
import { BtnBrand, Container, InputGroup } from "../styles/common.style";
import { useForm } from "react-hook-form";
import { UpdatePasswordInput, UpdatePasswordSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { updateUserPassword } from "../utils/axios";
import { useRouter } from "next/router";

const UpdatePassword = AuthProtectedRoute(() => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePasswordInput>({
    resolver: zodResolver(UpdatePasswordSchema),
  });

  const onSubmit = async (values: UpdatePasswordInput) => {
    try {
      const { data }: { data: { success: Boolean; message: string } } =
        await updateUserPassword(values);

      if (data.success) {
        toast.success(data.message);
        return router.push("/me");
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
        <FormHeading>Update Password</FormHeading>
        <SingleForm autoComplete="no" onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <FaLock />
            <input
              id="password"
              autoComplete="new-password"
              placeholder="password"
              type="password"
              required
              {...register("password")}
            />
            <label htmlFor="password">Current Password</label>
            <p className="error">{errors.password?.message}</p>
          </InputGroup>
          <InputGroup>
            <FaLock />
            <input
              id="newPassword"
              autoComplete="new-password"
              placeholder="new password"
              type="password"
              required
              {...register("newPassword")}
            />
            <label htmlFor="newPassword">New Password</label>
            <p className="error">{errors.newPassword?.message}</p>
          </InputGroup>
          <InputGroup>
            <FaLockOpen />
            <input
              id="confirmNewPassword"
              autoComplete="new-password"
              type="password"
              placeholder="confirm new password"
              required
              {...register("confirmNewPassword")}
            />
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
            <p className="error">{errors.confirmNewPassword?.message}</p>
          </InputGroup>
          <BtnBrand type="submit">Submit</BtnBrand>
        </SingleForm>
      </Container>
    </AuthSection>
  );
});

export default UpdatePassword;
