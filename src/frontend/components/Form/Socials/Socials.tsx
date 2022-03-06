import React, { FC, useCallback } from "react";
import { Facebook } from "../../icons/Facebook";
import { Heart } from "../../icons/Heart";
import { Ok } from "../../icons/Ok";
import { Twitter } from "../../icons/Twitter";
import { Vk } from "../../icons/Vk";
import { UseUserDataReturns } from "../../Layout/useUserData";
import { Social, SocialsWrapper } from "./styles";

const windowParams = "menubar=no,toolbar=no,status=no,width=570,height=570";
const shareUrl = "https://www.aviasales.ru/";

interface SocialsProps {
  /**
   * Ф-я синхронизации стора
   */
  syncStore: UseUserDataReturns["syncStore"];
}

/**
 * Контрол для выбора соц сети
 *
 * @returns {JSX.Element}
 */
export const Socials: FC<SocialsProps> = ({ syncStore }) => {
  const onShared = useCallback(
    (url: string) => () => {
      const shareWindow = window.open(url, "NewWindow", windowParams);

      const interval = setInterval(() => {
        if (shareWindow.closed) {
          clearInterval(interval);
          syncStore({
            shared: true,
          });
        }
      }, 1000);
    },
    []
  );

  return (
    <SocialsWrapper>
      <Social
        background="#45668e"
        onClick={onShared(`https://vk.com/share.php?url=${shareUrl}`)}
      >
        <Vk />
        <Heart />
      </Social>
      <Social
        background="#3b5998"
        onClick={onShared(
          `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
        )}
      >
        <Facebook />
        <Heart />
      </Social>
      <Social
        background="#45abe7"
        onClick={onShared(`https://twitter.com/intent/tweet?url=${shareUrl}`)}
      >
        <Twitter />
        <Heart />
      </Social>
      <Social
        background="#de7840"
        onClick={onShared(
          `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${shareUrl}`
        )}
      >
        <Ok />
        <Heart />
      </Social>
    </SocialsWrapper>
  );
};
