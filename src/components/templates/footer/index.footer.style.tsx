import { Mode } from "fs";
import styled, { css } from "styled-components";

export const Footer = styled.header`
  width: 100%;
  display: flex;
  position: relative;
  padding: ${({ theme }) => theme.break.small} 0;
  background-color: ${({ theme }) => theme.colorFooterBg};
`;

export const Logo = styled.div`
  order: 0;
  flex: 50%;
  display: flex;
  max-width: 50%;
  cursor: pointer;
  width: max-content;
  position: relative;
  align-items: center;
  padding: 0 ${({ theme }) => theme.break.main};

  a {
    display: flex;
  }

  svg {
    height: 1.7rem;
    fill: ${({ theme }) => theme.colorLink};

    @media all and (min-width: 768px) {
      height: 2rem;
    }
  }
  &:hover {
    svg {
      fill: ${({ theme }) => theme.colorLinkActive};
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  margin-left: auto;
  width: max-content;
  padding: 0 ${({ theme }) => theme.break.main};
`;

export const Item = styled.li`
  a {
    display: block;
    font-size: 1.2rem;
    white-space: nowrap;
    text-decoration: solid;
    padding: ${({ theme }) => theme.break.small} ${({ theme }) => theme.break.main};
  }
`;
