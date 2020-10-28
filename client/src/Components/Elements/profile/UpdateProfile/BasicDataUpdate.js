import React from "react";
import { StyledBasicDataUpdate } from "../../../Styled-Components/StyledBasicDataUpdate";
import InputField from "./InputField";
import Biography from "../Biography";
import UpdateCity from "./UpdateCity";
import useUpdateProfile from "../../../../data/useUpdateProfile";
const BasicDataUpdate = () => {
  const { handleServiceChange } = useUpdateProfile();
  return (
    <StyledBasicDataUpdate>
      <InputField FieldTitle="First Name" field="firstName" />
      <InputField FieldTitle="Last Name" field="lastName" />
      <InputField FieldTitle="Email" field="email" />
      <InputField FieldTitle="Street" field="street" />
      <InputField FieldTitle="ZIP Code" field="zip" />
      <UpdateCity
        FieldTitle="City"
        field="city"
        type="city"
        onChange={(string, v) => handleServiceChange(v)}
        name="city"
        origin="updateProfile"
      />
      <Biography FieldTitle="Biography" field="bio" />
    </StyledBasicDataUpdate>
  );
};

export default BasicDataUpdate;
