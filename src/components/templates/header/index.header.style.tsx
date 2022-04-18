import styled, { css, StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const Header = styled.header`
  width: 100%;
  position: relative;
  padding: ${({ theme }) => theme.break.small} 0;
  background: ${({ theme }) => theme.colorMainBg};
  border-bottom: 1px solid ${({ theme }) => theme.colorBorder};
`;

export const Hambuger = styled.button`
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

  @media all and (min-width: 768px) {
    display: none;
  }

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
  bottom: -0.85rem;
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
    cursor: ${({ active }) => (active ? "no-drop" : "pionier")};
    color: ${({ theme, active }) => (active ? theme.colorLinkActive : theme.colorLink)};
    border-bottom: 1px solid ${({ theme, active }) => (active ? theme.colorLinkActive : theme.colorBorder)};
    padding: ${({ theme }) => theme.break.small} ${({ theme }) => theme.break.main};

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

export const BoxAuthUser = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  position: relative;
`;

export const BoxAuthorAvatar: StyledComponent<any, any> = styled.button`
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
  background-color: ${({ theme, power }: { theme: MainSettingsTemplate; power: boolean }): string => (power ? theme.colorMainBg : theme.colorButtonBg)};

  svg {
    width: 2.2rem;
    height: 2.2rem;
    display: block;
    margin-top: 0.8rem;
    fill: ${({ theme, power }: { theme: MainSettingsTemplate; power: boolean }): string => (power ? theme.colorLinkActive : theme.colorLink)};
  }

  &:hover {
    background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};
    border: 0.1rem solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};

    img {
      opacity: 0.8;
    }

    svg {
      fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};
    }
  }
`;

export const BoxOptionUser = styled.div`
  top: 3.8rem;
  left: -14rem;
  width: 17rem;
  z-index: 9999;
  position: absolute;
  border-radius: 0.6rem;
  flex-direction: column;
  display: ${({ power }: { power: boolean }): string => (power ? "block" : "none")};
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};
  border: 0.1rem solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};

  a,
  button {
    width: 100%;
    border: none;
    display: block;
    text-align: right;
    font-size: 1.2rem;
    background-color: transparent;

    color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLink};
    padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};

    &:hover {
      color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};
    }
  }
`;

export const BoxOptionUserHeader = styled.p`
  font-size: 1.2rem;
  padding-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};

  &:after {
    content: "";
    width: 100%;
    height: 0.1rem;
    display: block;
    margin-top: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
  }
`;
