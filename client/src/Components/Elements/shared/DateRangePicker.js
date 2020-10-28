import React from "react";

import { DatePicker, Space } from "antd";
const dateFormat = "YYYY/MM/DD";

const { RangePicker } = DatePicker;

export const DateRangePicker = (props) => {
  return (
    <Space direction="vertical" size={12}>
      <RangePicker format={dateFormat} onChange={props.onChange} />
    </Space>
  );
};

export default DateRangePicker;
