import React from "react";
import { StyledSignup } from "../Styled-Components/StyledSignup";
import LoginForm from "../Elements/forms/LoginForm";

const Login = () => {
  return (
    <StyledSignup>
      <h1>Login</h1>
      <LoginForm />
    </StyledSignup>
  );
};

export default Login;
