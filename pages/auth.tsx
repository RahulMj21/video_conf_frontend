import React, { useState } from "react";
import { BtnBrand, Container, InputGroup } from "../styles/common.style";
import {
  AuthHeading,
  AuthSection,
  Forms,
  Login,
  OR,
  Register,
} from "../styles/auth.style";
import { FaEnvelope, FaLock, FaUnlock, FaUser } from "react-icons/fa";
import GoogleButton from "../components/GoogleButton";

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
          <Register autoComplete="no" toggleForm={toggleForm}>
            <InputGroup>
              <FaUser />
              <input name="name" autoComplete="off" type="text" required />
              <label htmlFor="name">Enter Name</label>
            </InputGroup>
            <InputGroup>
              <FaEnvelope />
              <input name="email" autoComplete="off" type="email" required />
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
            <InputGroup>
              <FaUnlock />
              <input
                name="confirmPassword"
                autoComplete="new-password"
                type="password"
                required
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </InputGroup>
            <BtnBrand type="submit">Register</BtnBrand>
            <OR>or</OR>
            <GoogleButton />
          </Register>
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
            <OR>or</OR>
            <GoogleButton />
          </Login>
        </Forms>
      </Container>
    </AuthSection>
  );
};

export default Auth;
