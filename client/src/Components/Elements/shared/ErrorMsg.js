import React from "react";
import { StyledErrorMsg } from "../../Styled-Components/StyledErrorMsg";
const ErrorMsg = (props) => {
  return <StyledErrorMsg>{props.msg}</StyledErrorMsg>;
};

export default ErrorMsg;
