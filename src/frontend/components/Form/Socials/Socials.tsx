import React, { FC, useCallback } from "react";
import { Facebook } from "../../icons/Facebook";
import { Heart } from "../../icons/Heart";
import { Ok } from "../../icons/Ok";
import { Twitter } from "../../icons/Twitter";
import { Vk } from "../../icons/Vk";
import { UseUserDataReturns } from "../../Layout/useUserData";
import { Social, SocialsWrapper } from "./styles";

interface SocialsProps {
  syncStore: UseUserDataReturns["syncStore"];
}

/**
 * Контрол для выбора соц сети
 *
 * @returns {JSX.Element}
 */
export const Socials: FC<SocialsProps> = ({ syncStore }) => {
  const onShared = useCallback(() => {
    syncStore({
      shared: true,
    });
  }, []);

  return (
    <SocialsWrapper>
      <Social background="#45668e" onClick={onShared}>
        <Vk />
        <Heart />
      </Social>
      <Social background="#3b5998">
        <Facebook />
        <Heart />
      </Social>
      <Social background="#45abe7">
        <Twitter />
        <Heart />
      </Social>
      <Social background="#de7840">
        <Ok />
        <Heart />
      </Social>
    </SocialsWrapper>
  );
};
