import styled, { StyledComponent, ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "styles/types.mainSettingsTemplate";

export const Section: StyledComponent<any, any> = styled.section`
  width: 100%;
  display: block;
  position: relative;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big} 0;

  .title {
    padding-left: 0;
    padding-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
  }

  .text {
    padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big} ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
    background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorButtonBg};
    border-radius: 0.6rem;

    min-height: 81vh;
    margin-bottom: 3rem;

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ul,
    ol,
    img {
      margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
    }

    img {
      width: 100%;
      display: block;
    }

    a {
      font-weight: bold;
      color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActive};

      &:hover {
        color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLink};
      }
    }

    ul {
      list-style: disc;
      margin-left: 3rem;
      li {
        padding: 0.3rem 0;
      }
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

    .tableBox {
      width: 100%;
      display: block;
      overflow-x: auto;
      position: relative;
      margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big} 0;
    }

    table,
    th,
    td {
      border-collapse: collapse;
      border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
    }
    th,
    td {
      text-align: left;
      padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    }
    th {
      background-color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorMainBg};
    }
  }
`;
