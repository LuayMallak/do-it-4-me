import React from "react";
import { AutoComplete } from "antd";
import "antd/dist/antd.css";
import { StyledSelectServices } from "../../Styled-Components/StyledSelectServices";

import { useOptionsFetch } from "../../../data/useOptionsFetch";

export default function SelectServices(props) {
  const [{ services, cities }] = useOptionsFetch();
  const options = props.type === "Service" ? services : cities;

  return (
    <StyledSelectServices>
      <AutoComplete

        defaultValue={props.defaultValue}
        style={{}}
        onChange={props.onChange}
        options={options}
        placeholder={props.placeholder || `Select a ${props.type}`}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </StyledSelectServices>
  );
}
