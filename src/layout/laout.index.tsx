import Header from "components/templates/header/index.header";
import Footer from "components/templates/footer/index.footer";

export default function Laout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
