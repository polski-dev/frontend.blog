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

export const Title: StyledComponent<any, any> = styled.h6`
  width: 100%;
  display: block;
  text-align: left;
  padding-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
`;

export const Content: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  border-radius: 0.6em;
  margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} 0;
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorPostBg};
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big} ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
`;

export const Description: StyledComponent<any, any> = styled.p`
  width: 100%;
  display: block;
  text-align: center;
`;

export const AuthorAvatr: StyledComponent<any, any> = styled.div`
  width: 15rem;
  height: 15rem;
  display: block;
  overflow: hidden;
  text-align: center;
  border-radius: 100%;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
  margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
`;

export const Form: StyledComponent<any, any> = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};

  &.avatarData {
    width: 15rem;
  }

  &.publicData {
    width: calc(100% - 18rem);
    padding-left: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
  }

  &.privateData {
    width: 100%;

    button {
      margin-top: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    }
  }
`;

export const InfoInput = styled.div`
  font-size: 1rem;
  text-align: left;
  padding-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
`;

export const BoxInfo = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  height: 3.2rem;
  position: relative;
  text-align: center;
  align-items: center;
  border-radius: 0.6rem;
  justify-content: center;
  margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorSuccessBg};
  border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorSuccessBorder};
`;
