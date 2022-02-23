import fetchAPI from "database/fetchAPI/database.fetchAPI.graphQL";
import { emailRegex, passwordRegex } from "assets/regex/index.regex";
//
import { AuthRegisterType } from "./type/database.authRegister.type";
import { authRegisterQuery } from "./query/database.authRegister.query";
import { authRegisterInitialState } from "./initialState/database.authRegister.initialState";

// metchods
const authRegisterPost: (username: string, email: string, password: string) => Promise<AuthRegisterType> = async (username: string, email: string, password: string): Promise<AuthRegisterType> => {
  let errors: (message: string) => AuthRegisterType = (message: string): AuthRegisterType => ({
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

  // i check data
  if (!username?.length) return errors("username is wrong");
  else if (!password?.length && !passwordRegex.test(password)) return errors("pasword is wrong");
  else if (!email?.length && !emailRegex.test(email)) return errors("email is wrong");

  const data: AuthRegisterType = await fetchAPI(authRegisterQuery, { variables: { username, email, password } });
  return data;
};

export type { AuthRegisterType };
export { authRegisterPost, authRegisterInitialState };
