import fetchAPI from "database/fetchAPI/database.fetchAPIErrorNotSuport.graphQL";
//
import { CountUserType } from "./type/database.countUser.type";
import { countUserQuery } from "./query/database.countUser.query";
import { countUserInitialState } from "./initialState/database.countUser.initialState";

// metchods
const countUserGetPreview: () => Promise<CountUserType> = async (): Promise<CountUserType> => await fetchAPI(countUserQuery);

export type { CountUserType };
export { countUserGetPreview, countUserInitialState };
