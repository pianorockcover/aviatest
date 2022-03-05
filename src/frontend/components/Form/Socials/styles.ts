import styled from "styled-components";

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface SocialProps {
  background: string;
}

export const Social = styled.div<SocialProps>`
  background: ${({ background }) => background};
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease-in-out;

  &:not(:nth-last-child(1)) {
    margin-right: 15px;
  }

  .social-icon {
    transition: opacity 0.1s ease-in-out;
  }

  .heart-icon {
    position: absolute;
    opacity: 0;
    width: 26px;
    height: 26px;
    z-index: 2;
    top: calc(50% - 13px);
    left: calc(50% - 13px);
    transition: opacity 0.1s ease-in-out;
  }

  &:hover {
    transform: scale(1.2);

    .social-icon {
      opacity: 0;
    }

    .heart-icon {
      opacity: 1;
    }
  }
`;
