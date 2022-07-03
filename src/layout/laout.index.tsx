import Script from "next/script";
import Header from "components/templates/header/index.header";
import Footer from "components/templates/footer/index.footer";
import PopupWithAllowCookies from "components/templates/popupWithAllowCookies/component.popupWithAllowCookies.index";

export default function Laout({ children }: any): JSX.Element {
  return (
    <>
      <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4518094843351143" strategy="afterInteractive" />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-XKSJ3VXXQW" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XKSJ3VXXQW');`}
      </Script>

      <Header />
      {children}
      <Footer />
      <PopupWithAllowCookies />
    </>
  );
}
