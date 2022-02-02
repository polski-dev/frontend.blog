import type { AppProps } from "next/app";
import settings from "assets/style/settings";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "assets/style/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={settings}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
