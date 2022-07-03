import Head from "next/head";
import Header from "components/templates/header/index.header";
import Footer from "components/templates/footer/index.footer";
import PopupWithAllowCookies from "components/templates/popupWithAllowCookies/component.popupWithAllowCookies.index";

export default function Laout({ children }: any) {
  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4518094843351143" type="module" />
      </Head>
      <Header />
      {children}
      <Footer />
      <PopupWithAllowCookies />
    </>
  );
}
