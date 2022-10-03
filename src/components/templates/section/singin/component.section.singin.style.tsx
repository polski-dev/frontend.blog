import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "styles/types.mainSettingsTemplate";

export const Section: StyledComponent<any, any> = styled.section`
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big} 0;
`;

export const BoxContent: StyledComponent<any, any> = styled.div`
  border-radius: 0.6rem;
  margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} 0;
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorPostBg};
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big} ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
`;

export const BoxAuth: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 41.5rem);

  @media all and (min-width: 768px) {
    min-height: calc(100vh - 29.3rem);
  }
`;

export const Title: StyledComponent<any, any> = styled.h3`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.6rem;
  align-items: center;
  white-space: nowrap;
  justify-content: center;

  @media all and (min-width: 768px) {
    font-size: 2.8rem;
  }

  svg {
    height: 1.6rem;
    fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorText};
    margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};

    @media all and (min-width: 768px) {
      height: 2.4rem;
    }
  }
`;

export const Description: StyledComponent<any, any> = styled.p`
  width: 100%;
  display: block;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};

  @media all and (min-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
  }
`;

export const BoxErrorInfo = styled.div`
  width: 100%;
  display: block;
  margin: 0 auto;
  font-size: 1.2rem;
  position: relative;
  text-align: center;
  border-radius: 0.6rem;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
  background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorDangerBg};
  border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorDangerBorder};

  @media all and (min-width: 768px) {
    max-width: 40rem;
  }
`;

export const BoxOption: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 40rem;
  flex-direction: column;

  a,
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0;

    svg {
      height: 1.5rem;
      position: relative;
      margin-right: 1rem;
    }
  }
`;

export const BoxRegistrationInfo: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0;

  @media all and (min-width: 768px) {
    max-width: 40rem;
    white-space: nowrap;
  }

  span {
    min-width: 16rem;
    position: relative;
    padding: 0 ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};

    @media all and (min-width: 768px) {
      min-width: auto;
      padding: 0 ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
    }
  }

  a {
    padding-left: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
  }

  &::before,
  ::after {
    content: "";
    top: 0.9rem;
    width: 100%;
    height: 0.1rem;
    position: relative;
    display: inline-block;
    background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`;
