import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    margin: 0;
    font-family: Nunito;
  }
`;

export const ApplicationContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.textColor};
  padding: 20px 10px;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
`;
