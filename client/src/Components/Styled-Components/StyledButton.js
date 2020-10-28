import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledButton = styled.button`
  background-color: ${(props) => {
    if (props.type === "primary") return colors.primary;
    if (props.type === "secondary") return colors.secondary;
    if (props.type === "danger") return colors.danger;
    if (props.type === "middle") return colors.middle;
    if (props.type === "success") return colors.success;
    if (props.type === "dark") return colors.dark;
  }};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  color: ${colors.light};
  width: 17rem;
  height: 3.5rem;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.17));
  border-radius: 3px;
  outline: none;
  transition: all .2s ease-in-out;

  :hover {
    opacity: 0.8;
  }
  :active {
    transform: scale(0.99);
    filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.1));
  }
`;
