import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const Section: StyledComponent<any, any> = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
`;

export const Header: StyledComponent<any, any> = styled.h5`
  width: 100%;
  display: block;
`;

export const Title: StyledComponent<any, any> = styled.h3`
  width: 100%;
  display: block;
  text-align: center;
`;

export const Content: StyledComponent<any, any> = styled.p`
  width: 100%;
  display: flex;
  text-align: center;
  position: relative;
  border-radius: 0.6em;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 23rem);
  margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} 0;
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorPostBg};
`;

export const Description: StyledComponent<any, any> = styled.p`
  width: 100%;
  display: block;
  text-align: center;
`;
