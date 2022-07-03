import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { Popup } from "./component.popupWithAllowCookies.style";
import { Container, Row, Col } from "components/orgamis/flexboxgrid";
import { Button, ButtonLinkIn } from "components/atoms/button/component.button.index";

export default function PopupWithAllowCookies() {
  const [agreement, setAgreement] = useState(true);

  const addAllow = useCallback(() => {
    const localStorage = window.localStorage;
    localStorage?.setItem("allowCookies", "true");
    setAgreement(true);
  }, []);

  useEffect(() => {
    const localStorage = window.localStorage;
    const allowCookies: string | null = localStorage?.getItem("allowCookies");
    if (!allowCookies) setAgreement(false);
  }, []);

  return (
    <Popup style={{ display: agreement ? "none" : "block" }}>
      <Container>
        <Row>
          <Col xs={12} lg={10} style={{ display: "flex", alignItems: "center" }}>
            <p>
              Stosujemy pliki cookies, aby ułatwić przeglądanie naszego serwisu i dostosowanie prezentowanych treści do Twoich indywidualnych potrzeb. Akceptując tę ​​wiadomość wyrażasz zgodę na używanie tych plików i zapisywanie ich na Twoim urządzeniu. Zgodę możesz wycofać, dokonując zmian w
              ustawieniach swojej przeglądarki. Więcej informacji można znaleźć w naszej <Link href="/privacy-policy">Polityce prywatności</Link>
            </p>
          </Col>
          <Col xs={12} lg={2}>
            <Button title="Akceptuje" onClick={() => addAllow()}>
              AKCEPTUJE
            </Button>
            <ButtonLinkIn title="Nie akceptuje" href="https://www.google.com">
              Nie akceptuje
            </ButtonLinkIn>
          </Col>
        </Row>
      </Container>
    </Popup>
  );
}
