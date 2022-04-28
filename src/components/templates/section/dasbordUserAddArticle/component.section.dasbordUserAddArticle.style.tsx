import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const Section: StyledComponent<any, any> = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big} 0;

  .container {
    border-radius: 0.6em;
    padding-top: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
    margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} 0;
    background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorPostBg};
  }

  .test {
    border: 1px solid red;
    &:focus {
      outline: none;
    }
  }
`;

export const Header: StyledComponent<any, any> = styled.h5`
  width: 100%;
  display: block;
`;

export const Title: StyledComponent<any, any> = styled.h6`
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} 0 ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0;
`;

export const Form: StyledComponent<any, any> = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Preview: StyledComponent<any, any> = styled.div`
  width: 100%;
  height: 28rem;
  border-radius: 0.6rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
