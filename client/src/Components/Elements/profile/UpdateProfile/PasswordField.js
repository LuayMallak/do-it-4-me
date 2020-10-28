import React, { useState, useContext } from "react";
import { StyledInputField } from "../../../Styled-Components/StyledInputField";
import useUpdateProfile from "../../../../data/useUpdateProfile";
import UserContext from "../../../../data/UserContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const InputField = ({ field, FieldTitle }) => {
  const {
    handleFieldsChange,
    clearField,
    handelUpdateProfile,

    newUserData,
  } = useUpdateProfile();
  const [active, setActive] = useState(false);
  const [passwordMood, setPasswordMood] = useState(true);
  const { user } = useContext(UserContext);
  const oldUserData = user.user ? user.user : {};
  return (
    <StyledInputField>
      <label htmlFor={field}>{FieldTitle}</label>
      <div className="inputContainer">
        <input
          className="passwordInput"
          placeholder="*********"
          type={passwordMood && active ? "password" : "text"}
          disabled={!active}
          value={active ? newUserData[field] : ""}
          onChange={(e) => handleFieldsChange(e.target)}
          name={field}
        />
        <FontAwesomeIcon
          className="showPassword"
          onClick={() => setPasswordMood(!passwordMood)}
          icon={faEye}
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
