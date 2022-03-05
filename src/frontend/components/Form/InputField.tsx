import styled from "styled-components";

interface InputFieldProps {
  disabled?: boolean;
}

export const InputField = styled.input<InputFieldProps>`
  border: none;
  font-size: 1.3em;
  outline: none;
  color: #333;
  padding: 15px 30px;
  border-radius: 50px;
  max-width: 100%;
`;
