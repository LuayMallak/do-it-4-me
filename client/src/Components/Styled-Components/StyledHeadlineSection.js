import styled from "styled-components";
import colors from "./General-Styles/colors";

export const StyledHeadlineSection = styled.div`
  margin-bottom: 10rem;
  position: relative;
  width: 80vw;
  height: 3rem;
  :before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    filter: blur(40px);
    width: 80vw;
    height: 3rem;
    background-color: ${colors.middle};
  }

  @media (min-width: 985px) {
    margin-bottom: 5rem;
  }

  .text {
    width: 80vw;
    filter: blur(0px);
    color: ${colors.primary};
    font-size: 2.2rem;
    font-weight: bold;
    filter: drop-shadow(0px 0.2rem 0.2rem rgba(0, 0, 0, 0.1));

    @media (min-width: 985px) {
      width: 85vw;
      display: flex;
      justify-content: center;
    }

    p {
      vertical-align: top;
      margin: 0;

      @media (min-width: 985px) {
        display: inline-block;
      }
    }

    .__text {
      @media (min-width: 985px) {
        margin-left: -20rem;
      }
    }

    .words-container {
      display: flex;

      @media (min-width: 985px) {
        width: auto;
        display: inline-block;
      }
      .word {
        width: 80vw;
        position: absolute;
        opacity: 0;
        color: ${colors.primary};

        @media (min-width: 985px) {
          width: auto;
        }
      }
    }

    .letter {
      display: inline-block;
      position: relative;
      transform: translateZ(25px);
      transform-origin: 50% 50% 25px;
    }

    .letter.out {
      transform: rotateX(90deg);
      transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .letter.behind {
      transform: rotateX(-90deg);
    }

    .letter.in {
      transform: rotateX(0deg);
      transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
`;
