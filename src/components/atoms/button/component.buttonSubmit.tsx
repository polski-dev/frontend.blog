import { ButtonSubmit } from "./component.button.style";
import { ButtonSubmitType } from "./component.button.type";

export default function ButtonSubmitComponent({ children, title, active, className, onClick }: ButtonSubmitType) {
  return (
    <ButtonSubmit type="submit" title={title} active={active} className={className} onClick={onClick}>
      {children}
    </ButtonSubmit>
  );
}
