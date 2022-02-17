import { InputInterface } from "./component.input.type";
import { Label, Input } from "./component.input.style";

export default function InputComponent({ id, name, defaultValue, type, placeholder, pattern, error, register, required }: InputInterface) {
  return (
    <Label htmlFor={id}>
      <Input id={id} name={name} defaultValue={defaultValue} placeholder={placeholder} type={type} error={!!error} {...register(id, { pattern, required })} />
    </Label>
  );
}
