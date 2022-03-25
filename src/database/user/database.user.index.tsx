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
//
import { UserSubscriptionStatusType } from "./type/database.userSubscriptionStatus.type";
import { userSubscriptionStatusInitialState } from "./initialState/database.userSubscriptionStatus.initialState";
//
import { UserSubscriptionToggleType } from "./type/database.userSubscriptionToggle.type";
import { userSubscriptionToggleInitialState } from "./initialState/database.userSubscriptionToggle.initialState";

// metchods
const userByIdGetPreview: (id: number) => Promise<UserByIdType> = async (id: number): Promise<UserByIdType> => await fetchGraphQLAPI(userByIdQuery, { variables: { id } });

const userGetListPreview: (page: number) => Promise<UserGetListType> = async (page: number): Promise<UserGetListType> => await fetchGraphQLAPI(userGetListQuery, { variables: { page: (page - 1) * 10 } });

const userSubscriptionStatusGet: (idUser: number, authorization: string) => Promise<UserSubscriptionStatusType> = async (idUser: number, authorization: string): Promise<UserSubscriptionStatusType> => {
  return await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/user/${idUser}/subscribe`, authorization });
};

const userSubscriptionToggleGet: (idUser: number, authorization: string) => Promise<UserSubscriptionStatusType> = async (idUser: number, authorization: string): Promise<UserSubscriptionStatusType> =>
  await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/user/${idUser}/subscribe/toggle`, authorization });

export type { UserByIdType, UserGetListType, UserSubscriptionStatusType, UserSubscriptionToggleType };
export { userByIdGetPreview, userByIdInitialState, userGetListPreview, userGetListInitialState, userSubscriptionStatusGet, userSubscriptionStatusInitialState, userSubscriptionToggleGet, userSubscriptionToggleInitialState };
