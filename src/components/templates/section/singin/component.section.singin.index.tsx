import Link from "next/link";
import { useRouter } from "next/router";
import Brand from "assets/icon/logo.svg";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { emailRegex } from "assets/regex/index.regex";
import useCallBackURL from "hooks/hooks.useCallBackURL";
import { ComponentAnimationItemLoad } from "components/atoms/animation";
import { ButtonSubmit, Button } from "components/atoms/button/component.button.index";
import { Input, enumInputType } from "components/molecules/form/component.form.index";
import { Section, BoxContent, BoxAuth, Title, Description, BoxErrorInfo, BoxOption, BoxRegistrationInfo, Form } from "./component.section.singin.style";

export default function SectionSingIn({ users }: { users: number }) {
  const router = useRouter();
  const { data: session } = useSession();
  const { readCallBackURL } = useCallBackURL();
  const [send, setSend] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect((): void => {
    (async (): Promise<void> => {
      !!session && (await router.replace(!readCallBackURL.err ? "/" : readCallBackURL.to));
    })();
  }, [router, session, readCallBackURL]);

  useEffect(() => {
    !!router.query?.error && !send && setSend(false);
  }, [router, session, send]);

  return (
    <Section>
      <h5>Logowanie</h5>
      <BoxContent>
        <BoxAuth>
          <Title>
            Witamy w społeczności <Brand />
          </Title>
          <Description>Nasza społeczność to {users} niesamowitych ludzi powiązanych z IT</Description>

          {send ? (
            <BoxOption>
              <ComponentAnimationItemLoad style={{ marginBottom: "1.5rem" }} />
              <ComponentAnimationItemLoad height={10} style={{ marginBottom: "1.5rem" }} />
              <ComponentAnimationItemLoad style={{ marginBottom: "1.5rem" }} />
            </BoxOption>
          ) : (
            <>
              <BoxOption>
                {!!router.query?.error && <BoxErrorInfo>Wystąpił błąd podczas logowania, spróbuj jeszcze raz</BoxErrorInfo>}
                <BoxRegistrationInfo>
                  <span>Zaloguj się</span>
                </BoxRegistrationInfo>
                <Form
                  onSubmit={handleSubmit(({ identifier, password }): void => {
                    setSend(true);
                    signIn("credentials", { identifier, password, callbackUrl: "/auth/loggedcorrectly" });
                  })}
                >
                  <Input id="identifier" name="identifier" type={enumInputType.email} pattern={emailRegex} error={errors.identifier} placeholder="email" register={register} required />
                  <Input id="password" name="password" type={enumInputType.password} error={errors.password} placeholder="hasło" register={register} required />
                  <ButtonSubmit title="Zalguj">Zalguj</ButtonSubmit>
                </Form>
              </BoxOption>
              <BoxRegistrationInfo>
                <span>
                  Nie masz konta ?{" "}
                  <Link href="/auth/signup">
                    <a title="Zarejestruj się">Zarejestruj się</a>
                  </Link>
                </span>
              </BoxRegistrationInfo>
            </>
          )}
        </BoxAuth>
      </BoxContent>
    </Section>
  );
}
