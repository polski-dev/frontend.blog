import { Provider } from "react-redux";
import { store } from "store/store.index";
import settings from "assets/style/settings";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import ProviderMenu from "providers/providers.menu";

type ProviderWrapperType = {
  children: JSX.Element | string;
  session: any;
};

export default function ProviderWrapper({ children, session }: ProviderWrapperType) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ProviderMenu>
          <ThemeProvider theme={settings}>{children}</ThemeProvider>
        </ProviderMenu>
      </Provider>
    </SessionProvider>
  );
}
