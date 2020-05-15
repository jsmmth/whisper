import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  z-index: 2;
  top: 0px;
  left: 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const StyledLayout = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const YellowBlob = styled.img`
  position: absolute;
  top: -30vw;
  right: -50vw;
  width: 150vw;
  height: 150vh;
  animation: yellowMove 20s ease-in-out infinite;
  filter: blur(100px);

  @keyframes yellowMove {
    40% {
      transform: translate(40vw, 0vh);
    }
    80% {
      transform: translate(0vw, 0vh);
    }
  }
`;

export const PinkBlob = styled.img`
  position: absolute;
  top: 0vw;
  left: 0vw;
  width: 80vw;
  height: 90vh;
  animation: pinkMove 10s ease-in-out infinite;
  filter: blur(100px);

  @keyframes pinkMove {
    40% {
      transform: translate(40vw, 0vh);
    }
    80% {
      transform: translate(0vw, -20vh);
    }
  }
`;
