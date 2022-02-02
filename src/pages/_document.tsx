import Laout from "layout/laout.index";
import settings from "assets/style/settings";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "assets/style/GlobalStyle";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ThemeProvider theme={settings}>
            <GlobalStyle />
            <Laout>
              <Main />
              <NextScript />
            </Laout>
          </ThemeProvider>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
