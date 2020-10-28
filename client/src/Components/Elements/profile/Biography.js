import React, { useState, useContext } from "react";
import { StyledBiography } from "../../Styled-Components/StyledBiography";
import useUpdateProfile from "../../../data/useUpdateProfile";
import UserContext from "../../../data/UserContext";

const Biography = ({ field, FieldTitle }) => {
  const {
    handleBioChange,
    clearField,
    handelUpdateProfile,

    newUserData,
  } = useUpdateProfile();
  const [active, setActive] = useState(false);
  const { user } = useContext(UserContext);
  const oldUserData = user.user ? user.user : {};
  return (
    <StyledBiography>
      <label htmlFor={field}>{FieldTitle}</label>
      <div className="inputContainer">
        <textarea
          maxLength={700}
          onChange={(e) => handleBioChange(e.target.value)}
          placeholder={oldUserData[field]}
          disabled={!active}
          value={active ? newUserData[field] || "" : oldUserData[field] || ""}
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
    </StyledBiography>
  );
};

export default Biography;
