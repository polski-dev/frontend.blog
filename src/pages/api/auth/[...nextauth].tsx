import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

interface AuthorizeType {
  jwt: string;
  user: { email: string; name: string; blocked: boolean };
}

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      authorize: async (credentials: { identifier: string; password: string }): Promise<AuthorizeType | null> => {
        const res: AuthorizeType | null = await fetch("https://polskidev.herokuapp.com/api/auth/local", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        })
          .then((r) => r.json())
          .then((d) => {
            let data: AuthorizeType = { jwt: "", user: { email: "", name: "", blocked: false } };
            data.jwt = d.jwt;
            data.user.name = d.user.username;
            data.user.blocked = d.user.blocked;
            data.user.email = credentials.identifier;
            return data;
          })
          .catch(() => null);

        return res;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    jwt: ({ token, user }: any) => {
      if (user) token = { ...user };
      return token;
    },
    session: ({ session, token }: any) => {
      if (token) session = { ...token };
      return session;
    },
  },
});
