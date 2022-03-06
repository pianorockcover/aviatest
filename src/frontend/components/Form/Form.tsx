import { debounce } from "lodash";
import React, {
  ChangeEventHandler,
  FC,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { validateEmail } from "../../../common/utils/validateEmail";
import { AppContext } from "../context";
import {
  SET_SCREEN_ACTION_TYPE,
  UPDATE_USER_ACTION_TYPE,
} from "../context/actions";
import { ScreenType } from "../context/store";
import { UseUserDataReturns } from "../Layout/useUserData";
import { Field } from "./Field/Field";
import { InputField } from "./InputField";
import { Socials } from "./Socials/Socials";
import { FormTitle, FormWrapper } from "./styles";
import { SubmitButton } from "./SubmitButton";

interface FormProps {
  /**
   * Ф-я синхронизации со стором
   */
  syncStore: UseUserDataReturns["syncStore"];
}

/**
 * Форма обратной связи
 *
 * @param {FormProps} props
 * @returns {JSX.Element}
 */
export const Form: FC<FormProps> = ({ syncStore }) => {
  const { store, dispatch } = useContext(AppContext);
  const submitDisabled = useMemo(
    () => !validateEmail(store.user.email),
    [store.user.email]
  );

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    debounce((e) => {
      dispatch({
        type: UPDATE_USER_ACTION_TYPE,
        payload: {
          email: String(e.target.value).trim(),
        },
      });
    }, 500),
    []
  );

  const onSubmit = useCallback(() => {
    syncStore();
  }, []);

  return (
    <FormWrapper>
      <FormTitle>
        Чтобы выиграть <br /> путешествие
      </FormTitle>
      <Field step={1} label="Поделись с друзьями" disabled={store.user.shared}>
        <Socials syncStore={syncStore} />
      </Field>
      <Field step={2} label="Оставь почту" disabled={!submitDisabled}>
        <InputField onChange={onEmailChange} disabled={!submitDisabled} />
      </Field>
      <SubmitButton
        disabled={submitDisabled && !!store.user.shared}
        onClick={onSubmit}
      >
        Отправить
      </SubmitButton>
    </FormWrapper>
  );
};
