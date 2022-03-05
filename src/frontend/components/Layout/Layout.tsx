import React, { FC, useContext } from "react";
import { AppContext } from "../context";
import { ScreenType } from "../context/store";
import { Form } from "../Form/Form";
import { LayoutWrapper } from "./styles";

export const Layout: FC = () => {
  const { store } = useContext(AppContext);

  return (
    <LayoutWrapper>
      {store.screenType === ScreenType.form ? <Form /> : <></>}
    </LayoutWrapper>
  );
};
