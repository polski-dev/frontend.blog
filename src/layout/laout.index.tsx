import Header from "components/templates/header/index.header";

export default function Laout({ children }: any) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
