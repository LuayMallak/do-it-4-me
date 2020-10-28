import React from "react";
import { StyledSignup } from "../Styled-Components/StyledSignup";
import SignupForm from "../Elements/forms/SignupForm";

const Signup = () => {
  return (
    <StyledSignup>
      <h1>Signup</h1>
      <SignupForm origin="signup" />
    </StyledSignup>
  );
};

export default Signup;
