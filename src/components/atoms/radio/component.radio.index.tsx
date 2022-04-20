import React, { useState, useEffect } from "react";
import { RadioBox, Label, RadioStyled } from "./component.radio.style";

export const Radio = ({ name, value, error, register, required }: { name: string; value: string; error: any; register: any; required: boolean }): JSX.Element => {
  const [checkedInput, setCheckedInput] = useState(false);

  return (
    <RadioBox>
      <Label htmlFor={value} checkedInput={checkedInput}>
        {value}
      </Label>
      <RadioStyled
        type="radio"
        id={value}
        name={name}
        value={value}
        {...register(name, { required })}
        onChange={(e: { target: { checked: boolean } }): void => {
          console.log(e.target.value);
          setCheckedInput(e.target.checked);
        }}
      />
    </RadioBox>
  );
};
