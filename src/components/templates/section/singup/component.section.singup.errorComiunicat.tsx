import { BoxErrorInfo } from "./component.section.singup.style";
export const errorComiunicat = (message: string) => {
  switch (message) {
    case "passwordAreNotSame":
      return <BoxErrorInfo>Hasła nie są takie same</BoxErrorInfo>;
    case "Email is already taken":
      return <BoxErrorInfo>Ten adres email jest już zajęty</BoxErrorInfo>;
    case "An error occurred during account creation":
      return <BoxErrorInfo>Wsytąpił problem z serwerem, spróboj później</BoxErrorInfo>;
    case "username is wrong":
      return <BoxErrorInfo>Nazwa użytkownika jest nie poprawna</BoxErrorInfo>;
  }
};
