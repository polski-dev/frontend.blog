import { Section } from "./component.section.text.style";
import { Container, Row, Col } from "components/orgamis/flexboxgrid";

export default function SectionText({ children, data }: { children?: JSX.Element | JSX.Element[]; data: { title: string } }): JSX.Element {
  return (
    <Section>
      <Container>
        <Row>
          {data?.title && (
            <Col xs={12} className="title">
              <h5>{data.title}</h5>
            </Col>
          )}
          <Col xs={12} className="text">
            {children}
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
