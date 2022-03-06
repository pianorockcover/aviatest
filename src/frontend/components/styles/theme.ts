import { DefaultTheme } from "styled-components";

/**
 * Настройки темы и цветовой схемы
 */
export const theme: DefaultTheme = {
  /**
   * Палитра
   */
  palette: {
    textColor: "#ffffff",
    background: "#cd718e",
    dark: "#7f4156",
  },
  /**
   * Шрифты
   */
  fonts: {
    main: "Nunito",
    extra: "Shnobelregular",
  },
  /**
   * Брейкпоинты для адаптивности
   */
  breakpoints: {
    small: 400,
    medium: 1400,
  },
};
