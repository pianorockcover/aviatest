import "styled-components";

/**
 * Типизация для темы в styled-component
 */
declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      textColor: string;
      background: string;
      dark: string;
    };
    fonts: {
      main: string;
      extra: string;
    };
  }
}
