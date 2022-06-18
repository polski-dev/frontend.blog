import fetchAPI from "utils/database/fetchAPI/database.fetchAPI.graphQL";
//
import { CountUserType } from "./type/database.countUser.type";
import { countUserQuery } from "./query/database.countUser.query";
import { countUserInitialState } from "./initialState/database.countUser.initialState";

// metchods
const countUserGetPreview: () => Promise<CountUserType> = async (): Promise<CountUserType> => await fetchAPI(countUserQuery);

export type { CountUserType };
export { countUserGetPreview, countUserInitialState };