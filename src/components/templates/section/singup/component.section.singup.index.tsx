import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { emailRegex, passwordRegex } from "assets/regex/index.regex";
import { errorComiunicat } from "./component.section.singup.errorComiunicat";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import { ComponentAnimationItemLoad } from "components/atoms/animation/index";
import { Input, CheckBox, enumInputType } from "components/molecules/form/component.form.index";
import { authSingUpPost, authSingUpInitialState, AuthSingUpType } from "utils/database/database.restAPI.index";
import { Section, BoxContent, BoxAuth, Title, Description, BoxInfo, BoxOption, BoxRegistrationInfo, Form, InfoInput } from "./component.section.singup.style";

export default function SectionSingIn({ users }: { users?: number }): JSX.Element {
  const router = useRouter();
  const [send, setSend] = useState(false);
  const [checked, setChecked] = useState(authSingUpInitialState);

  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let errorsMessage: (message: string) => AuthSingUpType = (message: string): AuthSingUpType => ({
    data: null,
    errors: [
      {
        message,
        extensions: {
          error: {
            name: "ApplicationError",
            message,
            details: {},
          },
          code: "NEXTJS_APPLICATION_ERROR",
        },
      },
    ],
  });

  return (
    <Section>
      <h5>Rejstracja</h5>
      <BoxContent>
        <BoxAuth>
          {checked.data?.register.user.confirmed ? null : (
            <>
              <Title>Już {users} osob promuje sie wzajemnie</Title>
              <Description>dołącz do nas i buduj razem z nami Twoją i naszą markę osobistą w świecie IT</Description>
            </>
          )}

          {send ? (
            <BoxOption>
              <ComponentAnimationItemLoad height={10} />
            </BoxOption>
          ) : (
            <>
              <BoxOption>
                {checked.errors && errorComiunicat(checked.errors[0].message)}
                {checked.data?.register.user.confirmed ? (
                  <BoxInfo>Gratuluje twoje konto zostało utworzone zaraz zostaniesz przekierowany do strony logowania</BoxInfo>
                ) : (
                  <>
                    <BoxRegistrationInfo>
                      <span>Utwórz nowe konto</span>
                    </BoxRegistrationInfo>
                    <Form
                      onSubmit={handleSubmit((data: any): void => {
                        const { username, email, password } = data;
                        setChecked(authSingUpInitialState);
                        if (data.password !== data.passwordSecound) {
                          setError("password", {});
                          setError("passwordSecound", {});
                          setChecked(errorsMessage("passwordAreNotSame"));
                        } else {
                          setSend(true);
                          (async () => {
                            setChecked(await authSingUpPost(username, email, password));
                            setSend(false);
                            if (!checked.errors) {
                              setTimeout(() => {
                                router.push("/auth/signin");
                              }, 2000);
                            }
                          })();
                        }
                      })}
                    >
                      <Input id="username" name="username" type={enumInputType.text} error={errors.username} placeholder="Imię i nazwisko lub nick" register={register} required />

                      <Input id="email" name="email" type={enumInputType.email} pattern={emailRegex} error={errors.email} placeholder="email" register={register} required />

                      <Input id="password" name="password" pattern={passwordRegex} type={enumInputType.password} error={errors.password} placeholder="hasło" register={register} required />

                      <InfoInput>min. 8 znaków, min. 1 wielka litera, min. 1 mała litera, min. 1 cyfra, min. 1 znak specjalny</InfoInput>

                      <Input id="passwordSecound" name="passwordSecound" pattern={passwordRegex} type={enumInputType.password} error={errors.passwordSecound} placeholder="powtórz hasło" register={register} required />

                      <CheckBox id="privacyPolicyContact" error={errors.privacyPolicyContact} label="wyrażam zgodę na przetwarzanie przez polski.dev moich danych osobowych zgodnie z polityką prywatnosći" register={register} required />

                      <ButtonSubmit title="Zalguj">Dodaj nowe konto</ButtonSubmit>
                    </Form>
                  </>
                )}
              </BoxOption>
            </>
          )}
        </BoxAuth>
      </BoxContent>
    </Section>
  );
}
