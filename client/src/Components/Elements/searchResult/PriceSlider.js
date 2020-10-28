import React from "react";
import { Slider } from "antd";
import { StyledPriceSlider } from "../../Styled-Components/StyledPriceSlider";
import "antd/dist/antd.css";

function formatter(value) {
  return `${value}€`;
}

export default function PricePicker(props) {
  return (
    <StyledPriceSlider>
      {props.name !== "price" && <div className="priceLabel">Max Fee</div>}
      <Slider
        disabled={props.disabled}
        tipFormatter={formatter}
        max={15}
        defaultValue={props.defaultValue ? props.defaultValue : 0}
        onChange={props.onChange}
      />
    </StyledPriceSlider>
  );
}
