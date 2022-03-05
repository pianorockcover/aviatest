import React, { FC } from "react";
import { Field } from "./Field/Field";
import { FormTitle, FormWrapper } from "./styles";

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
      <Field step={1} label="Поделись с друзьями" disabled={true}>
        ...
      </Field>
      <Field step={2} label="Оставь почту">
        ...
      </Field>
    </FormWrapper>
  );
};
