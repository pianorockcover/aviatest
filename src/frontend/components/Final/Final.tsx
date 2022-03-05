import React, { FC } from "react";
import { Reload } from "../icons/Reload";
import { Traveller } from "../icons/Traveller";
import {
  FinalSubTitle,
  FinalTitle,
  FinalWrapper,
  ReloadButton,
  TravellerIconWrapper,
} from "./styles";

/**
 * Финальный экран приложения
 */
export const Final: FC = () => {
  return (
    <>
      <TravellerIconWrapper>
        <Traveller />
      </TravellerIconWrapper>
      <FinalWrapper>
        <FinalSubTitle>выборы</FinalSubTitle>
        <FinalTitle>
          путешествие <br />
          близко!
        </FinalTitle>
        <ReloadButton>
          <Reload />
        </ReloadButton>
      </FinalWrapper>
    </>
  );
};
