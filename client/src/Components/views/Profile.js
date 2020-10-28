import React, { useEffect, useState, useContext } from "react";
import { useLocation , navigate } from "@reach/router";

import profileImage from "../../images/profileImage.jpg";
import { useProfileFetch } from "../../data/useProfileFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
// COMPONENTS
import { StyledProfile } from "../Styled-Components/StyledProfile";
import { StyledButton } from "../Styled-Components/StyledButton";
import StarRate from "../Elements/shared/StarRate";
import ImageUpload from "../Elements/profile/ImageUpload";
import UpdateProfile from "../Elements/profile/UpdateProfile/UpdateProfile";
import Deals from "../Elements/profile/DealsHistory/Deals";
import UserContext from "../../data/UserContext";
import { useFetchDeals } from "../../data/useFetchDeals";
import DealsContext from "../../data/DealsContext";
let profileID;
const Profile = ({ refresh, setRefresh }) => {
  const { user } = useContext(UserContext).user;
  const profile = user;
  profileID = profile && profile._id;
  const [imageUpload, setImageUpload] = useState(false);
  const [updateProfile, setUpdateProfile] = useState(false);
  
  const location = useLocation();
  const { fetchUser } = useProfileFetch();
  const { deals } = useContext(DealsContext);
  const { fetchDeals } = useFetchDeals();
  useEffect(() => {
    fetchDeals();
  }, []);
  useEffect(() => {
    console.log("profilerender", user);

    setRefresh(true);
    if (location.state && location.state.provideAService)
      setUpdateProfile(true);
  }, []);
  useEffect(() => {
    if (profileID) fetchUser(profileID);
  }, [refresh]);
  return (
    <StyledProfile>
      {imageUpload && (
        <div className="ImageUploadComponentContainer">
          <div className="uploadImageComponent">
            <span
              onClick={() => setImageUpload(!imageUpload)}
              className="close"
            >
              X
            </span>
            <ImageUpload
              fetchUser={fetchUser}
              onClick={() => setImageUpload(!imageUpload)}
              id={profile._id}
            />
          </div>
          <div className="ImageUploadComponentBG"> </div>
        </div>
      )}
      
      <div className="profileContainer">
        <div className="profileHeader">
          <div className="imageContainer">
            <img
              alt={profile && profile.fullName}
              src={profile && profile.image ? profile.image : profileImage}
            />
            <span
              onClick={() => setImageUpload(!imageUpload)}
              title="upload image"
              className="uploadImageIcon"
            >
              {<FontAwesomeIcon icon={faCloudUploadAlt} />}
            </span>
          </div>
          <div className="shortInfoContainer">
            <h2 className="name">{profile && profile.fullName}</h2>
            <div className="addressContainer">
              <h3>{profile && profile.street}</h3>
              <h3>
                {profile && profile.zip} {profile && profile.city}
              </h3>
            </div>
            <div className="rateContainer">
              <StarRate
                value={profile && Number(profile.rate)}
                disabled={true}
              />{" "}
              <span className="ratersQuantity">
                ({profile && String(profile.rateCounter)})
              </span>
            </div>
            <StyledButton onClick={()=>navigate("/update-profile")} type="danger">
              Edit Profile
            </StyledButton>
          </div>
        </div>
        <div className="profileBody">
          <div className="servicesContainer">
            {profile && profile.services ? (
              <div className="services">
                {profile.services.map((item) => (
                  <span key={item._id} className="service">
                    {item.value}
                  </span>
                ))}
                {profile && profile.availability.startDate ? (
                  <>
                    <span className="date">
                      <strong>FROM :</strong> {profile.availability.startDate}
                    </span>
                    <span className="date">
                      <strong>UNTIL :</strong> {profile.availability.endDate}
                    </span>
                  </>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="bioContainer">
            <p>{profile && profile.bio}</p>
          </div>
          <Deals
            deals={deals}
            fetchDeals={fetchDeals}
            /*             change={change}
            setChange={setChange} */
          />
        </div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
