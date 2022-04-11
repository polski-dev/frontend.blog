import { Label, Input } from "./component.input.style";
import { InputInterface, enumInputType } from "./component.input.type";

export default function InputComponent({ id, name, defaultValue, type, placeholder, pattern, error, register, required, accept, multiple }: InputInterface) {
  return (
    <Label htmlFor={id} file={type === enumInputType.file ? true : false}>
      <Input id={id} name={name} defaultValue={defaultValue} placeholder={placeholder} accept={accept} type={type} error={!!error} {...register(id, { pattern, required })} />
    </Label>
  );
}
