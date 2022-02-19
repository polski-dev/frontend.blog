import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { emailRegex } from "assets/regex/index.regex";
import { ButtonSubmit } from "components/atoms/button/component.button.index";
import { ItemLoad } from "components/atoms/animation/comonent.animation.index";
import { Input, CheckBox, enumInputType } from "components/molecules/form/component.form.index";

import { Section, BoxContent, BoxAuth, Title, Description, BoxErrorInfo, BoxInfo, BoxOption, BoxRegistrationInfo, Form } from "./component.section.singup.style";

export default function SectionSingIn({ users }: { users: number }) {
  const router = useRouter();
  const [checked, setChecked] = useState("");
  const [send, setSend] = useState(false);

  useEffect(() => {
    console.log(checked);
  }, [checked]);

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
          {checked === "succes" ? null : (
            <>
              <Title>Już {users} osob promuje sie wzajemnie</Title>
              <Description>dołącz do nas i buduj razem z nami Twoją i naszą markę osobistą w świecie IT</Description>
            </>
          )}

          {send ? (
            <BoxOption>
              <ItemLoad />
              <ItemLoad height={10} />
              <ItemLoad />
            </BoxOption>
          ) : (
            <>
              <BoxOption>
                {checked === "passwordAreNotSame" && <BoxErrorInfo>Hasła nie są takie same</BoxErrorInfo>}
                {checked === "Email is already taken" && <BoxErrorInfo>Ten adres email jest już zajęty</BoxErrorInfo>}
                {checked === "An error occurred during account creation" && <BoxErrorInfo>Wsytąpił problem z serwerem, spróboj później</BoxErrorInfo>}
                {checked === "succes" ? (
                  <BoxInfo>Gratuluje twoje konto zostało utworzone zaraz zostaniesz przekierowany do strony logowania</BoxInfo>
                ) : (
                  <>
                    <BoxRegistrationInfo>
                      <span>Utwórz nowe konto</span>
                    </BoxRegistrationInfo>
                    <Form
                      onSubmit={handleSubmit((data: any): void => {
                        setChecked("");
                        if (data.password !== data.passwordSecound) {
                          setError("password", {});
                          setError("passwordSecound", {});
                          setChecked("passwordAreNotSame");
                        } else {
                          setSend(true);
                          (async () => {
                            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local/register`, {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify(data),
                            })
                              .then((res) => res.json())
                              .then((data) => data)
                              .catch((err) => err);
                            setSend(false);
                            if (!!res?.error?.message) setChecked(res.error.message);
                            else {
                              setChecked("succes");
                              setTimeout(() => {
                                router.push("/auth/signin");
                              }, 5000);
                            }
                          })();
                        }
                      })}
                    >
                      <Input id="username" name="username" type={enumInputType.text} error={errors.username} placeholder="Imię i nazwisko lub nick" register={register} required />
                      <Input id="email" name="email" type={enumInputType.email} pattern={emailRegex} error={errors.email} placeholder="email" register={register} required />
                      <Input id="password" name="password" type={enumInputType.password} error={errors.password} placeholder="hasło" register={register} required />
                      <Input id="passwordSecound" name="passwordSecound" type={enumInputType.password} error={errors.passwordSecound} placeholder="powtórz hasło" register={register} required />
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
