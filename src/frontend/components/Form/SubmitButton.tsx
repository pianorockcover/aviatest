import styled from "styled-components";

interface SubmitButtonProps {
  disabled?: boolean;
}

export const SubmitButton = styled.button<SubmitButtonProps>`
  font-family: ${({ theme }) => theme.fonts.extra};
  font-size: 2em;
  margin: 0 auto;
  display: block;
  margin-top: 35px;
  width: fit-content;
  padding: 10px 35px;
  border: 2px solid #fff;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  color: ${({ theme, disabled }) =>
    disabled ? "#ffffff" : theme.palette.dark};
  background: ${({ disabled }) => (disabled ? "transparent" : "#ffffff")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  user-select: none;

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.palette.dark};
    border-color: ${({ theme }) => theme.palette.dark};
    color: #ffffff;
  }
`;
