import { IUser } from "../../../common/interfaces/IUser";
import { ScreenType } from "./store";

export const UPDATE_USER_ACTION_TYPE = "UPDATE_USER_ACTION";

/**
 * Экшн, обновляющий пользователя в глобальном сторе
 */
type UpdateReducerAction = {
  type: typeof UPDATE_USER_ACTION_TYPE;
  payload: Partial<IUser>;
};

export const SET_SCREEN_ACTION_TYPE = "SET_SCREEN_ACTION";

/**
 * Экшн для переключения между формой и финальным экраном
 */
type SetScreenAction = {
  type: typeof SET_SCREEN_ACTION_TYPE;
  payload: {
    type: ScreenType;
  };
};

export type Actions = UpdateReducerAction | SetScreenAction;
