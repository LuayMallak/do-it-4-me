import React from "react";
import { StyledStarRate } from "../../Styled-Components/StyledStarRate";
import { Rate } from "antd";

export default function StarRate(props) {
  return (
    <StyledStarRate>
      <Rate
        allowHalf
        disabled={props.disabled}
        onChange={props.onChange}
        defaultValue={props.defaultValue || 0}
        value={props.value}
      />
    </StyledStarRate>
  );
}
