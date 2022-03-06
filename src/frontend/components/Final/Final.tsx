import axios from "axios";
import React, { FC, useCallback, useContext, useState } from "react";
import { IServerResponse } from "../../../common/interfaces/IServerResponse";
import { IUser } from "../../../common/interfaces/IUser";
import { AppContext } from "../context";
import {
  SET_SCREEN_ACTION_TYPE,
  UPDATE_USER_ACTION_TYPE,
} from "../context/actions";
import { ScreenType } from "../context/store";
import { Reload } from "../icons/Reload";
import { host } from "../Layout/useUserData";
import { Loader } from "../Loader/Loader";
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
  const { dispatch } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState<boolean>();

  const removeUser = useCallback(() => {
    setIsLoading(true);
    axios
      .get<IServerResponse<IUser>>(`${host}/user/remove/1`)
      .then(({ data }) => {
        if (data.error) {
          console.error(data.message);
        } else {
          dispatch({
            type: UPDATE_USER_ACTION_TYPE,
            payload: {
              email: null,
              shared: false,
            },
          });
          dispatch({
            type: SET_SCREEN_ACTION_TYPE,
            payload: {
              type: ScreenType.form,
            },
          });
        }
      })
      .catch((e) => console.error(e.message))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <>
      <TravellerIconWrapper />
      <FinalWrapper>
        <FinalSubTitle>выборы</FinalSubTitle>
        <FinalTitle>
          путешествие <br />
          близко!
        </FinalTitle>
        {isLoading ? (
          <Loader>Загрузка...</Loader>
        ) : (
          <ReloadButton onClick={removeUser}>
            <Reload />
          </ReloadButton>
        )}
      </FinalWrapper>
    </>
  );
};
