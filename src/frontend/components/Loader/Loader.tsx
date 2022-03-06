import styled, { keyframes } from "styled-components";

const loaderAnimation = keyframes`
  0% {
    transform: scale(.5);
    opacity: 0.4;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Loader = styled.div`
  position: fixed;
  z-index: 3;
  animation: ${loaderAnimation} 0.2s ease-in-out;
  width: fit-content;
  top: 10px;
  width: 100px;
  left: calc(50% - 70px);
  background: ${({ theme }) => theme.palette.dark};
  padding: 10px 15px;
  width: 140px;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
`;
