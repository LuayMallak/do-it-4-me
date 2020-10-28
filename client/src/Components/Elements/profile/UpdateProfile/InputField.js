import React, { useState, useContext } from "react";
import { StyledInputField } from "../../../Styled-Components/StyledInputField";
import useUpdateProfile from "../../../../data/useUpdateProfile";
import UserContext from "../../../../data/UserContext";

const InputField = ({ field, FieldTitle }) => {
  const {
    handleFieldsChange,
    clearField,
    handelUpdateProfile,
    newUserData,
  } = useUpdateProfile();
  const [active, setActive] = useState(false);
  const { user } = useContext(UserContext);
  const oldUserData = user.user ? user.user : {};
  return (
    <StyledInputField>
      <label htmlFor={field}>{FieldTitle}</label>
      <div className="inputContainer">
        <input
          placeholder={oldUserData[field]}
          disabled={!active}
          value={active ? newUserData[field] || "" : oldUserData[field] || ""}
          onChange={(e) => handleFieldsChange(e.target)}
          name={field}
        />
      </div>
      <div className="editButtons">
        {!active ? (
          <button name={field} onClick={(e) => setActive(true)}>
            edit
          </button>
        ) : (
          <>
            <button
              className="save"
              name={field}
              onClick={(e) => {
                handelUpdateProfile(e, oldUserData._id);
                setActive(false);
              }}
            >
              save
            </button>
            <button
              className="cancel"
              name={field}
              onClick={(e) => {
                setActive(false);
                clearField(e.target.name);
              }}
            >
              cancel
            </button>
          </>
        )}
      </div>
    </StyledInputField>
  );
};

export default InputField;
