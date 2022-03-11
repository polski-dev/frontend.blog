import React, { useState } from "react";
import { InputInterface } from "./component.textarea.type";
import { Label, TextAreaStyled } from "./component.textarea.styled";

export const TextArea = ({ id, name, defaultValue, error, register, required, placeholder }: InputInterface): JSX.Element => {
  return (
    <Label htmlFor={id}>
      <TextAreaStyled id={id} name={name} defaultValue={defaultValue} error={!!error} {...register(id, { required })} placeholder={placeholder} />
    </Label>
  );
};
