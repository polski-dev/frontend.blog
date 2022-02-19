import React, { useState } from "react";
import { Label, CheckBoxClassicText, CheckBoxStyled, CheckBoxClassicRoad, CheckBoxClassicFace } from "./component.checkbox.style";

export const CheckBox = ({ id, label, error, register, required }: { id: string; label: string; error: any; register: any; required: boolean }): JSX.Element => {
  const [checkedInput, setCheckedInput] = useState(false);

  return (
    <Label htmlFor={id} checkedInput={checkedInput} {...register(id, { required })}>
      <CheckBoxStyled id={id} name={id} type="checkbox" onChange={(e: { target: { checked: boolean } }): void => setCheckedInput(e.target.checked)} />
      <CheckBoxClassicRoad checkedInput={checkedInput} error={!!error}>
        <CheckBoxClassicFace checkedInput={checkedInput} error={!!error} />
      </CheckBoxClassicRoad>
      <CheckBoxClassicText>{label}</CheckBoxClassicText>
    </Label>
  );
};
