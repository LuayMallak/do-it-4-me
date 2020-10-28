import React from "react";
import { Link } from "@reach/router";
import { StyledDealResponse } from "../../Styled-Components/StyledDealResponse";

const DealReject = ({
  rejectExtend,
  setRejectExtend,
  setBookingExtend,
  setError,
  message,
}) => {
  return (
    <div className="BTNContainer">
      <button
        onClick={() => {
          setRejectExtend(false);
          setBookingExtend(false);
          setError({});
        }}
        className="BTN cancelBTN"
      >
        <span>OK</span>
      </button>
    </div>
  );
};

export default DealReject;
