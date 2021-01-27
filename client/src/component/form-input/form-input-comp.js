import React from "react";
import { v4 as uuidv4 } from 'uuid'
import {
  GroupContainer,
  FormInputConatiner,
  FormInputLabel,
} from "./form-input.styles";

export default function FormInput({ label, ...otherProps }) {
  const id=uuidv4();
  return (
    <GroupContainer>
      <FormInputConatiner id={id} {...otherProps} />
      {label ? <FormInputLabel htmlFor={id}>{label}</FormInputLabel> : null}
    </GroupContainer>
  );
}
