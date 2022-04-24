import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const Editor: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 0.6rem;
  margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0;
  color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
  // padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
  border: 1px solid ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBorder : theme.colorBorder)};
  background: ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBg : theme.colorInputBgDark)};
`;

export const ToolsList: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
  background: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorBorder};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tool: StyledComponent<any, any> = styled.div`
  border: none;
  display: flex;
  min-width: 5rem;
  cursor: pointer;
  font-size: 1.6rem;
  align-items: center;
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 0.6rem;
  justify-content: center;
  background: transparent;
  margin-right: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};

  &:last-of-type {
    margin-right: 0;
  }

  svg {
    fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLink};
  }

  &:hover {
    background: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorMainBg};

    svg {
      fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};
    }
  }

  svg {
    height: 2rem;
  }
`;

export const BreakLine: StyledComponent<any, any> = styled.div`
  height: 3rem;
  display: block;
  min-width: 0.2rem;
  background: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorMainBg};
  margin-right: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
`;

export const TextArea: StyledComponent<any, any> = styled.textarea`
  min-height: 40rem;
  border: none;
  min-width: 100%;
  max-width: 100%;
  background-color: transparent;
  color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorText};
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};

  &:focus {
    outline: none;
  }
`;

export const Preview: StyledComponent<any, any> = styled.div`
  display: none;
`;
