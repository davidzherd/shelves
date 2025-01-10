import styled from "styled-components";

export const NotificationCircle = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: ${(props) => props.color};
  position: relative;
  left: 340%;
  bottom: 170%;
  box-shadow: 0px 0px 0px ${(props) => props.color};
  /* Only apply animation if color is not transparent */
  animation: ${(props) =>
    props.color === "red" && "2s circleglowRed ease-in-out infinite"};
  animation: ${(props) =>
    props.color === "#ffc847" && "2s circleglowOrange ease-in-out infinite"};
  animation: ${(props) => props.color === "transparent" && "none"};
  @keyframes circleglowRed {
    0% {
      box-shadow: 0px 0px 0px #ff8080;
    }
    50% {
      box-shadow: 0px 0px 10px red;
    }
    100% {
      box-shadow: 0px 0px 0px #ff8080;
    }
  }
  @keyframes circleglowOrange {
    0% {
      box-shadow: 0px 0px 0px #ffd980;
    }
    50% {
      box-shadow: 0px 0px 10px #ffc847;
    }
    100% {
      box-shadow: 0px 0px 0px #ffd980;
    }
  }
`;
