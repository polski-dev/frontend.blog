import { Session } from "inspector";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Input, TextArea, CheckBox, enumInputType } from "components/molecules/form/component.form.index";
import { Section, Header, Title } from "./component.section.dasbordUserAddArticle.style";

export default function SectionDasbordAddArticle({ data: { title } }: { data: { title: string } }) {
  const { data: session, status } = useSession();
  const [type, setType] = useState("a");

  const [addArticle, setAddArticle] = useState(true);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Section>
      <Header>{title}</Header>
      <Container className="container">
        <Row>
          <Col xs={12}>
            <Title>typ wpisu</Title>
          </Col>
          <Col xs={12}>
            <Input id="title" name="title" type={enumInputType.text} error={errors.title} placeholder="Tytuł wpisu" defaultValue={undefined} register={register} required />
          </Col>
          <Col xs={12}>
            <Title>tytuł wpisu</Title>
          </Col>
          <Col xs={12}>
            <Input id="title" name="title" type={enumInputType.text} error={errors.title} placeholder="Tytuł wpisu" defaultValue={undefined} register={register} required />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
