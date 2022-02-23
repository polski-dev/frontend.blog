import fetchAPI from "database/fetchAPI/database.fetchAPI.graphQL";
//
import { UserByIdType } from "./type/database.userById.type";
import { userByIdQuery } from "./query/database.userById.query";
import { userByIdInitialState } from "./initialState/database.userById.initialState";

// metchods
const userByIdGetPreview: (id: number) => Promise<UserByIdType> = async (id: number): Promise<UserByIdType> => await fetchAPI(userByIdQuery, { variables: { id } });

export type { UserByIdType };
export { userByIdGetPreview, userByIdInitialState };
