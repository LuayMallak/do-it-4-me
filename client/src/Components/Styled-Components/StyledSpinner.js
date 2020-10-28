import styled from 'styled-components';
import colors from "./General-Styles/colors";
export const StyledSpinner = styled.div`
  border: 7px solid ${colors.primary}; 
  border-top-color:  ${colors.secondary};
  border-radius: 50%;
  width: 75px;
  height: 75px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;
  position: absolute;
  top :50vh;
  margin:auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
