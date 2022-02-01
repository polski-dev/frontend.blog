import React from "react";
import Link from "next/link";

import { ButtonLink } from "./component.button.style";

type ButtonInLinkType = { children: any; href: string };

export const ButtonInLink = ({ children, href }: ButtonInLinkType) => {
  return (
    <Link href={href} passHref>
      <ButtonLink>{children}</ButtonLink>
    </Link>
  );
};
