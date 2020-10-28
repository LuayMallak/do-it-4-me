import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledImageUpload = styled.div`
  * {
    color: ${colors.light};
  }
  width: 300px;
  height: 300px;
  margin: auto;
  background-color: ${colors.middle};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .title {
    font-weight: 700;
  }
  .choose-a-file {
    background-color: ${colors.secondary};
    max-width: 80%;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    outline: none;
    height: 28px;
  }
  .upload-btn {
    width: 80%;
    background-color: ${colors.primary};
    border: none;
    cursor: pointer;
    border-radius: 3px;
    outline: none;
    height: 28px;
  }
  .fileInfo {
    p {
      font-size: 1rem;
    }
  }
`;
