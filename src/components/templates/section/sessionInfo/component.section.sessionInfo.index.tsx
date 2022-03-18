import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import useCallBackURL from "hooks/hooks.useCallBackURL";
import { Section, BoxContent, BoxInfo, BoxError } from "./component.section.sessionInfo.style";
import { ItemLoad } from "components/atoms/animation/comonent.animation.index";

export default function SectionSessionInfo({ users }: { users: number }) {
  const router = useRouter();
  const { readCallBackURL } = useCallBackURL();
  const { data: session, status } = useSession();
  const [messageSucces, setMessageSucces] = useState("");

  useEffect(() => {
    const stoper: ReturnType<typeof setTimeout> = setTimeout(async () => {
      if (!!readCallBackURL.to.length) await router.replace(readCallBackURL.to);
      else await router.replace("/");
    }, 3000);

    return () => clearInterval(stoper);
  }, [router, readCallBackURL]);

  useEffect(() => {
    switch (readCallBackURL.name) {
      case "article":
        setMessageSucces("do artykułu");
        break;
      case "video":
        setMessageSucces("do video");
        break;
      case "user":
        setMessageSucces("do strony użytkownika");
        break;
      case "tag":
        setMessageSucces("do strony tagu");
        break;
      default:
        setMessageSucces("na stronę główną");
        break;
    }
  }, [readCallBackURL]);

  return (
    <Section>
      <h5>{status === "loading" ? <ItemLoad /> : status === "authenticated" ? "Zalogowałeś się !" : "Coś poszło nie tak :("}</h5>
      <BoxContent>
        {status === "loading" ? (
          <ItemLoad style={{ height: "6rem" }} />
        ) : status === "authenticated" ? (
          <BoxInfo>
            {session?.user?.name} udało Ci się potwierdzić że jesteś jedną z {users} niesamiwitych osób, zaraz zostaniesz przekierowany {messageSucces}
          </BoxInfo>
        ) : (
          <BoxError>
            Upss... Coś poszło nie tak :( zaraz zostaniesz przekierowany na
            <span>
              <Link href="/">
                <a> stronę główną </a>
              </Link>
              spróbuj za 10 min. jeszcze raz
            </span>
          </BoxError>
        )}
      </BoxContent>
    </Section>
  );
}
