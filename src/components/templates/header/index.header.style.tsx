import { Mode } from "fs";
import styled, { css } from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: relative;
  padding: ${({ theme }) => theme.break.small} 0;
  background: ${({ theme }) => theme.colorMainBg};
  border-bottom: 1px solid ${({ theme }) => theme.colorBorder};
`;

type HambugerType = {
  mode: string;
};

export const Hambuger = styled.button<HambugerType>`
  padding: 0;
  width: 2.5rem;
  height: 2rem;
  border: none;
  display: flex;
  cursor: pointer;
  position: relative;
  margin-top: 0.5rem;
  flex-direction: column;
  background-color: transparent;
  justify-content: space-between;
  margin-left: ${({ theme }) => theme.break.main};

  ${({ mode }) =>
    mode !== "hide" &&
    css`
      @media all and (min-width: 768px) {
        display: none;
      }
    `}

  span {
    left: 0;
    width: 100%;
    height: 0.2rem;
    transition: all 0.3s;
    background-color: ${({ theme }) => theme.colorLink};
  }

  &:hover {
    span {
      background-color: ${({ theme }) => theme.colorLinkActive};

      &:nth-child(1) {
        animation-duration: 2s;
        animation-name: hambugerFirstLine;
        animation-iteration-count: infinite;

        @keyframes hambugerFirstLine {
          0% {
            width: 100%;
          }
          25% {
            width: 10%;
          }
          50% {
            width: 100%;
          }
          75% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
      }
      &:nth-child(2) {
        animation-duration: 1.3s;
        animation-name: hambugerSecondLine;
        animation-iteration-count: infinite;

        @keyframes hambugerSecondLine {
          0% {
            width: 100%;
          }
          25% {
            width: 20%;
          }
          50% {
            width: 100%;
          }
          75% {
            width: 50%;
          }
          100% {
            width: 100%;
          }
        }
      }
      &:nth-child(3) {
        animation-duration: 1.3s;
        animation-name: hambugerThirdLine;
        animation-iteration-count: infinite;

        @keyframes hambugerThirdLine {
          0% {
            width: 100%;
          }
          25% {
            width: 10%;
          }
          50% {
            width: 100%;
          }
          75% {
            width: 90%;
          }
          100% {
            width: 100%;
          }
        }
      }
    }
  }
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

  @media all and (min-width: 768px) {
    flex: auto;
    order: unset;
    max-width: max-content;
  }

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

export const SerachBox = styled.div`
  order: 2;
  width: 100%;
  position: relative;
  margin: ${({ theme }) => theme.break.main};

  @media all and (min-width: 768px) {
    margin: 0 0;
    flex: 400px;
    width: 400px;
    order: unset;
  }
`;

export const UserPanelBox = styled.div`
  order: 0;
  display: flex;
  margin-left: auto;
  flex: calc(50% - 5rem);
  justify-content: flex-end;
  padding: 0 ${({ theme }) => theme.break.main};

  @media all and (min-width: 768px) {
    flex: auto;
    order: unset;
    margin-left: 0;
  }
`;

export const Menu = styled.ul`
  order: 3;
  flex: 100%;
  width: 100%;
  display: flex;
  max-width: 100%;
  bottom: -0.77rem;
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-top: ${({ theme }) => theme.break.big};

  &::-webkit-scrollbar {
    display: none;
  }

  @media all and (min-width: 768px) {
    order: 1;
    flex: auto;
    padding-top: 0;
    overflow-y: auto;
    margin-left: 19.5rem;
  }
`;

type ItemType = {
  active: boolean;
};

export const Item = styled.li<ItemType>`
  a {
    display: block;
    font-size: 1.2rem;
    white-space: nowrap;
    text-decoration: solid;
    cursor: ${({ theme, active }) => (active ? "no-drop" : "pionier")};
    padding: ${({ theme }) => theme.break.small} ${({ theme }) => theme.break.main};
    color: ${({ theme, active }) => (active ? theme.colorLinkActive : theme.colorLink)};
    border-bottom: 1px solid ${({ theme, active }) => (active ? theme.colorLinkActive : theme.colorBorder)};

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colorLinkActive};
    }

    svg {
      top: 0.1rem;
      height: 1.2rem;
      position: relative;
      margin-right: 0.3rem;
      fill: ${({ theme, active }) => (active ? theme.colorLinkActive : theme.colorLink)};
    }
  }
`;
