import React from "react";
import {
  GroupContainer,
  FormInputConatiner,
  FormInputLabel,
} from "./form-input.styles";

export default function FormInput({ label, ...otherProps }) {
  return (
    <GroupContainer>
      <FormInputConatiner id={label} {...otherProps} />
      {label ? <FormInputLabel htmlFor={label}>{label}</FormInputLabel> : null}
    </GroupContainer>
  );
}
