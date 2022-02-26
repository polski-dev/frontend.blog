import React, { useState } from "react";
import { Label, TextAreaStyled } from "./index.textarea.styled";

export const TextArea = ({ id, name, defaultValue, pattern, error, register, required }: any): JSX.Element => {
  return (
    <Label htmlFor={id}>
      <TextAreaStyled id={id} name={name} defaultValue={defaultValue} error={!!error} {...register(id, { pattern, required })} />
    </Label>
  );
};
