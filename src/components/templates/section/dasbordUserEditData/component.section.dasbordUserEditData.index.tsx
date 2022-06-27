import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Avatar from "assets/icon/avatar.svg";
import { useSession } from "next-auth/react";
import useHimself from "hooks/hooks.useHimself";
import { emailRegex, passwordRegex } from "assets/regex/index.regex";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import { ComponentAnimationItemLoad } from "components/atoms/animation/index";
import { UserDataAvatarUpdateType, UserDataPublicUpdateType } from "utils/query/users/data";
import { Input, TextArea, enumInputType } from "components/molecules/form/component.form.index";
import { Section, Header, Title, Content, AuthorAvatr, Form, InfoInput, BoxInfo } from "./component.section.dasbordUserEditData.style";

export default function SectionDasbordUserEditData() {
  const { data: session, status } = useSession();
  const { userDataPublic, userEmail, userDataAvatarUpdate, userDataPublicUpdate } = useHimself();

  // avatar
  const [saveAvatar, setSaveAvatar] = useState(false);
  const [updateAvatar, setUpdateAvatar] = useState(false);

  const {
    register: registerAvatar,
    handleSubmit: handleSubmitAvatar,
    formState: { errors: errorsAvatar },
  } = useForm();

  const onSubmitAvatar = ({ files }: { files: FileList }): void => {
    if (!!files[0])
      (async () => {
        setUpdateAvatar(true);
        const res: UserDataAvatarUpdateType = await userDataAvatarUpdate({ file: files[0] });
        res?.data && setSaveAvatar(true);
        res?.data && setTimeout(() => setSaveAvatar(false), 1000);
        setUpdateAvatar(false);
      })();
  };

  // Public data
  const [savePublicData, setSavePublicData] = useState(false);
  const [updatePublicData, setUpdatePublicData] = useState(false);

  const {
    register: registerPublicData,
    handleSubmit: handleSubmitPublicData,
    formState: { errors: errorsPublicData },
  } = useForm();

  const onSubmitPublicData = ({ value }: { value: { username: string; about: string; website: string; youtube: string; instagram: string; tiktok: string; github: string; city: string; country: string } }): void => {
    (async () => {
      setUpdatePublicData(true);
      const res: UserDataPublicUpdateType = await userDataPublicUpdate({ data: { ...value } });
      res?.data && setSavePublicData(true);
      res?.data && setTimeout(() => setSavePublicData(false), 1000);
      setUpdatePublicData(false);
    })();
  };

  // email
  const [updateEmail, setUpdateEmail] = useState(false);
  const [saveEmail, setSaveEmail] = useState(false);

  const {
    setError: setErrorEmail,
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: errorsEmail },
  } = useForm();

  // const onSubmitEmail = (data: any): void => {
  //   setUpdateEmail(true);
  //   (async () => {
  //     const update = await userHimselfDataEditEmailGet(data.email);

  //     setUpdateEmail(false);
  //     if (!!update?.error)
  //       setErrorEmail("email", {
  //         message: "Email nie jest prawidłowy lub jest już używany",
  //       });
  //     else {
  //       setSaveEmail(true);
  //       setTimeout(() => setSaveEmail(false), 2000);
  //     }
  //   })();
  // };

  // PASSWORD START
  const [updatePassword, setUpdatePassword] = useState(false);
  const [savePassword, setSavePassword] = useState(false);

  const {
    setError: setErrorPassword,
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword },
  } = useForm();

  // const onSubmitPassword = (data: any): void => {
  //   setUpdatePassword(true);
  //   (async () => {
  //     if (data.password != data.passwordSecound) {
  //       setErrorPassword("password", {
  //         message: "Hasła nie są takie same ",
  //       });
  //       setErrorPassword("passwordSecound", {
  //         message: "Hasła nie są takie same ",
  //       });
  //     } else {
  //       const update = await userHimselfDataEditPasswordGet(data.password);
  //       setUpdatePassword(false);
  //       if (!!update?.error) {
  //         setErrorPassword("passwordSecound", {
  //           message: "Nie hasło jest nie prawidłowe lub spróbuj za kilka minut jeszcze raz",
  //         });
  //         setErrorPassword("password", {
  //           message: "Nie hasło jest nie prawidłowe lub spróbuj za kilka minut jeszcze raz",
  //         });
  //       } else {
  //         setSavePassword(true);
  //         setTimeout(() => setSavePassword(false), 2000);
  //       }
  //     }
  //   })();
  // };

  // delete
  const [updateDelete, setUpdateDelete] = useState(false);

  const { handleSubmit: handleSubmitDelete } = useForm();

  // const onSubmitDelete = (): void => {
  //   setUpdateDelete(true);
  //   (async () => {
  //     await userHimselfDeleteGet();
  //   })();
  // };

  return (
    <Section>
      <Header>Edycja danych</Header>

      <Content>
        <Title>Dane publiczne</Title>
        {!!userDataPublic?.data && !updateAvatar ? (
          <Form className="avatarData" onSubmit={handleSubmitAvatar((data) => onSubmitAvatar({ files: data.avatar }))}>
            {saveAvatar && <BoxInfo>Zapisano</BoxInfo>}
            <AuthorAvatr>{userDataPublic?.data?.avatar?.attributes?.url ? <Image width={150} height={150} placeholder="blur" blurDataURL="/img/blur.png" alt={userDataPublic?.data?.username || ""} src={userDataPublic?.data?.avatar?.attributes?.url} /> : <Avatar />}</AuthorAvatr>
            <Input id="avatar" name="avatar" type={enumInputType.file} error={errorsAvatar.avatar} placeholder="dodaj..." register={registerAvatar} accept="image/png, image/jpeg" required />
            <ButtonSubmit title="zmień">{!!session ? "Zmień" : "Dodaj"}</ButtonSubmit>
          </Form>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", width: "15rem", alignItems: "center" }}>
            <ComponentAnimationItemLoad
              style={{
                width: "15rem",
                height: "15rem",
                borderRadius: "100%",
              }}
            />
            <div style={{ display: "flex", flexWrap: "wrap", width: "15rem", alignItems: "center" }}>
              <ComponentAnimationItemLoad
                style={{
                  width: "10.7rem",
                  height: "3.2rem",
                  marginTop: "0.3rem",
                }}
              />
              <ComponentAnimationItemLoad
                style={{
                  width: "4rem",
                  height: "3.2rem",
                  marginLeft: "0.3rem",
                  marginTop: "0.3rem",
                }}
              />
            </div>
            <ComponentAnimationItemLoad
              style={{
                width: "15rem",
                height: "3.2rem",
                marginTop: "0.3rem",
              }}
            />
          </div>
        )}

        <Form className="publicData" onSubmit={handleSubmitPublicData((value: any) => onSubmitPublicData({ value }))}>
          {!!userDataPublic?.data && !updatePublicData ? (
            <>
              {savePublicData && <BoxInfo>Zapisano</BoxInfo>}
              <Input id="username" name="username" type={enumInputType.text} error={errorsPublicData.username} placeholder="Imię i nazwisko lub nick" defaultValue={!!userDataPublic?.data?.username ? userDataPublic?.data?.username : undefined} register={registerPublicData} required />
              <TextArea id="about" name="commentsDescription" error={errorsPublicData.about} defaultValue={!!userDataPublic?.data.about ? userDataPublic?.data?.about : undefined} placeholder="Napisz coś o sobie..." register={registerPublicData} />
              <Input id="city" name="city" type={enumInputType.text} error={errorsPublicData.city} placeholder="Miasto" defaultValue={!!userDataPublic?.data?.city ? userDataPublic?.data?.city : undefined} register={registerPublicData} required />
              <Input id="country" name="country" type={enumInputType.text} error={errorsPublicData.country} placeholder="Kraj" defaultValue={!!userDataPublic?.data?.country ? userDataPublic?.data?.country : undefined} register={registerPublicData} required />
              <Input id="website" name="website" type={enumInputType.text} error={errorsPublicData.website} placeholder="Portfolio url" defaultValue={!!userDataPublic?.data?.website ? userDataPublic?.data?.website : undefined} register={registerPublicData} required />
              <Input id="instagram" name="instagram" type={enumInputType.text} error={errorsPublicData.instagram} placeholder="Instagram url twojego profilu" defaultValue={!!userDataPublic?.data?.instagram ? userDataPublic?.data?.instagram : undefined} register={registerPublicData} />
              <Input id="youtube" name="youtube" type={enumInputType.text} error={errorsPublicData.youtube} placeholder="YouTube url Twojego kanału" defaultValue={!!userDataPublic?.data?.youtube ? userDataPublic?.data?.youtube : undefined} register={registerPublicData} />
              <Input id="tiktok" name="tiktok" type={enumInputType.text} error={errorsPublicData.tiktok} placeholder="TikTok url twojego profilu" defaultValue={!!userDataPublic?.data?.tiktok ? userDataPublic?.data?.tiktok : undefined} register={registerPublicData} />
              <Input id="github" name="github" type={enumInputType.text} error={errorsPublicData.github} placeholder="Github url twojego profilu" defaultValue={!!userDataPublic?.data?.github ? userDataPublic?.data?.github : undefined} register={registerPublicData} />
              <ButtonSubmit title="zapisz">zapisz</ButtonSubmit>
            </>
          ) : (
            <>
              <ComponentAnimationItemLoad height={3.2} />
              <ComponentAnimationItemLoad height={8} style={{ marginTop: "0.3rem" }} />
              <ComponentAnimationItemLoad height={3.2} style={{ marginTop: "0.3rem" }} />
              <ComponentAnimationItemLoad height={3.2} style={{ marginTop: "0.3rem" }} />
              <ComponentAnimationItemLoad height={3.2} style={{ marginTop: "0.3rem" }} />
              <ComponentAnimationItemLoad height={3.2} style={{ marginTop: "0.3rem" }} />
              <ComponentAnimationItemLoad height={3.2} style={{ marginTop: "0.3rem" }} />
              <ComponentAnimationItemLoad height={3.2} style={{ marginTop: "0.3rem" }} />
              <ComponentAnimationItemLoad height={3.2} style={{ marginTop: "0.3rem" }} />
            </>
          )}
        </Form>

        <Title>Dane prywatne</Title>
        <Form
          className="privateData"
          onSubmit={handleSubmitEmail((data) => {
            //  onSubmitEmail(data);
          })}
        >
          {!!userEmail?.data && !updateEmail ? (
            <>
              {saveEmail && <BoxInfo>Zapisano</BoxInfo>}
              <Input id="email" name="email" type={enumInputType.email} pattern={emailRegex} error={errorsEmail.email} placeholder="email" defaultValue={!!userEmail?.data?.email ? userEmail?.data?.email : undefined} register={registerEmail} required />
              <ButtonSubmit title="zapisz nowy adres email">zapisz nowy adres email</ButtonSubmit>
            </>
          ) : (
            <>
              <ComponentAnimationItemLoad height={3.2} />
              <ComponentAnimationItemLoad height={3.2} style={{ marginTop: "0.3rem" }} />
            </>
          )}
        </Form>

        <Form className="privateData" onSubmit={handleSubmitPassword((data) => onSubmitPassword(data))}>
          {!!userDataPublic?.data && !updatePassword ? (
            <>
              {savePassword && <BoxInfo>Zapisano</BoxInfo>}
              <InfoInput>min. 8 znaków, min. 1 wielka litera, min. 1 mała litera, min. 1 cyfra, min. 1 znak specjalny</InfoInput>
              <Input id="password" name="password" pattern={passwordRegex} type={enumInputType.password} error={errorsPassword.password} placeholder="hasło" register={registerPassword} required />
              <Input id="passwordSecound" name="passwordSecound" pattern={passwordRegex} type={enumInputType.password} error={errorsPassword.passwordSecound} placeholder="powtórz hasło" register={registerPassword} required />
              <ButtonSubmit title="zapisz nowe hasło">zapisz nowe hasło</ButtonSubmit>
            </>
          ) : (
            <>
              <ComponentAnimationItemLoad height={1.2} />
              <ComponentAnimationItemLoad height={3.2} style={{ marginTop: "0.3rem" }} />
              <ComponentAnimationItemLoad height={3.2} style={{ marginTop: "0.3rem" }} />
              <ComponentAnimationItemLoad height={3.2} style={{ marginTop: "0.3rem" }} />
            </>
          )}
        </Form>

        <Title style={{ paddingTop: "3rem" }}>Usuń konto</Title>
        <Form className="privateData" onSubmit={handleSubmitDelete(() => onSubmitDelete())}>
          {!!userDataPublic?.data && !updateDelete ? (
            <>
              <ButtonSubmit title="zapisz nowe hasło">Usuń bezpowrotnie swoje konto</ButtonSubmit>
            </>
          ) : (
            <>
              <ComponentAnimationItemLoad height={3.2} />
            </>
          )}
        </Form>
      </Content>
    </Section>
  );
}
