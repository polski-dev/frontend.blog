import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const Section: StyledComponent<any, any> = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 18rem);
  margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big} 0;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorPostBg};
`;

export const Title: StyledComponent<any, any> = styled.h3`
  width: 100%;
  display: block;
  text-align: center;
`;
export const Description: StyledComponent<any, any> = styled.p`
  width: 100%;
  display: block;
  text-align: center;
`;
