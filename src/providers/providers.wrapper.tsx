import { Provider } from "react-redux";
import { store } from "store/store.index";
import settings from "assets/style/settings";
import { ThemeProvider } from "styled-components";
import ProviderMenu from "providers/providers.menu";
import ProviderSearch from "providers/providers.search";

type ProviderWrapperType = {
  children: JSX.Element | string;
};

export default function ProviderWrapper({ children }: ProviderWrapperType) {
  return (
    <Provider store={store}>
      <ProviderSearch>
        <ProviderMenu>
          <ThemeProvider theme={settings}>{children}</ThemeProvider>
        </ProviderMenu>
      </ProviderSearch>
    </Provider>
  );
}
