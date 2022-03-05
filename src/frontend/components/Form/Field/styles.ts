import styled from "styled-components";

interface FieldWrapperProps {
  disabled?: boolean;
}

export const FieldWrapper = styled.div<FieldWrapperProps>`
  display: flex;
  align-items: flex-start;
  opacity: ${({ disabled }: FieldWrapperProps) => (disabled ? 0.7 : 1)};
  position: relative;
  width: 400px;
  margin-bottom: 25px;
  max-width: 100%;

  pointer-events: ${({ disabled }: FieldWrapperProps) =>
    disabled ? "none" : "auto"};

  &:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
    display: ${({ disabled }: FieldWrapperProps) =>
      disabled ? "block" : "none"};
  }
`;

export const FieldLabel = styled.div`
  font-size: 1em;
  margin-bottom: 15px;
  user-select: none;
`;

export const FieldStep = styled.div`
  font-family: ${({ theme }) => theme.fonts.extra};
  font-size: 2.7em;
`;

export const FieldContent = styled.div`
  margin-left: 15px;
`;

export const CheckIconWrapper = styled.div`
  background: ${({ theme }) => theme.palette.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;
