import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { RootState } from "store/store.index";
import { useSelector, useDispatch } from "react-redux";
import { Section, BoxContent, BoxInfo, BoxError } from "./component.section.sessionInfo.style";

export default function SectionSessionInfo({ users }: { users: number }) {
  const router = useRouter();
  const { data: session } = useSession();
  const store = useSelector((state: RootState) => state);

  useEffect(() => {
    console.log(store);
    const stoper: ReturnType<typeof setInterval> = setInterval(async () => {
      await router.replace("/a/1/artykol-o-javascript");
    }, 3000);

    return () => clearInterval(stoper);
  }, [store, router]);

  return (
    <Section>
      <h5>{!!session ? "Zalogowałeś się !" : "Coś poszło nie tak :("}</h5>
      <BoxContent>
        {!!session ? (
          <BoxInfo>
            {session?.user?.name} udało Ci się potwierdzić że jesteś jedną z {users} niesamiwitych osób, zaraz zostaniesz przekierowany
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
