import React, { useState, useContext, useEffect } from "react";
import {navigate} from "@reach/router"
import useUpdateProfile from "../../../../data/useUpdateProfile";
import UserContext from "../../../../data/UserContext";
import { useOptionsFetch } from "../../../../data/useOptionsFetch";
import { StyledServicesFieldUpdate } from "../../../Styled-Components/StyledServicesFieldUpdate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ServicesFieldUpdate = ({ field, FieldTitle, change, setChange }) => {
  const [{ services }] = useOptionsFetch();

  const {
    handelUpdateProfile,
    handleServiceChange,
    newUserData,
    setNewUserData,
  } = useUpdateProfile();
  const [active, setActive] = useState(false);
  const {  user } = useContext(UserContext);
  const oldUserData = user.user ? user.user : {};
  const oldServices =
    oldUserData.services && oldUserData.services.map((item) => item._id);
  const {logged} =user &&user 
  const setServicesToTemporaryState = () =>
    setNewUserData({ services: oldServices });
  useEffect(() => {
    setServicesToTemporaryState();
  }, [oldUserData]);
  console.log(newUserData)
return (
    <StyledServicesFieldUpdate>
      {logged?(<>
      <label>Services</label>
      <div className="serviceContainer">
        {services&&services.map((item) => (
          <button
            className={
              active
                ? (newUserData.services &&
                  newUserData.services.includes(item._id)
                  ? "serviceBTN activeBTN"
                  : "serviceBTN")
                : "serviceBTN deActiveBTN"
            }
            disabled={!active}
            type="checkbox"
            key={item._id}
            name={item._id}
            onClick={(e) => handleServiceChange(e)}
          >
            {item.value}
            {newUserData.services.includes(item._id) && (
              <FontAwesomeIcon icon={faCheck} />
            )}
          </button>
        ))}
      </div>
      <div className="editButtons">
        {!active ? (
          <button
            className="edit"
            name={field}
            onClick={(e) => setActive(true)}
          >
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
                setServicesToTemporaryState();
              }}
            >
              cancel
            </button>
          </>
        )}
      </div></>):<div> </div>}
    </StyledServicesFieldUpdate>
  );
};

export default ServicesFieldUpdate;
