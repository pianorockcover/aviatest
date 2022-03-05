import { IUser } from "../../../common/interfaces/IUser";

/**
 * Тип отображаемого экрана
 */
export enum ScreenType {
  form = "form",
  final = "final",
}

export interface AppStore {
  user: IUser;
  screenType: ScreenType;
}

/**
 * Начальное значение состояния приложения
 */
export const initialStore: AppStore = {
  screenType: ScreenType.form,
  user: {
    id: 1,
    email: null,
    shared: null,
  },
};
