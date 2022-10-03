import Laout from "layout/laout.index";
import type { AppProps } from "next/app";
import GlobalStyle from "styles/GlobalStyle";
import ProviderWrapper from "providers/providers.wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProviderWrapper>
      <GlobalStyle />
      <Laout>
        <Component {...pageProps} />
      </Laout>
    </ProviderWrapper>
  );
}

export default MyApp;
