import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "assets/style/types.mainSettingsTemplate";

export const EditorBox: StyledComponent<any, any> = styled.div`
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
  flex-wrap: wrap;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
  background: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorBorder};

  &::-webkit-scrollbar {
    display: none;
  }

  @media all and (max-width: 1023px) {
    justify-content: center;
  }
`;

export const Tool: StyledComponent<any, any> = styled.div`
  width: 20%;
  border: none;
  display: flex;
  min-width: 5rem;
  cursor: pointer;
  padding: 0 1rem;
  font-size: 1.6rem;
  transition: all 0;
  position: relative;
  align-items: center;
  border-radius: 0.6rem;
  justify-content: center;
  margin-right: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
  background: ${({ active, theme }: { active: boolean; theme: MainSettingsTemplate }) => (active ? theme.colorMainBg : "transparent")};

  &::after {
    opacity: 0;
    top: 2.4rem;
    width: 100%;
    content: "";
    z-index: 999;
    height: 0.3rem;
    position: absolute;
    background: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorMainBg};
  }

  @media all and (max-width: 1023px) {
    &:last-of-type {
      margin-left: 0 !important;
    }
  }

  @media all and (min-width: 768px) {
    width: 12.5%;
  }

  @media all and (min-width: 1024px) {
    width: auto;
  }

  &:last-of-type {
    margin-right: 0;
  }

  svg {
    fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLink};
  }

  &:hover {
    background: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorMainBg};

    &::after {
      opacity: 1;
    }

    svg {
      fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};
    }
  }

  &:hover > ul {
    display: flex !important;
  }

  svg {
    height: 2rem;
  }
`;

export const BoxIcon: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
  padding: 0.5rem 0;
  justify-content: center;
`;

export const ToolOptions: StyledComponent<any, any> = styled.ul`
  top: 2.6rem;
  z-index: 99;
  display: none;
  left: -0.1rem;
  flex-wrap: wrap;
  min-width: 15rem;
  position: absolute;
  align-items: center;
  transform: all 0.6s;
  justify-content: center;
  border-top-right-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} 0;
  background: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorMainBg};
  border: 1px solid ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorBorder};
`;

export const Options: StyledComponent<any, any> = styled.div`
  width: 100%;
  font-weight: bold;
  text-align: center;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
  font-size: ${({ type }: any): string => {
    switch (type) {
      case "h1":
        return "3.8rem";
      case "h2":
        return "3.5rem";
      case "h3":
        return "2.8rem";
      case "h4":
        return "2.5rem";
      case "h5":
        return "1.8rem";
      default:
        return "1.5rem";
    }
  }};

  background-color: ${({ active, theme }: { active: boolean; theme: MainSettingsTemplate }) => (active ? theme.colorBorder : "transparent")};
  &:hover {
    background: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorBorder};
  }
`;

export const ContentArea: StyledComponent<any, any> = styled.textarea`
  min-height: 40rem;
  border: none;
  min-width: 100%;
  max-width: 100%;
  font-variant-ligatures: no-common-ligatures;
  white-space: pre-wrap;
  word-break: break-word;
  word-wrap: break-word;

  background-color: transparent;
  color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorText};
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};

  &:focus {
    outline: none;
  }
`;

export const TextArea: StyledComponent<any, any> = styled.text`
  display: none;
`;

export const Preview: StyledComponent<any, any> = styled.div`
  width: 100%;
  display: block;
  position: relative;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  img {
    margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
  }

  ul {
    list-style: disc;
    margin-left: 1.5rem;
  }

  ol {
    display: block;
    margin-left: 2.8rem;
    list-style: decimal-leading-zero;
  }

  img {
    max-width: 100%;
  }

  blockquote {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 0.6rem;
    justify-content: center;
    background-color: #404040;
    padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
    margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} 0;
    border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};

    &::before,
    &::after {
      line-height: 0;
      font-size: 6rem;
      font-weight: bold;
      position: absolute;
    }

    &::before {
      bottom: 4rem;
      content: ",,";
      left: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    }

    &::after {
      top: 3rem;
      content: '"';
      right: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    }

    p {
      margin: 0;
      text-align: center;
    }
  }

  pre {
    p {
      font-size: 1rem;
      font-weight: bold;
      margin-top: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
      color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
      margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    }
    pre {
      margin-top: 0;
      border-radius: 0.6rem;
      border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
      code {
        display: flex !important;
      }
    }
  }
`;
