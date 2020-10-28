import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledPriceSlider = styled.div`
  width: ${(props) => (props.fullWidth ? "100%" : "17rem")};
  .priceLabel {
    color: ${colors.light};
  }

  .ant-slider {
    .ant-slider-rail {
      background-color: ${colors.light};
    }
    .ant-slider-track {
      background-color: ${colors.primary};
    }
    .ant-slider-step {
    }
    .ant-slider-handle {
      background-color: ${colors.light};
      border: 2px solid ${colors.primary};
    }
  }
`;
