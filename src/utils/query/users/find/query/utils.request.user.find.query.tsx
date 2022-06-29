import axios, { AxiosResponse, AxiosError } from "axios";
import { UserType } from "types/database/types.database.user";
import { UsersFindType, UserFindOneType } from "./../types/utils.request.user.find.types";

export async function usersFindBackEnd({ page = 1 }: { page?: number }): Promise<UsersFindType> {
  let data = {};
  try {
    const count: AxiosResponse<number> = await axios.get(process.env.BACKEND_API_URL + `/api/users/count`);
    const users: AxiosResponse<UserType[]> = await axios.get(process.env.BACKEND_API_URL + `/api/users?start=${page - 1}&limit=10`);

    data = {
      data: users.data.map((user: any): UserType => {
        return { id: user.id, attributes: { ...user } };
      }),
      meta: {
        pagination: {
          page,
          pageSize: 10,
          pageCount: Math.ceil(count.data / 10),
          total: count.data,
        },
      },
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<UsersFindType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function userFindOneBackEnd({ id }: { id: number }) {
  let data = {};
  try {
    const user: AxiosResponse<any> = await axios.get(process.env.BACKEND_API_URL + `/api/users/${id}?populate=avatar&populate=skilks&populate=learn`);

    data = {
      data: { id: user?.data.id, attributes: { ...user?.data, avatar: { data: { id: user?.data?.avatar.id, attributes: { ...user?.data?.avatar } } } } },
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<any>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}
