import { Provider } from "react-redux";
import Laout from "layout/laout.index";
import type { AppProps } from "next/app";
import { store } from "store/store.index";
import settings from "assets/style/settings";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "assets/style/GlobalStyle";
import ProviderMenu from "providers/providers.menu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ProviderMenu>
        <ThemeProvider theme={settings}>
          <GlobalStyle />
          <Laout>
            <Component {...pageProps} />
          </Laout>
        </ThemeProvider>
      </ProviderMenu>
    </Provider>
  );
}

export default MyApp;
