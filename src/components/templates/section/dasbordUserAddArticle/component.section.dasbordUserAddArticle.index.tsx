import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import "@uiw/react-markdown-preview/markdown.css";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Header, Title, Form } from "./component.section.dasbordUserAddArticle.style";
import { Input, TextArea, CheckBox, Radio, enumInputType } from "components/molecules/form/component.form.index";

const MDEditor = dynamic<any>((): any => import("@uiw/react-md-editor").then((mod) => mod.default), { ssr: false });

export default function SectionDasbordAddArticle({ data: { title } }: { data: { title: string } }) {
  const { data: session, status } = useSession();
  const [type, setType] = useState("a");
  const [addArticle, setAddArticle] = useState(true);
  const [value, setValue] = useState("**Dodaj treść artykułu!!**");

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(watch().typ);
  return (
    <Section>
      <Header>{title}</Header>
      <Form>
        <Container className="container">
          <Row>
            <Col xs={12}>
              <Title>Co dodajesz?</Title>
            </Col>
            <Col xs={6}>
              <Radio name="typ" value="artykuł" error={errors.title} register={register} required checked />
            </Col>
            <Col xs={6}>
              <Radio name="typ" value="video" error={errors.title} register={register} required />
            </Col>
            <Col xs={12}>
              <Input id="tytuł wpisu" name="title" type={enumInputType.text} error={errors.title} placeholder="Tytuł wpisu" defaultValue={undefined} register={register} required />
            </Col>
            <Col xs={12}>
              <Input id="cover" name="cover" type={enumInputType.file} error={errors.avatar} placeholder="Dodaj okładkę" register={register} accept="image/png, image/jpeg" required />
            </Col>
            {watch().typ === "video" && (
              <Col xs={12}>
                <Input id="youtube" name="youtube" type={enumInputType.text} error={errors.title} placeholder="YouTube url" defaultValue={undefined} register={register} required />
              </Col>
            )}
            <Col xs={12}>
              <MDEditor value={value} onChange={setValue} />
            </Col>
            <Col xs={12}>
              <Input id="tagi" name="tagi" type={enumInputType.text} error={errors.title} placeholder="Tagi" defaultValue={undefined} register={register} required />
            </Col>
            <Col xs={12}>
              <ButtonSubmit title="dodaj">Dodaj</ButtonSubmit>
            </Col>
          </Row>
        </Container>
      </Form>
    </Section>
  );
}
