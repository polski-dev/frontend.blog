import styled, { ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const Label = styled.label`
  width: 100%;
  display: block;
  position: relative;
  margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0;
`;

export const TextAreaStyled = styled.textarea`
  width: 100%;
  border: none;
  height: 10rem;
  max-width: 100%;
  font-size: 1.5rem;
  border-radius: 0.6rem;
  color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
  border: 1px solid ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBorder : theme.colorBorder)};
  background: ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBg : theme.colorInputBgDark)};

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
