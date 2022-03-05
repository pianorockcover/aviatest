import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { SERVER_PORT } from "../../../common/constants";
import { IServerResponse } from "../../../common/interfaces/IServerResponse";
import { IUser } from "../../../common/interfaces/IUser";
import { AppContext } from "../context";
import {
  SET_SCREEN_ACTION_TYPE,
  UPDATE_USER_ACTION_TYPE,
} from "../context/actions";
import { ScreenType } from "../context/store";

export const host = `http://${window.location.hostname}:${SERVER_PORT}`;

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export interface UseUserDataReturns {
  /**
   * Индикатор загрузки
   */
  isLoading?: boolean;
  /**
   * Ф-я синхронизирующая стор с сервером
   */
  syncStore: (userData?: Partial<IUser>) => void;
}

/**
 * Хук для загрузки информации о пользователе
 *
 * @returns {UseUserDataReturns}
 */
export const useUserData = (): UseUserDataReturns => {
  const [fetchKey, setFetchKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>();
  const [userData, setUserData] = useState<IUser>();

  const syncStore = useCallback((userData?: IUser) => {
    setFetchKey((value) => value + 1);
    setUserData(userData);
  }, []);

  const { store, dispatch } = useContext(AppContext);

  useEffect(() => {
    setIsLoading(true);

    axios
      .post<IServerResponse<IUser>>(
        `${host}/user/update/1`,
        fetchKey === 0 ? {} : { ...store.user, ...(userData || {}) },
        axiosConfig
      )
      .then(({ data }) => {
        if (data.error) {
          console.error(data.message);
        } else {
          dispatch({
            type: UPDATE_USER_ACTION_TYPE,
            payload: data.body,
          });
          if (data.body.email && data.body.shared) {
            dispatch({
              type: SET_SCREEN_ACTION_TYPE,
              payload: {
                type: ScreenType.final,
              },
            });
          }
          setUserData(undefined);
        }
      })
      .catch((e) => console.error(e.message))
      .finally(() => setIsLoading(false));
  }, [fetchKey]);

  return {
    isLoading,
    syncStore,
  };
};
