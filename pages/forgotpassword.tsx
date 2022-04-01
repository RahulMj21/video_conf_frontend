import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { AuthSection, FormHeading, SingleForm } from "../styles/auth.style";
import { BtnBrand, Container, InputGroup } from "../styles/common.style";

const ForgotPassword = () => {
  return (
    <AuthSection>
      <Container className="container">
        <FormHeading>Forgot Password</FormHeading>
        <SingleForm autoComplete="no">
          <InputGroup>
            <FaEnvelope />
            <input name="email" autoComplete="email" type="email" required />
            <label htmlFor="email">Enter email</label>
          </InputGroup>
          <BtnBrand>Submit</BtnBrand>
        </SingleForm>
      </Container>
    </AuthSection>
  );
};

export default ForgotPassword;
