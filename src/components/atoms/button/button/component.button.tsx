import { Button } from "../style/component.button.style";
import { ButtonType } from "../types/component.button.type";

export default function ButtonComponent({ children, title, active, className, onClick, style }: ButtonType) {
  return (
    <Button title={title} active={active} className={className} onClick={onClick} style={style}>
      {children}
    </Button>
  );
}
