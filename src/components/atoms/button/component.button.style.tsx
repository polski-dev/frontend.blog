import styled, { css } from "styled-components";
import Link from "next/link";

export const Button = styled.button``;

const buttonwholestyle = css`
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  display: inline-block;
  background-color: ${({ theme }) => theme.colorButtonBg};
  border: 0.1rem solid ${({ theme }) => theme.colorBorder};

  &:hover {
    background-color: ${({ theme }) => theme.colorMainBg};
  }
`;

type ButtonLinkType = {
  active?: boolean;
};

export const ButtonLink = styled.a<ButtonLinkType>`
  ${buttonwholestyle}
  ${({ theme, active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colorLinkActive};
      background-color: ${({ theme }) => theme.colorMainBg};
    `}
`;
