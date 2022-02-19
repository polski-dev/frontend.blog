import Link from "next/link";
import { ButtonLinkIn } from "../style/component.button.style";
import { ButtonLinkInType } from "../types/component.button.type";

export default function ButtonInLinkComponent({ children, href, title, active, className, onClick }: ButtonLinkInType) {
  return (
    <Link href={href} passHref>
      <ButtonLinkIn title={title} active={active} className={className} onClick={onClick}>
        {children}
      </ButtonLinkIn>
    </Link>
  );
}
