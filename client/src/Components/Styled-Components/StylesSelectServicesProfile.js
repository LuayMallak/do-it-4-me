import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StylesSelectServicesProfile = styled.div`
  width: 100%;
  max-width: 200px;
  .ant-select {
    width: 100%;
    background-color: none;
    :hover,
    :active,
    :focus,
    :focus-within,
    :visited {
      border-color: ${colors.primary};
      border-top-color: ${colors.primary};
      border-right-color: ${colors.primary};
      border-bottom-color: ${colors.primary};
      border-left-color: ${colors.primary};
      outline-color: ${colors.primary};
      border-right-width: 1px !important;
      background-color: none;
      .ant-select-selector {
        border-color: ${colors.primary};
        border-top-color: ${colors.primary};
        border-right-color: ${colors.primary};
        border-bottom-color: ${colors.primary};
        border-left-color: ${colors.primary};
        border-right-width: 1px !important;
        background-color: none;
      }
    }
    .ant-select-selector {
      background-color: ${colors.light};
      border-color: ${colors.middle};
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.dark};
        background-color: none;
        .ant-select-selection-search-input {
          text-align: center;
        }
      }
    }
  }
`;
