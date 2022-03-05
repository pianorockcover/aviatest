import React, { FC, useMemo, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "./context";
import { reducer } from "./context/reducer";
import { initialStore } from "./context/store";
import { Logo } from "./icons/Logo";
import { Layout } from "./Layout/Layout";
import { SkyAnimation } from "./SkyAnimation/SkyAnimation";
import { ApplicationContainer, GlobalStyles, LogoWrapper } from "./styles";
import { Fonts } from "./styles/Fonts";
import { theme } from "./styles/theme";

/**
 * Основной компонент приложения
 */
export const App: FC = () => {
  const [store, dispatch] = useReducer(reducer, initialStore);

  const contextValue = useMemo(
    () => ({
      store,
      dispatch,
    }),
    [store, dispatch]
  );

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={contextValue}>
        <GlobalStyles />
        <Fonts />
        <ApplicationContainer>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <SkyAnimation />
          <Layout />
        </ApplicationContainer>
      </AppContext.Provider>
    </ThemeProvider>
  );
};
