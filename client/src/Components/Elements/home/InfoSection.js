import React from "react";
import { StyledInfoSection } from "../../Styled-Components/StyledInfoSection";

/* import image2 from "../../images/image 2.png"; */
/* import image222 from "../../images/image 222.png"; */

/* import image4 from "../../images/image 4.png"; */
/* import image444 from "../../images/image 444.png"; */

/* import image7 from "../../images/image 7.png"; */
/* import image777 from "../../images/image 777.png"; */

const InfoSection = () => {
  return (
    <StyledInfoSection id="InfoSection">
      <div className="infoItem infoItem1">
        {/* <img src={image2} alt="image2" className="image2" width="175px" /> */}
        {/* <img src={image222} alt="image222" className="image2" width="175px" /> */}
        <h2>Provide a Service</h2>
        <p>
          As a Service Provider you can specify the skills you have or the
          services you might provide for others, either for free or for a
          reasonable fee
        </p>
        <div className="go-corner">
          <div className="go-arrow"></div>
        </div>
      </div>
      {/*  <section> */}
      <div className="infoItem infoItem2">
        {/* <img src={image4} alt="image4" className="image4" width="125px" /> */}
        {/* <img src={image444} alt="image444" className="image4" width="125px" /> */}
        <h2>Find a service provider</h2>
        <p>
          Find a trusted service provider to help you take care of your home or
          pets while you are away or help you do something at home
        </p>
        <div className="go-corner">
          <div className="go-arrow"></div>
        </div>
      </div>
      <div className="infoItem infoItem3">
        {/* <img src={image7} alt="image7" className="image7" width="150px" /> */}
        {/* <img src={image777} alt="image7" className="image7" width="150px" /> */}
        <h2>Mutual benefit</h2>
        <p>
          Both parties can benefit from this deal, one provides time and skills,
          and one provides money or at least a thank you
        </p>
        <div className="go-corner">
          <div className="go-arrow"></div>
        </div>
      </div>
      {/* </section> */}
    </StyledInfoSection>
  );
};

export default InfoSection;
