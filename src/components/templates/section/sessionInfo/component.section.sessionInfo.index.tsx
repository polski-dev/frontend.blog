import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Section, BoxContent, BoxInfo, BoxError } from "./component.section.sessionInfo.style";

export default function SectionSessionInfo({ users }: { users: number }) {
  const [sec, setSec] = useState(5);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const stoper: ReturnType<typeof setInterval> = setInterval(async () => {
      if (sec === 0) await router.push("/");
      setSec(sec - 1);
    }, 1000);

    return () => clearInterval(stoper);
  }, [sec, router]);

  return (
    <Section>
      <h5>{!!session ? "Zalogowałeś się !" : "Coś poszło nie tak :("}</h5>
      <BoxContent>
        {!!session ? (
          <BoxInfo>
            {session?.user?.name} udało Ci się potwierdzić że jesteś jedną z {users} niesamiwitych osób, za {sec} sek zostaniesz przekierowany na
            <span>
              <Link href="/">
                <a> strone główną</a>
              </Link>
            </span>
          </BoxInfo>
        ) : (
          <BoxError>
            Upss... Coś poszło nie tak :( za {sec} sek zostaniesz przekierowany na
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
