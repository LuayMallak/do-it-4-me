import React from "react";
import { StyledPasswordUpdate } from "../../../Styled-Components/StyledPasswordUpdate";
import PasswordField from "./PasswordField";
const PasswordUpdate = () => {
  return (
    <StyledPasswordUpdate>
      <PasswordField FieldTitle="Password" field="password" />
    </StyledPasswordUpdate>
  );
};

export default PasswordUpdate;
