import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Avatar from "assets/icon/avatar.svg";
import useHimself from "hooks/hooks.useHimself";
import { emailRegex, passwordRegex } from "assets/regex/index.regex";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import { Input, TextArea, enumInputType } from "components/molecules/form/component.form.index";
import { Section, Header, Title, Content, Description, AuthorAvatr, Form, InfoInput } from "./component.section.dasbordUserEditData.style";

export default function SectionDasbordUserEditData({ data: { session } }: { data: { session?: { user?: { email?: string | undefined | null; image?: string | undefined | null; name?: string | undefined | null } } | null } }) {
  const { userHimselfData } = useHimself();

  console.log(userHimselfData);

  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Section>
      <Header>Edycja danych</Header>

      <Content>
        <Title>Dane publiczne</Title>
        <Form className="avatarData">
          <AuthorAvatr>{!!session?.user?.image && session?.user?.name ? <Image width={150} height={150} placeholder="blur" blurDataURL="/img/blur.png" alt={session?.user?.name} src={session?.user?.image} /> : <Avatar />}</AuthorAvatr>
          <ButtonSubmit title="zmień">{!!session?.user?.image && session?.user?.name ? "Zmień" : "Dodaj"}</ButtonSubmit>
        </Form>
        <Form className="publicData">
          <Input id="username" name="username" type={enumInputType.text} error={errors.username} placeholder="Imię i nazwisko lub nick" defaultValue="Paweł Niedźwiecki" register={register} required />
          <TextArea id="about" defaultValue={false || ""} name="commentsDescription" error={errors.about} placeholder="Napisz coś o sobie..." register={register} />
          <Input id="city" name="city" type={enumInputType.text} error={errors.city} placeholder="Miasto" defaultValue="Gorzów Wielkopolski" register={register} required />
          <Input id="country" name="country" type={enumInputType.text} error={errors.country} placeholder="Kraj" defaultValue="Polska" register={register} required />
          <Input id="portfolio" name="portfolio" type={enumInputType.text} error={errors.portfolio} placeholder="Portfolio url" defaultValue="https://www.uxu.pl" register={register} required />
          <Input id="facebook" name="facebook" type={enumInputType.text} error={errors.facebook} placeholder="Facebook url twojego profilu" defaultValue="https://www.facebook.com/profile.php?id=100005125486552" register={register} required />
          <Input id="youtube" name="youtube" type={enumInputType.text} error={errors.youtube} placeholder="YouTube url Twojego kanału" defaultValue={false || ""} register={register} />
          <Input id="tiktok" name="tiktok" type={enumInputType.text} error={errors.tiktok} placeholder="TikTok url twojego profilu" defaultValue="https://www.tiktok.com" register={register} required />
          <Input id="instagram" name="instagram" type={enumInputType.text} error={errors.instagram} placeholder="Instagram url twojego profilu" defaultValue="https://www.instagram.com" register={register} required />
        </Form>
        <Title>Dane prywatne</Title>
        <Form className="privateData">
          <Input id="email" name="email" type={enumInputType.email} pattern={emailRegex} error={errors.email} placeholder="email" defaultValue="hello@uxu.pl" register={register} required />

          <ButtonSubmit title="zapisz nowy adres email">zapisz nowy adres email</ButtonSubmit>
        </Form>

        <Form className="privateData">
          <InfoInput>min. 8 znaków, min. 1 wielka litera, min. 1 mała litera, min. 1 cyfra, min. 1 znak specjalny</InfoInput>
          <Input id="password" name="password" pattern={passwordRegex} type={enumInputType.password} error={errors.password} placeholder="hasło" register={register} required />
          <Input id="passwordSecound" name="passwordSecound" pattern={passwordRegex} type={enumInputType.password} error={errors.passwordSecound} placeholder="powtórz hasło" register={register} required />
          <ButtonSubmit title="zapisz nowe hasło">zapisz nowe hasło</ButtonSubmit>
        </Form>

        <Title style={{ paddingTop: "3rem" }}>Usuń konto</Title>
        <Form className="privateData">
          <ButtonSubmit title="zapisz nowe hasło">Usuń bezpowrotnie swoje konto</ButtonSubmit>
        </Form>
      </Content>
    </Section>
  );
}
