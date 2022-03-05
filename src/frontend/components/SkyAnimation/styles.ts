import styled, { keyframes } from "styled-components";

const cloudAnimation = keyframes`
  0% {
    transform: scale(.5);
  }

  100% {
    transform: scale(1);
  }
`;

export const SkyAnimationWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SkyCloud = styled.div`
  position: absolute;
  animation: ${cloudAnimation} 0.4s ease-in-out;
  width: fit-content;
`;
