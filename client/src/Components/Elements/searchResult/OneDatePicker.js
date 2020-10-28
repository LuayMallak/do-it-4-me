import React from "react";

import { DatePicker, Space } from "antd";
import { StyledOneDatePicker } from "../../Styled-Components/StyledOneDatePicker";

const dateFormat = "DD/MM/YYYY";

function OneDatePicker(props) {
  return (
    <StyledOneDatePicker>
      <Space direction="vertical" size={12}>
        <DatePicker onChange={props.onChange} format={dateFormat} />
      </Space>
    </StyledOneDatePicker>
  );
}

export default OneDatePicker;
