import React from "react";
import { FaEnvelope, FaLock, FaLockOpen } from "react-icons/fa";
import { AuthSection, FormHeading, SingleForm } from "../../styles/auth.style";
import { BtnBrand, Container, InputGroup } from "../../styles/common.style";

const Resetpassword = () => {
  return (
    <AuthSection>
      <Container className="container">
        <FormHeading>Reset Password</FormHeading>
        <SingleForm autoComplete="no">
          <InputGroup>
            <FaLock />
            <input
              name="password"
              autoComplete="new-password"
              type="password"
              required
            />
            <label htmlFor="password">Enter New Password</label>
          </InputGroup>
          <InputGroup>
            <FaLockOpen />
            <input
              name="confirmPassword"
              autoComplete="new-password"
              type="password"
              required
            />
            <label htmlFor="confirmPassword">Confirm New Password</label>
          </InputGroup>
          <BtnBrand>Submit</BtnBrand>
        </SingleForm>
      </Container>
    </AuthSection>
  );
};

export default Resetpassword;
