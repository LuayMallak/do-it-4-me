import React from "react";
import { Link } from "@reach/router";
import { StyledDealResponse } from "../../Styled-Components/StyledDealResponse";

const DealResponse = ({
  responseExtend,
  setResponseExtend,
  setBookingExtend,
  message,
  setRejectExtend,
  rejectExtend,
}) => {
  return (
    <StyledDealResponse responseExtend={responseExtend}>
      {message && message.length ? (
        <>
          {" "}
          <h2 className="reject">REJECTION</h2>
          <div className="responseContainer">
            <h3 className="reject">
              Your request has been rejected from the server with the message :{" "}
              {message}
            </h3>
          </div>
        </>
      ) : (
        <>
          <h2>CONFIRMATION</h2>
          <div className="responseContainer">
            <h3>
              Your request has been sent. This service provider will respond to
              you request as soon as possible. You always can review your deals
              in your
              <Link to="/profile">profile page</Link>
            </h3>
          </div>
        </>
      )}
      <div className="BTNContainer">
        <button
          onClick={() => {
            setResponseExtend(false);
            setBookingExtend(false);
          }}
          className="BTN cancelBTN"
        >
          <span>OK</span>
        </button>
      </div>
    </StyledDealResponse>
  );
};

export default DealResponse;
