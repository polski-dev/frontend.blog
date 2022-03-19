import fetchGraphQLAPI from "database/fetchAPI/database.fetchAPI.graphQL";
import fetchRestAPI from "database/fetchAPI/database.fetchAPI.restAPI";
//
import { UserByIdType } from "./type/database.userById.type";
import { userByIdQuery } from "./query/database.userById.query";
import { userByIdInitialState } from "./initialState/database.userById.initialState";
//
import { UserGetListType } from "./type/database.userGetList.type";
import { userGetListQuery } from "./query/database.userGetList.query";
import { userGetListInitialState } from "./initialState/database.userGetList.initialState";

// metchods
const userByIdGetPreview: (id: number) => Promise<UserByIdType> = async (id: number): Promise<UserByIdType> => await fetchGraphQLAPI(userByIdQuery, { variables: { id } });

const userGetListPreview: (page: number) => Promise<UserGetListType> = async (page: number): Promise<UserGetListType> => await fetchGraphQLAPI(userGetListQuery, { variables: { page: (page - 1) * 10 } });

export type { UserByIdType, UserGetListType };
export { userByIdGetPreview, userByIdInitialState, userGetListPreview, userGetListInitialState };
