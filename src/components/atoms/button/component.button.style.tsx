import { ButtonLinkInType, ButtonSubmitType } from "./component.button.type";
import styled, { css, StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

const styleDefault = css`
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  display: inline-block;
  color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLink};
  background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorButtonBg};
  border: 0.1rem solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};

  &:hover {
    color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};
    background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};
  }
`;

export const ButtonLinkIn: StyledComponent<any, ButtonLinkInType> = styled.a<ButtonLinkInType>`
  ${styleDefault}
  color: ${({ theme, active }: { theme: MainSettingsTemplate; active?: boolean }): string | false | undefined => active && theme.colorLinkActive};
  background-color: ${({ theme, active }: { theme: MainSettingsTemplate; active?: boolean }): string | false | undefined => active && theme.colorMainBg};
`;

export const ButtonSubmit: StyledComponent<any, ButtonSubmitType> = styled.button<ButtonSubmitType>`
  ${styleDefault}
  color: ${({ theme, active }: { theme: MainSettingsTemplate; active?: boolean }): string | false | undefined => active && theme.colorLinkActive};
  background-color: ${({ theme, active }: { theme: MainSettingsTemplate; active?: boolean }): string | false | undefined => active && theme.colorMainBg};
`;
