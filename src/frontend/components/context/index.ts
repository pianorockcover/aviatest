import { createContext, Dispatch } from "react";
import { Actions } from "./actions";
import { AppStore, initialStore } from "./store";
import { noop } from "lodash";

export interface AppContextProps {
  store: AppStore;
  dispatch: Dispatch<Actions>;
}

/**
 * Контекст приложения, хранящий данные о пользователе
 */
export const AppContext = createContext<AppContextProps>({
  store: initialStore,
  dispatch: noop,
});
