import {
  Actions,
  SET_SCREEN_ACTION_TYPE,
  UPDATE_USER_ACTION_TYPE,
} from "./actions";
import { AppStore } from "./store";

/**
 * Редьюсер
 *
 * @param {AppStore} store - предыдущее состояние
 * @param {Actions} action - текущий экшн
 * @returns {AppStore}
 */
export const reducer = (store: AppStore, action: Actions) => {
  switch (action.type) {
    case UPDATE_USER_ACTION_TYPE:
      return {
        ...store,
        ...action.payload,
      };
    case SET_SCREEN_ACTION_TYPE: {
      return {
        ...store,
        screenType: action.payload.type,
      };
    }
    default:
      return store;
  }
};
