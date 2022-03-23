import React from "react";
import { Container } from "../styles/common.style";
import { AuthSection, Login, Main, Register } from "../styles/auth.style";

const Auth = () => {
  return (
    <AuthSection>
      <Container className="container">
        <Main>
          <Register>Register</Register>
          <Login>Login</Login>
        </Main>
      </Container>
    </AuthSection>
  );
};

export default Auth;
