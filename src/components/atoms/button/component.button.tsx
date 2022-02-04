import React from "react";
import Link from "next/link";

import { ButtonLink } from "./component.button.style";

type ButtonInLinkType = { children: JSX.Element | string; href: string; title: string; active?: boolean; className?: string };

export const ButtonInLink = ({ children, href, title, active, className }: ButtonInLinkType) => {
  return (
    <Link href={href} passHref>
      <ButtonLink title={title} active={active} className={className}>
        {children}
      </ButtonLink>
    </Link>
  );
};
