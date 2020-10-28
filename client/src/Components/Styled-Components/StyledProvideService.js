import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledProvideService = styled.div`
  border: 1px solid ${colors.middle};
  margin: 2rem 0;
  .serviceContainer {
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .serviceItem {
        display: flex;
        justify-content: center;
        align-items: center;

        input {
          margin: 0 0.3rem 0 1rem;
          width: auto;
        }
      }
    }
  }
  /* servicesContainer ends */
  .priceContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    .priceLabel {
      display: none;
    }
    .ant-slider-rail {
      background-color: ${colors.middle};
    }
  }
  .bioContainer {
    textarea {
      width: 90%;
      height: 8rem;
    }
  }
  .availabilityContainer {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    /*  border: 1px solid ${colors.middle}; */
    .ant-space-item {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .ant-picker.ant-picker-range {
        border: none;
      }
    }
    div {
      display: flex;
      justify-content: stretch;
      align-items: center;
      flex-grow: 1;
      input {
        margin: 0;
        flex-grow: 1;
      }
    }
  }
`;
