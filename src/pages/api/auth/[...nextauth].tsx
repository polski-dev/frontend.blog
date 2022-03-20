import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { authSingInPost, AuthSingInType, userByIdGetPreview, UserByIdType } from "database/database.graphQL.index";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: { identifier: { type: "identifier", placeholder: "email" }, password: { type: "password", placeholder: "hasło" } },
      async authorize(credentials: any): Promise<null | any> {
        const { identifier, password } = credentials;
        const res: AuthSingInType = await authSingInPost(identifier.toString(), password.toString());
        const avatar: UserByIdType | null = res.data?.login?.user?.id ? await userByIdGetPreview(parseInt(res.data?.login.user.id)) : null;
        if (!!res?.errors) return null;
        return { jwt: res.data?.login.jwt, user: { ...res.data?.login.user, email: identifier.toString(), picture: avatar?.data?.user?.data?.attributes?.avatar?.data.attributes.url } };
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
    async jwt({ token, user: members, account }: any): Promise<any> {
      if (members && account?.provider === "credentials") {
        token.jwt = members.jwt;
        token.email = members?.user.email;
        token.name = members?.user.username;
        token.picture = members.user.picture;
      }
      return token;
    },

    async session({ session, token }: any): Promise<any> {
      session.jwt = token.jwt;
      return session;
    },
  },
});
