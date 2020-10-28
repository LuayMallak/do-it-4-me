import styled from "styled-components";
import colors from "./General-Styles/colors";
import profileIcon from "../../images/profileIcon.jpg";

export const StyledProfileIcon = styled.div`
  width: ${(props) => (props.mobile ? "6rem" : "3rem")};
  height: ${(props) => (props.mobile ? "6rem" : "3rem")};
  border-radius: 50%;
  background-size: cover;
  background-position: ${(props) => (props.refresh ? "center" : "center")};
  border: 4px solid ${(props) => (props.logged ? colors.primary : colors.light)};
  background-image: url(${(props) =>
    props.image ? props.image : profileIcon});
`;
