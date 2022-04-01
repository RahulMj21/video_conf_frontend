import React from "react";
import { FaEnvelope, FaLock, FaLockOpen } from "react-icons/fa";
import { AuthSection, FormHeading, SingleForm } from "../styles/auth.style";
import { BtnBrand, Container, InputGroup } from "../styles/common.style";

const UpdatePassword = () => {
  return (
    <AuthSection>
      <Container className="container">
        <FormHeading>Update Password</FormHeading>
        <SingleForm autoComplete="no">
          <InputGroup>
            <FaLock />
            <input
              name="password"
              autoComplete="new-password"
              type="password"
              required
            />
            <label htmlFor="password">Enter Current Password</label>
          </InputGroup>
          <InputGroup>
            <FaLock />
            <input
              name="newPassword"
              autoComplete="new-password"
              type="password"
              required
            />
            <label htmlFor="newPassword">Enter New Password</label>
          </InputGroup>
          <InputGroup>
            <FaLockOpen />
            <input
              name="confirmNewPassword"
              autoComplete="new-password"
              type="password"
              required
            />
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
          </InputGroup>
          <BtnBrand>Submit</BtnBrand>
        </SingleForm>
      </Container>
    </AuthSection>
  );
};

export default UpdatePassword;
