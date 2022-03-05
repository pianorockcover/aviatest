import styled from "styled-components";

export const FinalWrapper = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

export const FinalSubTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.extra};
  color: ${({ theme }) => theme.palette.dark};
  font-size: 3em;
  text-decoration: line-through;
`;

export const FinalTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.extra};
  font-size: 4em;
  margin-bottom: 20px;
  line-height: 1.3;
`;

export const TravellerIconWrapper = styled.div`
  position: absolute;
  top: -25px;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ReloadButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
