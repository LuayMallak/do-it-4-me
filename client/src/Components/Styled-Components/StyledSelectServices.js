import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledSelectServices = styled.div`
  width: 17rem;

  .ant-select {
    width: 100%;
    height: 3.5rem;

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

      .ant-select-selector {
        border-color: ${colors.primary};
        border-top-color: ${colors.primary};
        border-right-color: ${colors.primary};
        border-bottom-color: ${colors.primary};
        border-left-color: ${colors.primary};
        border-right-width: 1px !important;
      }
    }
    .ant-select-selector {
      height: 3.5rem;
      background-color: none;

      span {
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.middle};
        .ant-select-selection-search-input {
          height: 3.5rem;
          text-align: center;
        }
      }
    }
  }
`;
