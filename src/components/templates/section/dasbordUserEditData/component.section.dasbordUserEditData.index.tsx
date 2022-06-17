import Image from "next/image";
import { useForm } from "react-hook-form";
import Avatar from "assets/icon/avatar.svg";
import { useEffect, useState } from "react";
import useHimself from "hooks/hooks.useHimself";
import { emailRegex, passwordRegex } from "assets/regex/index.regex";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import { ItemLoad } from "components/atoms/animation/index";
import { Input, TextArea, enumInputType } from "components/molecules/form/component.form.index";
import { Section, Header, Title, Content, AuthorAvatr, Form, InfoInput, BoxInfo } from "./component.section.dasbordUserEditData.style";

export default function SectionDasbordUserEditData({ data: { session } }: { data: { session?: { user?: { email?: string | undefined | null; image?: string | undefined | null; name?: string | undefined | null } } | null } }) {
  const { userHimselfData, userHimselfDataEditPublicGet, userHimselfDataEditEmailGet, userHimselfDataEditPasswordGet, userHimselfDeleteGet, userHimselfChangeAvatarGet } = useHimself();

  // Change avatar
  const [saveAvatar, setSaveAvatar] = useState(false);
  const [updateAvatar, setUpdateAvatar] = useState(false);

  const {
    register: registerAvatar,
    handleSubmit: handleSubmitAvatar,
    formState: { errors: errorsAvatar },
  } = useForm();

  const onSubmitAvatar = ({ files }: { files: FileList }): void => {
    setUpdateAvatar(true);
    (async () =>
      userHimselfChangeAvatarGet({ files }).then((d) => {
        setUpdateAvatar(false);
        if (!d?.data) {
          setSaveAvatar(true);
          setTimeout(() => setSaveAvatar(false), 1500);
        }
      }))();
  };

  // PUBLIC DATA START
  const [updatePublicData, setUpdatePublicData] = useState(false);

  const {
    watch: watchPublicData,
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

  // PASSWORD START
  const [updatePassword, setUpdatePassword] = useState(false);
  const [savePassword, setSavePassword] = useState(false);

  const {
    setError: setErrorPassword,
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword },
  } = useForm();

  const onSubmitPassword = (data: any): void => {
    setUpdatePassword(true);
    (async () => {
      if (data.password != data.passwordSecound) {
        setErrorPassword("password", {
          message: "Hasła nie są takie same ",
        });
        setErrorPassword("passwordSecound", {
          message: "Hasła nie są takie same ",
        });
      } else {
        const update = await userHimselfDataEditPasswordGet(data.password);
        setUpdatePassword(false);
        if (!!update?.error) {
          setErrorPassword("passwordSecound", {
            message: "Nie hasło jest nie prawidłowe lub spróbuj za kilka minut jeszcze raz",
          });
          setErrorPassword("password", {
            message: "Nie hasło jest nie prawidłowe lub spróbuj za kilka minut jeszcze raz",
          });
        } else {
          setSavePassword(true);
          setTimeout(() => setSavePassword(false), 2000);
        }
      }
    })();
  };

  // Delete Acount
  const [updateDelete, setUpdateDelete] = useState(false);

  const { handleSubmit: handleSubmitDelete } = useForm();

  const onSubmitDelete = (): void => {
    setUpdateDelete(true);
    (async () => {
      await userHimselfDeleteGet();
    })();
  };

  return (
    <Section>
      <Header>Edycja danych</Header>

      <Content>
        <Title>Dane publiczne</Title>
        {!!userHimselfData?.data && !updateAvatar ? (
          <Form className="avatarData" onSubmit={handleSubmitAvatar((data) => onSubmitAvatar({ files: data.avatar }))}>
            {saveAvatar && <BoxInfo>Zapisano</BoxInfo>}
            <AuthorAvatr>{!!userHimselfData?.data?.avatar?.url && !!session ? <Image width={150} height={150} placeholder="blur" blurDataURL="/img/blur.png" alt={userHimselfData?.data?.username} src={userHimselfData?.data?.avatar?.url} /> : <Avatar />}</AuthorAvatr>
            <Input id="avatar" name="avatar" type={enumInputType.file} error={errorsAvatar.avatar} placeholder="dodaj..." register={registerAvatar} accept="image/png, image/jpeg" required />
            <ButtonSubmit title="zmień">{!!session ? "Zmień" : "Dodaj"}</ButtonSubmit>
          </Form>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", width: "15rem", alignItems: "center" }}>
            <ItemLoad
              style={{
                width: "15rem",
                height: "15rem",
                borderRadius: "100%",
              }}
            />
            <div style={{ display: "flex", flexWrap: "wrap", width: "15rem", alignItems: "center" }}>
              <ItemLoad
                style={{
                  width: "10rem",
                  height: "3.2rem",
                }}
              />
              <ItemLoad
                style={{
                  width: "3.2rem",
                  height: "3.2rem",
                  marginLeft: "1.8rem",
                }}
              />
            </div>
            <ItemLoad
              style={{
                width: "15rem",
                height: "3.2rem",
              }}
            />
          </div>
        )}
        <Form className="publicData" onSubmit={handleSubmitPublicData((e: any) => e.preventDefault(e))}>
          {!!userHimselfData?.data ? (
            <>
              {updatePublicData && <BoxInfo>Zapisano</BoxInfo>}
              <Input id="username" name="username" type={enumInputType.text} error={errorsPublicData.username} placeholder="Imię i nazwisko lub nick" defaultValue={!!userHimselfData?.data?.username ? userHimselfData?.data?.username : undefined} register={registerPublicData} required />
              <TextArea id="about" name="commentsDescription" error={errorsPublicData.about} defaultValue={!!userHimselfData?.data?.about ? userHimselfData?.data?.about : undefined} placeholder="Napisz coś o sobie..." register={registerPublicData} />
              <Input id="city" name="city" type={enumInputType.text} error={errorsPublicData.city} placeholder="Miasto" defaultValue={!!userHimselfData?.data?.city ? userHimselfData?.data?.city : undefined} register={registerPublicData} required />
              <Input id="country" name="country" type={enumInputType.text} error={errorsPublicData.country} placeholder="Kraj" defaultValue={!!userHimselfData?.data?.country ? userHimselfData?.data?.country : undefined} register={registerPublicData} required />
              <Input id="website" name="website" type={enumInputType.text} error={errorsPublicData.website} placeholder="Portfolio url" defaultValue={!!userHimselfData?.data?.website ? userHimselfData?.data?.website : undefined} register={registerPublicData} required />
              <Input id="instagram" name="instagram" type={enumInputType.text} error={errorsPublicData.instagram} placeholder="Instagram url twojego profilu" defaultValue={!!userHimselfData?.data?.instagram ? userHimselfData?.data?.instagram : undefined} register={registerPublicData} />
              <Input id="youtube" name="youtube" type={enumInputType.text} error={errorsPublicData.youtube} placeholder="YouTube url Twojego kanału" defaultValue={!!userHimselfData?.data?.youtube ? userHimselfData?.data?.youtube : undefined} register={registerPublicData} />
              <Input id="tiktok" name="tiktok" type={enumInputType.text} error={errorsPublicData.tiktok} placeholder="TikTok url twojego profilu" defaultValue={!!userHimselfData?.data?.tiktok ? userHimselfData?.data?.tiktok : undefined} register={registerPublicData} />
              <Input id="github" name="github" type={enumInputType.text} error={errorsPublicData.github} placeholder="Github url twojego profilu" defaultValue={!!userHimselfData?.data?.github ? userHimselfData?.data?.github : undefined} register={registerPublicData} />
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
              <Input id="email" name="email" type={enumInputType.email} pattern={emailRegex} error={errorsEmail.email} placeholder="email" defaultValue={!!userHimselfData?.data?.email ? userHimselfData?.data?.email : undefined} register={registerEmail} required />
              <ButtonSubmit title="zapisz nowy adres email">zapisz nowy adres email</ButtonSubmit>
            </>
          ) : (
            <>
              <ItemLoad height={3.2} />
              <ItemLoad height={3.2} />
            </>
          )}
        </Form>

        <Form className="privateData" onSubmit={handleSubmitPassword((data) => onSubmitPassword(data))}>
          {!!userHimselfData?.data && !updatePassword ? (
            <>
              {savePassword && <BoxInfo>Zapisano</BoxInfo>}
              <InfoInput>min. 8 znaków, min. 1 wielka litera, min. 1 mała litera, min. 1 cyfra, min. 1 znak specjalny</InfoInput>
              <Input id="password" name="password" pattern={passwordRegex} type={enumInputType.password} error={errorsPassword.password} placeholder="hasło" register={registerPassword} required />
              <Input id="passwordSecound" name="passwordSecound" pattern={passwordRegex} type={enumInputType.password} error={errorsPassword.passwordSecound} placeholder="powtórz hasło" register={registerPassword} required />
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
        <Form className="privateData" onSubmit={handleSubmitDelete(() => onSubmitDelete())}>
          {!!userHimselfData?.data && !updateDelete ? (
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
