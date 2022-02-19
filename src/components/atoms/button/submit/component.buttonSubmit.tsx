import { ButtonSubmit } from "../style/component.button.style";
import { ButtonSubmitType } from "../types/component.button.type";

export default function ButtonSubmitComponent({ children, title, active, className, onClick }: ButtonSubmitType) {
  return (
    <ButtonSubmit type="submit" title={title} active={active} className={className} onClick={onClick}>
      {children}
    </ButtonSubmit>
  );
}
