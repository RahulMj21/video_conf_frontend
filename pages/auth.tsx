import React, { useState } from "react";
import { Container } from "../styles/common.style";
import { AuthHeading, AuthSection, Forms } from "../styles/auth.style";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

const Auth = () => {
  const [toggleForm, setToggleForm] = useState(false);
  return (
    <AuthSection>
      <Container className="container">
        <AuthHeading toggleForm={toggleForm}>
          <h2 onClick={() => setToggleForm(false)}>Register</h2>
          <h2 onClick={() => setToggleForm(true)}>Login</h2>
        </AuthHeading>
        <Forms>
          <RegisterForm toggleForm={toggleForm} />
          <LoginForm toggleForm={toggleForm} />
        </Forms>
      </Container>
    </AuthSection>
  );
};

export default Auth;
