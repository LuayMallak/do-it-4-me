import React, { useState, useContext } from "react";
import moment from "moment";
import useUpdateProfile from "../../../../data/useUpdateProfile";
import UserContext from "../../../../data/UserContext";
import { DatePicker, Space } from "antd";
import { StyledAvailabilityUpdate } from "../../../Styled-Components/StyledAvailabilityUpdate";
const AvailabilityUpdate = ({ field, FieldTitle }) => {
  const dateFormat = "YYYY-MM-DD";
  const { RangePicker } = DatePicker;
  const {
    clearField,
    handelUpdateProfile,
    handleDateChange,
    newUserData,
  } = useUpdateProfile();
  const [active, setActive] = useState(false);
  const { user } = useContext(UserContext);
  const oldUserData = user.user ? user.user : {};
  const startDate =
    oldUserData.availability && oldUserData.availability.startDate
      ? moment(oldUserData.availability.startDate, dateFormat)
      : "";
  const endDate =
    oldUserData.availability && oldUserData.availability.endDate
      ? moment(oldUserData.availability.endDate, dateFormat)
      : "";
  return (
    <StyledAvailabilityUpdate>
      <label htmlFor={field}>{FieldTitle}</label>

      <div className="dateContainer">
        <Space direction="vertical" size={8}>
          <RangePicker
            disabled={!active}
            format={dateFormat}
            onChange={(d,s)=>handleDateChange(d,s)}
            value={
              newUserData.availability && newUserData.availability.startDate
                ? [
                    newUserData.availability.startDate,
                    newUserData.availability.endDate,
                  ]
                : [startDate, endDate]
            }
          />
        </Space>
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
    </StyledAvailabilityUpdate>
  );
};

export default AvailabilityUpdate;
