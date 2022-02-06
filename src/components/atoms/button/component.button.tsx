import React from "react";
import Link from "next/link";

import { ButtonLink } from "./component.button.style";

type ButtonInLinkType = { children: JSX.Element | string; href: string; title: string; active?: boolean; className?: string; onClick?: () => void };

export const ButtonInLink = ({ children, href, title, active, className, onClick }: ButtonInLinkType) => {
  return (
    <Link href={href} passHref>
      <ButtonLink title={title} active={active} className={className} onClick={onClick}>
        {children}
      </ButtonLink>
    </Link>
  );
};
