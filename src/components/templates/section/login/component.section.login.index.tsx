import Link from "next/link";
import Brand from "assets/icon/logo.svg";
import Apple from "assets/icon/apple.svg";
import Google from "assets/icon/google.svg";
import Github from "assets/icon/github.svg";
import { Section, BoxContent, BoxAuth, Title, Description, BoxOption, BoxRegistrationInfo } from "./component.section.login.style";
import { ButtonInLink } from "components/atoms/button/component.button";

export default function SectionLogin() {
  return (
    <Section>
      <h5>Logowanie</h5>
      <BoxContent>
        <BoxAuth>
          <Title>
            Witamy w społeczności <Brand />
          </Title>
          <Description>Nasza społeczność to 797 169 niesamowitych ludzi powiązanych z IT</Description>
          <BoxOption>
            <ButtonInLink href="/" title="Zaloguj przez Apple">
              <>
                <Apple />
                Zaloguj przez Apple
              </>
            </ButtonInLink>
            <ButtonInLink href="/" title="Zaloguj przez Google">
              <>
                <Google />
                Zaloguj przez Google
              </>
            </ButtonInLink>
            <ButtonInLink href="/" title="Zaloguj przez Github">
              <>
                <Github />
                Zaloguj przez Github
              </>
            </ButtonInLink>
          </BoxOption>
          <BoxRegistrationInfo>
            <span>
              Nie masz konta ? <Link href="/l"> Zarejestruj się</Link>
            </span>
          </BoxRegistrationInfo>
        </BoxAuth>
      </BoxContent>
    </Section>
  );
}
