import { useEffect, useRef, useState } from "react";
import { Label, Input, Span } from "./component.input.style";
import { InputInterface, enumInputType } from "./component.input.type";

export default function InputComponent({ id, name, defaultValue, type, placeholder, pattern, error, register, required, accept, multiple }: InputInterface) {
  const textInput = useRef<any>(null);
  const [nameFile, setNameFile] = useState(placeholder);

  function handleClick() {
    const nameFile: string | null = textInput?.current?.children[0]?.files[0]?.name;
    if (typeof nameFile === "string") setNameFile(nameFile);
  }

  return (
    <Label
      htmlFor={id}
      type={type}
      ref={textInput}
      onChange={() => {
        if (type === "file") handleClick();
      }}
    >
      <Input id={id} name={name} defaultValue={defaultValue} placeholder={placeholder} accept={accept} type={type} error={!!error} {...register(id, { pattern, required })} />
      {type === enumInputType.file && <Span>{nameFile}</Span>}
    </Label>
  );
}
