import styled from "styled-components";

export const FormTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.extra};
  text-align: center;
  line-height: 1.2;
  font-size: 3em;
  margin-bottom: 25px;
`;

export const FormWrapper = styled.div`
  position: relative;
  z-index: 2;
`;
