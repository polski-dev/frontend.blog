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
//
import { UserStatisticsType } from "./type/database.userStatistics.type";
import { userStatisticsInitialState } from "./initialState/database.userStatistics.initialState";
//

import { UserHimselfDataType } from "./type/database.userHimselfData.type";
import { userHimselfDataInitialState } from "./initialState/database.userHimselfData.initialState";
//
import { UserHimselfDataEditEmailType } from "./type/database.userHimselfDataEditEmail.type";
import { userHimselfDataEditEmailInitialState } from "./initialState/database.userHimselfDataEditEmail.initialState";
//
import { UserHimselfDataEditPasswordType } from "./type/database.userHimselfDataEditPassword.type";
import { userHimselfDataEditPasswordInitialState } from "./initialState/database.userHimselfDataEditPassword.initialState";
//
import { UserHimselfDataEditPublicType } from "./type/database.userHimselfDataEditPublic.type";
import { userHimselfDataEditPublicInitialState } from "./initialState/database.userHimselfDataEditPublic.initialState";
//
import { UserHimselfDeleteType } from "./type/database.userHimselfDelete.type";
import { userHimselfDeleteInitialState } from "./initialState/database.userHimselfDelete.initialState";
//
import { UserHimselfChangeAvatarType } from "./type/database.userHimselfChangeAvatar.type";
import { userHimselfChangeAvatarInitialState } from "./initialState/database.userHimselfChangeAvatar.initialState";

// metchods
const userByIdGetPreview: (id: number) => Promise<UserByIdType> = async (id: number): Promise<UserByIdType> => await fetchGraphQLAPI(userByIdQuery, { variables: { id } });

const userGetListPreview: (page: number) => Promise<UserGetListType> = async (page: number): Promise<UserGetListType> => await fetchGraphQLAPI(userGetListQuery, { variables: { page: (page - 1) * 10 } });

const userSubscriptionStatusGet: (idUser: number, authorization: string) => Promise<UserSubscriptionStatusType> = async (idUser: number, authorization: string): Promise<UserSubscriptionStatusType> => {
  return await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/user/${idUser}/subscribe`, authorization });
};

const userSubscriptionToggleGet: (idUser: number, authorization: string) => Promise<UserSubscriptionStatusType> = async (idUser: number, authorization: string): Promise<UserSubscriptionStatusType> =>
  await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/user/${idUser}/subscribe/toggle`, authorization });

const userStatisticsGet: (idUser: number) => Promise<UserStatisticsType> = async (idUser: number): Promise<UserStatisticsType> => await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/user/${idUser}/statistics` });

const userHimselfDataGetPreview: (authorization: string) => Promise<UserHimselfDataType> = async (authorization: string): Promise<UserHimselfDataType> => await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/user/himself/data`, authorization });

const userHimselfDataEditEmailGetPreview: (authorization: string, email: string) => Promise<UserHimselfDataEditEmailType> = async (authorization: string, email: string): Promise<UserHimselfDataEditEmailType> =>
  await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/user/himself/data/email`, authorization, body: { email } });

const userHimselfDataEditPasswordGetPreview: (authorization: string, password: string) => Promise<UserHimselfDataEditPasswordType> = async (authorization: string, password: string): Promise<UserHimselfDataEditPasswordType> =>
  await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/user/himself/data/password`, authorization, body: { password } });

const userHimselfDataEditPublicGetPreview: (authorization: string, data: { username?: string; about?: string; website?: string; youtube?: string; instagram?: string; tiktok?: string; github?: string; city?: string; country?: string }) => Promise<UserHimselfDataEditPublicType> = async (
  authorization: string,
  data: { username?: string; about?: string; website?: string; youtube?: string; instagram?: string; tiktok?: string; github?: string; city?: string; country?: string }
): Promise<UserHimselfDataEditPublicType> => await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/user/himself/data/public`, authorization, body: { ...data } });

const userHimselfDeleteTypeGetPreview: (authorization: string) => Promise<UserHimselfDeleteType> = async (authorization: string): Promise<UserHimselfDeleteType> => await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/user/himself/data/delete`, authorization });

// userHimselfChangeAvatar;

export type { UserByIdType, UserGetListType, UserSubscriptionStatusType, UserSubscriptionToggleType, UserStatisticsType, UserHimselfDataType, UserHimselfDataEditEmailType, UserHimselfDataEditPasswordType, UserHimselfDataEditPublicType, UserHimselfDeleteType, UserHimselfChangeAvatarType };
export {
  userByIdGetPreview,
  userByIdInitialState,
  userGetListPreview,
  userGetListInitialState,
  userSubscriptionStatusGet,
  userSubscriptionStatusInitialState,
  userSubscriptionToggleGet,
  userSubscriptionToggleInitialState,
  userStatisticsGet,
  userStatisticsInitialState,
  userHimselfDataGetPreview,
  userHimselfDataInitialState,
  userHimselfDataEditEmailGetPreview,
  userHimselfDataEditEmailInitialState,
  userHimselfDataEditPasswordGetPreview,
  userHimselfDataEditPasswordInitialState,
  userHimselfDataEditPublicGetPreview,
  userHimselfDataEditPublicInitialState,
  userHimselfDeleteTypeGetPreview,
  userHimselfDeleteInitialState,
  userHimselfChangeAvatarInitialState,
};
