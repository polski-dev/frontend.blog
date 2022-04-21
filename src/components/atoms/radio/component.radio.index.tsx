import React, { useState, useEffect } from "react";
import { RadioBox, Label, RadioStyled } from "./component.radio.style";

export const Radio = ({ name, value, checked = false, error, register, required }: { name: string; value: string; checked?: boolean; error: any; register: any; required: boolean }): JSX.Element => {
  const [checkedInput, setCheckedInput] = useState(false);

  return (
    <RadioBox>
      <RadioStyled type="radio" id={value} name={name} value={value} {...register(name, { required })} defaultChecked={checked} />
      <Label htmlFor={value} checkedInput={checkedInput}>
        {value}
      </Label>
    </RadioBox>
  );
};
