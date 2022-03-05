import React, { FC } from "react";
import { Field } from "./Field/Field";
import { InputField } from "./InputField";
import { Socials } from "./Socials/Socials";
import { FormTitle, FormWrapper } from "./styles";
import { SubmitButton } from "./SubmitButton";

/**
 * Форма обратной связи
 *
 * @returns {JSX.Element}
 */
export const Form: FC = () => {
  return (
    <FormWrapper>
      <FormTitle>
        Чтобы выиграть <br /> путешествие
      </FormTitle>
      <Field step={1} label="Поделись с друзьями">
        <Socials />
      </Field>
      <Field step={2} label="Оставь почту">
        <InputField />
      </Field>
      <SubmitButton disabled={true}>Отправить</SubmitButton>
    </FormWrapper>
  );
};
