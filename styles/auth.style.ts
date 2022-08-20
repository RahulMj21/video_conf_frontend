import styled from "styled-components";
import Link from "next/link";

export const AuthSection = styled.section`
  position: relative;
  .container {
    margin: 4rem auto;
    width: 28.5rem;
    max-width: 95%;
    min-height: calc(100vh - 13.8rem);
    padding: 2rem 0;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 1rem;
    overflow-x: hidden;
  }
`;
export const AuthHeading = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  margin-bottom: 4rem;
  h2 {
    cursor: pointer;
    padding-bottom: 0.8rem;
    font-size: 1.7rem;
    font-weight: 400;
    width: 100%;
    text-align: center;
    letter-spacing: 0.8px;
  }
  &::before {
    content: "";
    position: absolute;
    height: 4px;
    width: 50%;
    bottom: 0;
    left: ${({ toggleForm }: { toggleForm: Boolean }) =>
      toggleForm ? "50%" : "0%"};
    background: ${(props) => props.theme.brand};
    border-radius: 4px;
    transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
export const FormHeading = styled.h2`
  position: relative;
  padding-bottom: 0.8rem;
  font-size: 1.7rem;
  font-weight: 400;
  width: 100%;
  text-align: center;
  letter-spacing: 0.8px;
  margin-bottom: 4rem;
  &::before {
    content: "";
    position: absolute;
    height: 4px;
    width: 60%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: ${(props) => props.theme.brand};
    border-radius: 4px;
  }
`;
export const Forms = styled.div`
  display: flex;
  width: 200%;
  & > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }
`;
export const SingleForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;
export const Register = styled.form`
  transform: ${({ toggleForm }: { toggleForm: Boolean }) =>
    toggleForm ? "translateX(-100%)" : "translateX(0)"};
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;
export const Login = styled.form`
  transform: ${({ toggleForm }: { toggleForm: Boolean }) =>
    toggleForm ? "translateX(-100%)" : "translateX(0)"};
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const OR = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin: 1.3rem 0;
  color: gray;
  text-transform: uppercase;
`;
export const ForgotPassword = styled.p`
  margin-top: 2rem;
  font-size: 1.2rem;
  text-align: right;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  letter-spacing: 0.4px;
  transition: all 0.5s ease;
  &:hover {
    color: ${(props) => props.theme.blue};
  }
`;
