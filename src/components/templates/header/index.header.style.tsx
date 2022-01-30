import styled from "styled-components";
import Link from "next/link";

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  position: relative;
  padding: ${({ theme }) => theme.break.main} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colorBorder};
`;

export const Logo = styled.a`
  position: relative;
  svg {
    height: 2rem;
    fill: ${({ theme }) => theme.colorLink};
  }
  &:hover {
    svg {
      fill: ${({ theme }) => theme.colorLinkActive};
    }
  }
`;
