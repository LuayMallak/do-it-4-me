import styled from "styled-components";
import colors from "./General-Styles/colors";
import heroImage from "../../images/heroImage.jpg";

export const StyledHeroSection = styled.div`
  padding-top: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-image: url(${heroImage});
  background-position: 50% 20%;
  background-attachment: fixed;
  background-size: cover;
  @media (min-width: 900px) {
    min-height: 100vh;
  }
  .searchSection {
    margin-top: 5rem;
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 900px) {
      flex-direction: row;
      margin-top: 5rem;
    }
    div,
    a, button {
      width: 100%;
      max-width: 400px;
    }
  }

  .doubleDownIcon-container {
    position: absolute;
    bottom: 15%;
    a {
      text-decoration: none;
      color: ${colors.secondary};
      font-size: 15px;
      font-weight: 700;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span {
        width: 15px;
        height: 15px;
        display: block;
        border-right: 2px solid ${colors.primary};
        border-bottom: 2px solid ${colors.primary};
        transform: rotate(45deg);
        margin: -10px;
        animation: animate 2s infinite;
      }

      span:nth-child(2) {
        animation-delay: -0.2s;
      }

      span:nth-child(3) {
        animation-delay: -0.4s;
      }

      @keyframes animate {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
          transform: rotate(45deg) translate(10px, 10px);
        }
        100% {
          opacity: 0;
        }
      }
    }
  }
`;
