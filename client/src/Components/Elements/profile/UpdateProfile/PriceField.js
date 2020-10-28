import React, { useState, useContext } from "react";
import { StyledInputField } from "../../../Styled-Components/StyledInputField";
import useUpdateProfile from "../../../../data/useUpdateProfile";
import UserContext from "../../../../data/UserContext";
import { Slider } from "antd";
const PriceField = ({ field, FieldTitle }) => {
  const {
    clearField,
    handelUpdateProfile,
    handlePriceChange,
    newUserData,
  } = useUpdateProfile();
  const [active, setActive] = useState(false);
  const { user } = useContext(UserContext);
  const oldUserData = user.user ? user.user : {};
  function formatter(value) {
    return `${value}€`;
  }
  return (
    <StyledInputField>
      <label htmlFor={field}>{FieldTitle}</label>

      <div className="price">
        <Slider
          tipFormatter={formatter}
          max={15}
          disabled={!active}
          value={
            active
              ? newUserData[field] || newUserData[field] === 0
                ? newUserData[field]
                : oldUserData[field]
              : oldUserData[field] || 0
          }
          onChange={handlePriceChange}
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

export default PriceField;
