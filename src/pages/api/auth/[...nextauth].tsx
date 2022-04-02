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
        const avatar: UserByIdType = await userByIdGetPreview(parseInt(res.data?.login.user.id || "0"));
        let data: { jwt?: JsonWebKey | boolean; user: { id: string; blocked: boolean; username: string; email: string; picture: string } } = { jwt: false, user: { id: "", blocked: true, username: "", email: "", picture: "" } };

        if (!!identifier) data.user.email = identifier;
        if (res?.data?.login?.jwt) data.jwt = res.data?.login.jwt;
        if (res?.data?.login?.user?.id) data.user.id = res?.data?.login?.user?.id;
        if (res?.data?.login?.user?.blocked) data.user.blocked = res?.data?.login?.user?.blocked;
        if (res?.data?.login?.user?.username) data.user.username = res?.data?.login?.user?.username;
        if (avatar?.data?.user?.data?.attributes?.avatar?.data?.attributes?.url) data.user.picture = avatar?.data?.user?.data?.attributes?.avatar?.data?.attributes?.url;
        if (!data.jwt) return null;

        return data;
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
