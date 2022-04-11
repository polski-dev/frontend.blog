import styled, { css, CSSObject, FlattenInterpolation, StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";
import { ButtonLinkInType, ButtonSubmitType, ButtonType } from "../types/component.button.type";

export const styleDefault = css`
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

  svg {
    fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLink};
  }

  &:hover {
    color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};
    background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};

    svg {
      fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};
    }
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

export const Button: StyledComponent<any, ButtonSubmitType> = styled.button<ButtonSubmitType>`
  ${styleDefault}

  color: ${({ theme, active }: { theme: MainSettingsTemplate; active?: boolean }): string | false | undefined => active && theme.colorLinkActive};
  background-color: ${({ theme, active }: { theme: MainSettingsTemplate; active?: boolean }): string | false | undefined => active && theme.colorMainBg};
  ${({ active }: { active?: boolean }) =>
    active &&
    css`
      cursor: no-drop;
    `};

  svg {
    fill: ${({ theme, active }: { theme: MainSettingsTemplate; active?: boolean }): string | false | undefined => active && theme.colorLinkActive} !important;
  }
`;
