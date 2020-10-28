import React, { useState,  useEffect } from "react";
import { useLocation } from "@reach/router";
import { StyledUpdateProfile } from "../../../Styled-Components/StyledUpdateProfile";
import PasswordUpdate from "./PasswordUpdate";
import BasicDataUpdate from "./BasicDataUpdate";
import ServiceProviderDataUpdate from "./ServiceProviderDataUpdate";
import {StyledButton} from "../../../Styled-Components/StyledButton"
import {Link} from "@reach/router"
const UpdateProfile = () => {
  const [navigator, setNavigator] = useState("basic");

  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.provideAService)
      setNavigator("provider");
  }, []);
  return (
    <StyledUpdateProfile>

      <div className="updateProfileContainer">
      <div className="updateProfileNavigatorContainer">
        <div className="updateProfileNavigator">
          <button
            className={navigator === "basic" ? "active" : ""}
            onClick={() => setNavigator("basic")}
          >
            Basic Profile Data
          </button>
          <button
            className={navigator === "password" ? "active" : ""}
            onClick={() => setNavigator("password")}
          >
            Password
          </button>
          <button
            className={navigator === "provider" ? "active" : ""}
            onClick={() => setNavigator("provider")}
          >
            Services Provider Data
          </button></div>
          <div className="BTNContainer">
      <Link to="/profile"><StyledButton className="styled" type="dark">Back to Profile</StyledButton></Link>
      <Link to="/"><StyledButton className="styled" type="dark">Homepage</StyledButton></Link></div>
        </div>
       
        <div className="dataContainer">
          {navigator === "basic" && <BasicDataUpdate />}
          {navigator === "password" && <PasswordUpdate />}
          {navigator === "provider" && <ServiceProviderDataUpdate />}
        </div>
      </div>
    </StyledUpdateProfile>
  );
};

export default UpdateProfile;
