import styled, { css, createGlobalStyle, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

interface GlobalStyleType {
  power: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleType>`

${({ power }: { power: boolean }) =>
  power &&
  css`
    body {
      overflow: hidden;
    }
  `}
  
`;

export const PopupWrapper = styled.div<GlobalStyleType>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  position: fixed;
  align-items: center;
  justify-content: center;
  display: ${({ power }: { power: boolean }) => (power ? "flex" : "none")};
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};
`;

export const Popup = styled.div`
  width: 80%;
  height: auto;
`;

export const Header = styled.h1`
  display: block;
  text-align: center;
  padding-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
`;

export const Info = styled.div`
  display: flex;
  min-height: 6rem;
  align-items: center;
  border-radius: 0.6rem;
  justify-content: center;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
  background-color: ${({ theme, status }: { theme: MainSettingsTemplate; status: boolean | null }): string => (!!status ? theme.colorSuccessBg : theme.colorDangerBg)};
  border: 0.1rem solid ${({ theme, status }: { theme: MainSettingsTemplate; status: boolean | null }): string => (!!status ? theme.colorSuccessBg : theme.colorDangerBg)};
`;
