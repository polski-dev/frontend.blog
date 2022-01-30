import * as styled from "styled-components";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

type GlobalStyleProps = {
  theme: MainSettingsTemplate;
};

const GlobalStyle = styled.createGlobalStyle<GlobalStyleProps>`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1.2;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: normal;
    color: ${({ theme }) => theme.colorText};
    background-color: ${({ theme }) => theme.colorMainBg};
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
      Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b,
  a,
  span,
  strong {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b,
  strong {
    font-weight: bold;
  }

  a {
    opacity: 1;
    transition: all 0.3s;
    text-decoration: none;
    color: ${({ theme }) => theme.colorLink};

    &:hover {
      color: ${({ theme }) => theme.colorLinkActive};
    }
  }

  svg {
    transition: all 0.3s;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  section {
    width: 100%;
    position: relative;
  }
`;

export default GlobalStyle;
