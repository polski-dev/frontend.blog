import { InputStyledInterface } from "./component.textarea.type";
import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "styles/types.mainSettingsTemplate";

export const Label: StyledComponent<any, any> = styled.label`
  width: 100%;
  display: block;
  position: relative;
  margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0;
`;

export const TextAreaStyled: StyledComponent<any, any> = styled.textarea<InputStyledInterface>`
  width: 100%;
  border: none;
  height: 8rem;
  max-width: 100%;
  font-size: 1.5rem;
  border-radius: 0.6rem;

  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
  color: ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorLink : theme.colorText)};
  background: ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBg : theme.colorInputBgDark)};
  border: 1px solid ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBorder : theme.colorBorder)};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => theme.colorText};
    box-shadow: 0 0 0px 1000px ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBg : theme.colorInputBgDark)} inset;
  }

  &::placeholder {
    color: ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorLink : theme.colorText)};
  }

  &:focus {
    outline: none;
  }
`;
