import styled from "styled-components";

interface InputFieldProps {
  disabled?: boolean;
}

export const InputField = styled.input<InputFieldProps>`
  border: none;
  font-size: 1.2em;
  font-family: ${({ theme }) => theme.fonts.main};
  outline: none;
  color: #545454;
  padding: 15px 30px;
  border-radius: 50px;
  max-width: 100%;

  &,
  &:disabled {
    background: #ffffff;
  }
`;
