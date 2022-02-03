import React from "react";
import Link from "next/link";

import { ButtonLink } from "./component.button.style";

type ButtonInLinkType = { children: JSX.Element | string; href: string; title: string };

export const ButtonInLink = ({ children, href, title }: ButtonInLinkType) => {
  return (
    <Link href={href} passHref>
      <ButtonLink title={title}>{children}</ButtonLink>
    </Link>
  );
};
