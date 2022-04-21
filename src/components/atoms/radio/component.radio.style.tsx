import styled, { css, StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const RadioBox: StyledComponent<any, any> = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0;
`;

export const Label: StyledComponent<any, any> = styled.label`
  width: 100%;
  display: block;
  cursor: pointer;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 0.6rem;
  color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLink};
  border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
`;

export const RadioStyled: StyledComponent<any, any> = styled.input`
  display: none;
  &:checked ~ label {
    color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};
    background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};
  }
`;
