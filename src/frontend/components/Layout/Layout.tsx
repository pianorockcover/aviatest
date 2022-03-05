import React, { FC, useContext } from "react";
import { AppContext } from "../context";
import { ScreenType } from "../context/store";
import { Final } from "../Final/Final";
import { Form } from "../Form/Form";
import { useUserData } from "./useUserData";

export const Layout: FC = () => {
  const { store } = useContext(AppContext);

  const { syncStore } = useUserData();

  return store.screenType === ScreenType.form ? (
    <Form syncStore={syncStore} />
  ) : (
    <Final />
  );
};
