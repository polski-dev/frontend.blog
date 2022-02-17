import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const Section: StyledComponent<any, any> = styled.section`
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big} 0;
`;

export const BoxContent: StyledComponent<any, any> = styled.div`
  display: flex;
  border-radius: 0.6rem;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 22.5rem);
  margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} 0;
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorPostBg};
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big} ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
`;

export const BoxInfo = styled.div`
  width: 100%;
  display: block;
  margin: 0 auto;
  position: relative;
  text-align: center;
  border-radius: 0.6rem;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorSuccessBg};
  border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorSuccessBorder};

  @media all and (min-width: 768px) {
    max-width: 80rem;
  }
`;

export const BoxError = styled.div`
  width: 100%;
  display: block;
  margin: 0 auto;
  position: relative;
  text-align: center;
  border-radius: 0.6rem;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorDangerBg};
  border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorDangerBorder};

  @media all and (min-width: 768px) {
    max-width: 80rem;
  }
`;
