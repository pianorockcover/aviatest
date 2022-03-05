import styled, { keyframes } from "styled-components";

export const FormTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.extra};
  text-align: center;
  line-height: 1.2;
  font-size: 3em;
  margin-bottom: 15px;
`;

const formAnimation = keyframes`
  0% {
    opacity: .4;
  }

  100% {
    opacity: 1;
  }
`;

export const FormWrapper = styled.div`
  animation: ${formAnimation} 0.7s ease-in-out;
`;
