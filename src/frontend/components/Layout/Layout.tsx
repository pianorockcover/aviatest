import React, { FC, useContext } from "react";
import { AppContext } from "../context";
import { ScreenType } from "../context/store";
import { Final } from "../Final/Final";
import { Form } from "../Form/Form";

export const Layout: FC = () => {
  const { store } = useContext(AppContext);

  return <>{store.screenType === ScreenType.form ? <Form /> : <Final />}</>;
};
