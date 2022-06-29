import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import React, { useEffect, useState, useMemo } from "react";
import Popup from "components/atoms/popup/component.popup.index";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import SimpleMDEComponent from "components/atoms/simpleMDE/component.simpleMDE.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { articeAdd, ArticeAddType } from "utils/database/article/database.artice.index";
import { Section, Header, Title, Form, Preview } from "./component.section.dasbordUserAddArticle.style";
import { Input, Radio, InputForTags, enumInputType } from "components/molecules/form/component.form.index";

export default function SectionDasbordAddArticle({ data: { title } }: { data: { title: string } }) {
  const { data: session } = useSession();
  const [preview, setPreview] = useState("");
  const [powerPopup, setPowerPopup] = useState(false);
  const [addArticleStatus, setAddArticleStatus] = useState("pending");

  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
    };
  }, []);

  const {
    reset,
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
      <Form
        onSubmit={handleSubmit(async (data) => {
          const { cover, content = "", tags = [], type = "article", title = "", youtube = "" }: { cover?: FileList | undefined; content?: string; tags?: string[]; type?: string; title?: string; youtube?: string } = data;
          if (!session) return alert("zaloguj się !");
          else if (!content.length) return alert("Dodaj opis artykułu");
          else if (!cover?.length) return alert("Dodaj okładkę artykułu");
          else if (!tags || !tags.length) return alert("Dodaj minimum 1 tag");
          else if (type === "video" && !youtube) return alert("Dodaj link do video na youtube");

          setPowerPopup(true);
          const file: File = cover[0];
          const addArticle: ArticeAddType = await articeAdd({ file, content, tags: tags.toString(), type, title, youtube, authorization: `Bearer ${session?.jwt}` });

          if (addArticle.data?.id) {
            reset();
            setAddArticleStatus("resolved");
          } else setAddArticleStatus("rejected");

          setTimeout(() => {
            setPowerPopup(false);
            setAddArticleStatus("pending");
          }, 5000);
        })}
      >
        <Container className="container">
          <Row>
            <Col xs={12}>
              <Title>Co dodajesz?</Title>
            </Col>
            <Col xs={12}></Col>
            <Col xs={6}>
              <Radio name="type" value="article" error={errors.title} register={register} required checked />
            </Col>

            <Col xs={6}>
              <Radio name="type" value="video" error={errors.title} register={register} required />
            </Col>

            <Col xs={12}>
              <Input id="title" name="title" type={enumInputType.text} error={errors.title} placeholder="Tytuł wpisu" defaultValue={undefined} register={register} required />
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
              <SimpleMDEComponent id="content" name="content" error={errors.content} placeholder="Napisz coś o sobie..." register={register} setValue={setValue} />
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
      <Popup
        power={powerPopup}
        status={addArticleStatus === "pending" ? null : addArticleStatus === "rejected" ? false : true}
        title={addArticleStatus === "pending" ? "Dodaje artykuł..." : addArticleStatus === "rejected" ? "Upss..." : "Udało się złotko !"}
        description={addArticleStatus === "rejected" ? "Wystąpił problem z dodaniem artykułu...spróbuj jeszcze raz za kilka chwil" : "Twój artykuł dodany... :) Jak tylko nasi moderatorzy sprawdza czy wszystko jest ok zostanie dodany do poczekalni a po przekroczeniu 100 wyświetleń na główną :)"}
      />
    </Section>
  );
}
