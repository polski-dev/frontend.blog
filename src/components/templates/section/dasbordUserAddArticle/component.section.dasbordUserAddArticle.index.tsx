import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import "@uiw/react-markdown-preview/markdown.css";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Header, Title, Form, Preview } from "./component.section.dasbordUserAddArticle.style";
import { Input, Radio, InputForTags, enumInputType } from "components/molecules/form/component.form.index";

const MDEditor = dynamic<any>((): any => import("@uiw/react-md-editor").then((mod) => mod.default), { ssr: false });

export default function SectionDasbordAddArticle({ data: { title } }: { data: { title: string } }) {
  const { data: session, status } = useSession();
  const [preview, setPreview] = useState("");
  const [valueDescription, setValueDescription] = useState("**Dodaj treść artykułu!!**");

  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const cover = watch("cover");

  useEffect(() => {
    if (!!cover?.length) {
      const reader = new FileReader();
      reader.addEventListener("load", () => typeof reader.result === "string" && setPreview(reader.result), false);
      reader.readAsDataURL(cover[0]);
    }
  }, [cover]);

  return (
    <Section>
      <Header>{title}</Header>
      <Form>
        <Container className="container">
          <Row>
            <Col xs={12}>
              <Title>Co dodajesz?</Title>
            </Col>
            <Col xs={12}></Col>
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
              {!!preview.length && <Preview style={{ backgroundImage: `url(${preview})` }} />}
              <Input id="cover" name="cover" type={enumInputType.file} error={errors.avatar} placeholder="Dodaj okładkę" register={register} accept="image/png, image/jpeg" required />
            </Col>

            {watch().typ === "video" && (
              <Col xs={12}>
                <Input id="youtube" name="youtube" type={enumInputType.text} error={errors.title} placeholder="YouTube url" defaultValue={undefined} register={register} required={watch().typ === "video"} />
              </Col>
            )}

            <Col xs={12}>
              <MDEditor value={valueDescription} onChange={setValueDescription} />
            </Col>
            <Col xs={12}>
              <InputForTags setValue={setValue} id="tags" name="tags" error={errors.tags} placeholder="Dodaj tagi..." defaultValue={undefined} register={register} required />
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
