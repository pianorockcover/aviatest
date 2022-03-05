import React, { FC } from "react";
import { Facebook } from "../../icons/Facebook";
import { Heart } from "../../icons/Heart";
import { Ok } from "../../icons/Ok";
import { Twitter } from "../../icons/Twitter";
import { Vk } from "../../icons/Vk";
import { Social, SocialsWrapper } from "./styles";

/**
 * Контрол для выбора соц сети
 *
 * @returns {JSX.Element}
 */
export const Socials: FC = () => {
  return (
    <SocialsWrapper>
      <Social background="#45668e">
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
