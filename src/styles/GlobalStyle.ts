import { Theme } from "theme";
import * as styled from "styled-components";

const GlobalStyle = styled.createGlobalStyle<{
  theme: Theme;
}>`
  ${({ theme: { colors, fontSizes, fontWeights } }) => styled.css`
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
      font-style: normal;
      color: ${colors.white};
      font-size: ${fontSizes.fs16};
      background-color: ${colors.gray};
      font-weight: ${fontWeights.normal};
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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

    input,
    textarea {
      font-size: 1.6rem;
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

    h1 {
      font-size: 3.8rem;
    }

    h2 {
      font-size: 3.5rem;
    }

    h3 {
      font-size: 2.8rem;
    }

    h4 {
      font-size: 2.5rem;
    }

    h5 {
      font-size: 1.8rem;
    }

    h6 {
      font-size: 1.5rem;
    }

    a {
      opacity: 1;
      transition: all 0.3s;
      text-decoration: none;
      color: ${colors.white};

      svg {
        transition: all 0.3s;
        fill: ${colors.white};
      }

      &:hover {
        color: ${colors.blue};

        svg {
          fill: ${colors.blue};
        }
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
  `}
`;

export default GlobalStyle;
