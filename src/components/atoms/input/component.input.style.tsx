import { InputStyledInterface } from "./component.input.type";
import { styleDefault } from "../button/style/component.button.style";
import styled, { css, StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const Label: StyledComponent<any, any> = styled.label`
  width: 100%;
  display: block;
  position: relative;
  margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0;

  ${({ theme, type }: { theme: MainSettingsTemplate; type: string }): any =>
    type === "file" &&
    css`
      display: flex;

      input {
        padding: 0.4rem ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
      }

      &::after {
        content: "+";
        display: flex;
        ${styleDefault};
        position: relative;
        align-items: center;
        justify-content: center;
        margin-left: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
      }

      &:hover {
        &::after {
          color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};
          background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};
        }
      }
    `};
`;

export const Input: StyledComponent<any, any> = styled.input<InputStyledInterface>`
  width: 100%;
  border: none;
  max-width: 100%;
  position: relative;
  border-radius: 0.6rem;
  color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
  border: 1px solid ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBorder : theme.colorBorder)};
  background: ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBg : theme.colorInputBgDark)};

  ${({ type }: any): any =>
    type === "file" &&
    css`
      display: none !important;
    `}

  ::-webkit-file-upload-button {
    display: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => theme.colorText};
    box-shadow: 0 0 0px 1000px ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBg : theme.colorInputBgDark)} inset;
  }

  &:focus {
    outline: none;
  }
`;

export const Span: StyledComponent<any, any> = styled.span`
  width: 100%;
  border: none;
  display: flex;
  max-width: 100%;
  position: relative;
  font-size: 1.5rem;
  border-radius: 0.6rem;
  color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
  border: 1px solid ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBorder : theme.colorBorder)};
  background: ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBg : theme.colorInputBgDark)};
`;
