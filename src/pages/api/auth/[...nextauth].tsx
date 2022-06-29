import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authUserSingInBackEnd, AuthSingInUserType } from "utils/query/auth/index";
import { userDataPublicReadBackEnd, UserDataPublicReadType } from "utils/query/users/data/index";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: { identifier: { type: "identifier", placeholder: "email" }, password: { type: "password", placeholder: "hasło" } },
      async authorize(credentials: any): Promise<null | any> {
        const { identifier, password } = credentials;

        const res: AuthSingInUserType = await authUserSingInBackEnd({ identifier, password });
        const resDataPublic: UserDataPublicReadType = await userDataPublicReadBackEnd({ authToken: `Bearer ${res?.data?.jwt}` });

        let data: { jwt?: string | boolean; user: { id: number; blocked: boolean; username: string; email: string; picture: string } } = { jwt: false, user: { id: 0, blocked: true, username: "", email: "", picture: "" } };

        if (!!identifier) data.user.email = identifier;
        if (res?.data?.jwt) data.jwt = res?.data?.jwt;
        if (res?.data?.user?.id) data.user.id = res?.data?.user?.id;
        if (res?.data?.user?.blocked) data.user.blocked = res?.data?.user?.blocked;
        if (res?.data?.user?.username) data.user.username = res?.data?.user?.username;
        if (resDataPublic?.data?.avatar?.attributes.url) data.user.picture = resDataPublic?.data?.avatar?.attributes.url;
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
        token.id = members.user.id;
        token.email = members?.user.email;
        token.name = members?.user.username;
        token.picture = members.user.picture;
      }
      return token;
    },

    async session({ session, token }: any): Promise<any> {
      session.id = token.id;
      session.jwt = token.jwt;
      return session;
    },
  },
});
