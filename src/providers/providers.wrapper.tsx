import React from "react";
import { Provider } from "react-redux";
import { store } from "store/store.index";
import settings from "assets/style/settings";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import ProviderMenu from "providers/providers.menu";

interface ProviderWrapperType {
  session: any;
  children?: JSX.Element | JSX.Element[];
}

const ProviderWrapper: React.FC<any> = ({ children, session }: ProviderWrapperType) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ProviderMenu>
          <ThemeProvider theme={settings}>{children}</ThemeProvider>
        </ProviderMenu>
      </Provider>
    </SessionProvider>
  );
};

export default ProviderWrapper;
