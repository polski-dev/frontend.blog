import fetchAPI from "utils/database/fetchAPI/database.fetchAPI.graphQL";
import { emailRegex, passwordRegex } from "assets/regex/index.regex";
//
import { AuthSingUpType } from "./type/database.authSingUp.type";
import { authSingUpQuery } from "./query/database.authSingUp.query";
import { authSingUpInitialState } from "./initialState/database.authSingUp.initialState";
//
import { AuthSingInType } from "./type/database.authSingIn.type";
import { authSingInQuery } from "./query/database.authSingIn.query";
import { authSingInInitialState } from "./initialState/database.authSingIn.initialState";

// message errors
let errors: (message: string) => any = (message: string): any => ({
  data: null,
  errors: [
    {
      message,
      extensions: {
        error: {
          name: "ApplicationError",
          message,
          details: {},
        },
        code: "NEXTJS_APPLICATION_ERROR",
      },
    },
  ],
});

// metchods
const authSingUpPost: (username: string, email: string, password: string) => Promise<AuthSingUpType> = async (username: string, email: string, password: string): Promise<AuthSingUpType> => {
  // i check data
  if (!username?.length) return errors("username is wrong");
  else if (!password?.length && !passwordRegex.test(password)) return errors("pasword is wrong");
  else if (!email?.length && !emailRegex.test(email)) return errors("email is wrong");

  const data: AuthSingUpType = await fetchAPI(authSingUpQuery, { variables: { username, email, password } });
  return data;
};

const authSingInPost: (email: string, password: string) => Promise<AuthSingInType> = async (email: string, password: string): Promise<AuthSingInType> => await fetchAPI(authSingInQuery, { variables: { email, password } });

export type { AuthSingUpType, AuthSingInType };
export { authSingUpPost, authSingUpInitialState, authSingInPost, authSingInInitialState };
