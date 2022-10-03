import { styleDefault } from "../button/style/component.button.style";
import styled, { css, StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "styles/types.mainSettingsTemplate";

export const Label: StyledComponent<any, any> = styled.label`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  border-radius: 0.6rem;
  margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0;
  color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
  border: 1px solid ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBorder : theme.colorBorder)};
  background: ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBg : theme.colorInputBgDark)};
`;

export const Input: StyledComponent<any, any> = styled.input`
  width: 14rem;
  border: none;
  font-size: 1.6rem;
  background-color: transparent;
  color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
  margin-left: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};

  &:focus {
    outline: none;
  }
`;

export const Span: StyledComponent<any, any> = styled.span`
  display: flex;
  cursor: pointer;
  font-size: 1.1rem;
  align-items: center;
  border-radius: 0.6rem;
  justify-content: center;
  margin: 0.3rem ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
  background: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorBorder};
  padding: 0.3rem ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};

  &::after {
    content: "";
    width: 0.8rem;
    height: 0.8rem;
    mask-size: cover;
    position: relative;
    mask-position: center;
    display: inline-block;
    mask-repeat: no-repeat;
    margin-left: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    background-color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorLink};
    mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMS40MSAwbC0xLjQxIDEuNDEuNzIuNzIgMS43OCAxLjgxLTEuNzggMS43OC0uNzIuNjkgMS40MSAxLjQ0LjcyLS43MiAxLjgxLTEuODEgMS43OCAxLjgxLjY5LjcyIDEuNDQtMS40NC0uNzItLjY5LTEuODEtMS43OCAxLjgxLTEuODEuNzItLjcyLTEuNDQtMS40MS0uNjkuNzItMS43OCAxLjc4LTEuODEtMS43OC0uNzItLjcyeiIgLz4KPC9zdmc+");
  }

  &:hover {
    &::after {
      background-color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorLinkActive};
    }
  }
`;
