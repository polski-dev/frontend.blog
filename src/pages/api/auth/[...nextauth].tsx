import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface AuthorizeType {
  jwt: string;
  user: { id: number; email: string; name: string; blocked: boolean };
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: { identifier: { type: "identifier", placeholder: "email" }, password: { type: "password", placeholder: "hasło" } },
      async authorize(credentials: any): Promise<any> {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        })
          .then((r) => r.json())
          .then((d) => {
            let data: AuthorizeType = { jwt: "", user: { id: 1, email: "", name: "", blocked: false } };
            data.jwt = d.jwt;
            data.user.id = d.user.id;
            data.user.name = d.user.username;
            data.user.blocked = d.user.blocked;
            data.user.email = credentials?.identifier || "";

            return data;
          })
          .catch(() => null);

        return res;
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  jwt: {
    secret: process.env.JWT_SECRET,
  },

  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },

  callbacks: {
    async jwt({ token, user: member, account }) {
      if (member && account?.provider === "credentials") {
        const { jwt, user }: any = member;
        token.id = user.id;
        token.name = user.name;
        token.accessToken = jwt;
        token.email = user.email;
        token.blocked = user.blocked;
      } else if (account?.provider === "github") {
        console.log(token);
        console.log(account);
      }

      return token;
    },
    async session({ session, token }) {
      session.id = token.id;
      session.blocked = token.blocked;
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
