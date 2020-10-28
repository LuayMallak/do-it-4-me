import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledOneDatePicker = styled.div`
  .ant-picker {
    width: 17rem;
    height: 3.5rem;
    background-color: ${colors.light};
    .ant-picker-input {
      input {
        text-align: center;
      }
    }
  }
`;
