import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { emailRegex, passwordRegex } from "assets/regex/index.regex";
import { errorComiunicat } from "./component.section.singup.errorComiunicat";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import { ComponentAnimationItemLoad } from "components/atoms/animation/index";
import { Input, CheckBox, enumInputType } from "components/molecules/form/component.form.index";

import { authSingUpUserState, authUserSingUpFrontEnd, AuthSingUpUserType } from "utils/query/auth";
import { Section, BoxContent, BoxAuth, Title, Description, BoxInfo, BoxOption, BoxRegistrationInfo, Form, InfoInput } from "./component.section.singup.style";

export default function SectionSingIn({ users }: { users?: number }): JSX.Element {
  const router = useRouter();
  const [send, setSend] = useState(false);
  const [checked, setChecked] = useState(authSingUpUserState);

  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Section>
      <h5>Rejstracja</h5>
      <BoxContent>
        <BoxAuth>
          {checked?.data?.jwt ? null : (
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
                {checked?.error && errorComiunicat(checked?.error.message)}
                {checked?.data?.jwt ? (
                  <BoxInfo>Gratuluje twoje konto zostało utworzone zaraz zostaniesz przekierowany do strony logowania</BoxInfo>
                ) : (
                  <>
                    <BoxRegistrationInfo>
                      <span>Utwórz nowe konto</span>
                    </BoxRegistrationInfo>
                    <Form
                      onSubmit={handleSubmit((data): void => {
                        const { username, email, password } = data;

                        if (data.password !== data.passwordSecound) {
                          setError("password", {});
                          setError("passwordSecound", {});
                          setChecked(MessageErrorInAPI({ name: "ApplicationError", message: "passwordAreNotSame" }));
                        } else {
                          setSend(true);
                          (async () => {
                            alert("ok");
                            console.log(username, email, password);
                            const res: AuthSingUpUserType = await authUserSingUpFrontEnd({ username, email, password });

                            setChecked(res);
                            setSend(false);
                            if (checked?.data?.jwt) {
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
