import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import useCallBackURL from "hooks/hooks.useCallBackURL";
import { Section, BoxContent, BoxInfo, BoxError } from "./component.section.sessionInfo.style";
import { ComponentAnimationItemLoad } from "components/atoms/animation/index";

export default function SectionSessionInfo({ users }: { users?: number }) {
  const router = useRouter();
  const { readCallBackURL } = useCallBackURL();
  const { data: session, status } = useSession();

  useEffect(() => {
    const stoper: ReturnType<typeof setTimeout> = setTimeout(async () => {
      if (!!readCallBackURL.to.length) await router.replace(readCallBackURL.to);
      else await router.replace("/");
    }, 500);

    return () => clearInterval(stoper);
  }, [router, readCallBackURL]);

  return (
    <Section>
      <h5>{status === "loading" ? <ComponentAnimationItemLoad /> : status === "authenticated" ? "Zalogowałeś się !" : "Coś poszło nie tak :("}</h5>
      <BoxContent>
        {status === "loading" ? (
          <ComponentAnimationItemLoad height={6} />
        ) : status === "authenticated" ? (
          <BoxInfo>
            {session?.user?.name} udało Ci się potwierdzić że jesteś jedną z {users} niesamiwitych osób !
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
