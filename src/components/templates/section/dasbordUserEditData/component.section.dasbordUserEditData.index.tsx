import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Avatar from "assets/icon/avatar.svg";
import useHimself from "hooks/hooks.useHimself";
import { emailRegex, passwordRegex } from "assets/regex/index.regex";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import { ItemLoad } from "components/atoms/animation/comonent.animation.index";
import { Input, TextArea, enumInputType } from "components/molecules/form/component.form.index";
import { Section, Header, Title, Content, Description, AuthorAvatr, Form, InfoInput, BoxInfo } from "./component.section.dasbordUserEditData.style";

export default function SectionDasbordUserEditData({ data: { session } }: { data: { session?: { user?: { email?: string | undefined | null; image?: string | undefined | null; name?: string | undefined | null } } | null } }) {
  const { userHimselfData, userHimselfDataEditPublicGet, userHimselfDataEditEmailGet } = useHimself();

  const {
    watch,
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // PUBLIC DATA START
  const [updatePublicData, setUpdatePublicData] = useState(false);

  const {
    watch: watchPublicData,
    setError: setErrorPublicData,
    register: registerPublicData,
    handleSubmit: handleSubmitPublicData,
    formState: { errors: errorsPublicData },
  } = useForm();

  useEffect(() => {
    let update: any;
    const subscription = watchPublicData((value, { name, type }) => {
      clearTimeout(update);
      update = setTimeout(() => {
        setUpdatePublicData(true);
        setTimeout(() => {
          setUpdatePublicData(false);
        }, 1500);
        userHimselfDataEditPublicGet({ data: { ...value } });
      }, 2000);
    });
    return () => subscription.unsubscribe();
  }, [watchPublicData, userHimselfDataEditPublicGet]);

  // EMAIL START
  const [updateEmail, setUpdateEmail] = useState(false);
  const [saveEmail, setSaveEmail] = useState(false);

  const {
    watch: watchEmail,
    setError: setErrorEmail,
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: errorsEmail },
  } = useForm();

  const onSubmitEmail = (data: any): void => {
    setUpdateEmail(true);
    (async () => {
      const update = await userHimselfDataEditEmailGet(data.email);

      setUpdateEmail(false);
      if (!!update?.error)
        setErrorEmail("email", {
          message: "Email nie jest prawidłowy lub jest już używany",
        });
      else {
        setSaveEmail(true);
        setTimeout(() => setSaveEmail(false), 2000);
      }
    })();
  };

  return (
    <Section>
      <Header>Edycja danych</Header>

      <Content>
        <Title>Dane publiczne</Title>
        <Form className="avatarData">
          <AuthorAvatr>{!!session?.user?.image && session?.user?.name ? <Image width={150} height={150} placeholder="blur" blurDataURL="/img/blur.png" alt={session?.user?.name} src={session?.user?.image} /> : <Avatar />}</AuthorAvatr>
          <ButtonSubmit title="zmień">{!!session?.user?.image && session?.user?.name ? "Zmień" : "Dodaj"}</ButtonSubmit>
        </Form>
        <Form className="publicData" onSubmit={handleSubmitPublicData((e: any) => e.preventDefault(e))}>
          {!!userHimselfData?.data ? (
            <>
              {updatePublicData && <BoxInfo>Zapisano</BoxInfo>}
              <Input
                id="username"
                name="username"
                type={enumInputType.text}
                error={errors.username}
                placeholder="Imię i nazwisko lub nick"
                defaultValue={!!userHimselfData?.data?.username ? userHimselfData?.data?.username : undefined}
                register={registerPublicData}
                required
              />
              <TextArea id="about" name="commentsDescription" error={errors.about} defaultValue={!!userHimselfData?.data?.about ? userHimselfData?.data?.about : undefined} placeholder="Napisz coś o sobie..." register={registerPublicData} />
              <Input id="city" name="city" type={enumInputType.text} error={errors.city} placeholder="Miasto" defaultValue={!!userHimselfData?.data?.city ? userHimselfData?.data?.city : undefined} register={registerPublicData} required />
              <Input id="country" name="country" type={enumInputType.text} error={errors.country} placeholder="Kraj" defaultValue={!!userHimselfData?.data?.country ? userHimselfData?.data?.country : undefined} register={registerPublicData} required />
              <Input id="website" name="website" type={enumInputType.text} error={errors.website} placeholder="Portfolio url" defaultValue={!!userHimselfData?.data?.website ? userHimselfData?.data?.website : undefined} register={registerPublicData} required />
              <Input
                id="instagram"
                name="instagram"
                type={enumInputType.text}
                error={errors.instagram}
                placeholder="Instagram url twojego profilu"
                defaultValue={!!userHimselfData?.data?.instagram ? userHimselfData?.data?.instagram : undefined}
                register={registerPublicData}
              />
              <Input
                id="youtube"
                name="youtube"
                type={enumInputType.text}
                error={errors.youtube}
                placeholder="YouTube url Twojego kanału"
                defaultValue={!!userHimselfData?.data?.youtube ? userHimselfData?.data?.youtube : undefined}
                register={registerPublicData}
              />
              <Input id="tiktok" name="tiktok" type={enumInputType.text} error={errors.tiktok} placeholder="TikTok url twojego profilu" defaultValue={!!userHimselfData?.data?.tiktok ? userHimselfData?.data?.tiktok : undefined} register={registerPublicData} />
              <Input id="github" name="github" type={enumInputType.text} error={errors.github} placeholder="Github url twojego profilu" defaultValue={!!userHimselfData?.data?.github ? userHimselfData?.data?.github : undefined} register={registerPublicData} />
            </>
          ) : (
            <>
              <ItemLoad height={3.2} />
              <ItemLoad height={8} />
              <ItemLoad height={3.2} />
              <ItemLoad height={3.2} />
              <ItemLoad height={3.2} />
              <ItemLoad height={3.2} />
              <ItemLoad height={3.2} />
              <ItemLoad height={3.2} />
              <ItemLoad height={3.2} />
            </>
          )}
        </Form>
        <Title>Dane prywatne</Title>
        <Form className="privateData" onSubmit={handleSubmitEmail((data) => onSubmitEmail(data))}>
          {!!userHimselfData?.data && !updateEmail ? (
            <>
              {saveEmail && <BoxInfo>Zapisano</BoxInfo>}
              <Input
                id="email"
                name="email"
                type={enumInputType.email}
                pattern={emailRegex}
                error={errorsEmail.email}
                placeholder="email"
                defaultValue={!!userHimselfData?.data?.email ? userHimselfData?.data?.email : undefined}
                register={registerEmail}
                required
              />
              <ButtonSubmit title="zapisz nowy adres email">zapisz nowy adres email</ButtonSubmit>
            </>
          ) : (
            <>
              <ItemLoad height={3.2} />
              <ItemLoad height={3.2} />
            </>
          )}
        </Form>

        <Form className="privateData">
          {!!userHimselfData?.data ? (
            <>
              <InfoInput>min. 8 znaków, min. 1 wielka litera, min. 1 mała litera, min. 1 cyfra, min. 1 znak specjalny</InfoInput>
              <Input id="password" name="password" pattern={passwordRegex} type={enumInputType.password} error={errors.password} placeholder="hasło" register={register} required />
              <Input id="passwordSecound" name="passwordSecound" pattern={passwordRegex} type={enumInputType.password} error={errors.passwordSecound} placeholder="powtórz hasło" register={register} required />
              <ButtonSubmit title="zapisz nowe hasło">zapisz nowe hasło</ButtonSubmit>
            </>
          ) : (
            <>
              <ItemLoad height={1.2} />
              <ItemLoad height={3.2} />
              <ItemLoad height={3.2} />
              <ItemLoad height={3.2} />
            </>
          )}
        </Form>

        <Title style={{ paddingTop: "3rem" }}>Usuń konto</Title>
        <Form className="privateData">
          {!!userHimselfData?.data ? (
            <>
              <ButtonSubmit title="zapisz nowe hasło">Usuń bezpowrotnie swoje konto</ButtonSubmit>
            </>
          ) : (
            <>
              <ItemLoad height={3.2} />
            </>
          )}
        </Form>
      </Content>
    </Section>
  );
}
