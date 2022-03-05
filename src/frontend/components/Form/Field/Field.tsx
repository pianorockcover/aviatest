import React, { FC } from "react";
import { Check } from "../../icons/Check";
import {
  CheckIconWrapper,
  FieldContent,
  FieldLabel,
  FieldStep,
  FieldWrapper,
} from "./styles";

interface FieldProps {
  /**
   * Номер шага
   */
  step: number;
  /**
   * Заголовок поля
   */
  label: string;
  /**
   * Поле неактивно
   */
  disabled?: boolean;
}

/**
 * Компонент-обертка для полей формы
 *
 * @param {FieldProps} props
 * @returns {JSX.Element}
 */
export const Field: FC<FieldProps> = ({ step, label, children, disabled }) => (
  <FieldWrapper disabled={disabled}>
    {!disabled ? (
      <FieldStep>{step}.</FieldStep>
    ) : (
      <CheckIconWrapper>
        <Check />
      </CheckIconWrapper>
    )}
    <FieldContent>
      <FieldLabel>{label}</FieldLabel>
      {children}
    </FieldContent>
  </FieldWrapper>
);
