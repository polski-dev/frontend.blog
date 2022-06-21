import axios, { AxiosResponse } from "axios";
import { UserType } from "types/database/types.database.user";

export async function usersFindBackEnd({ page = 1 }: { page?: number }) {
  const count: AxiosResponse<number> = await axios.get(process.env.BACKEND_API_URL + `/api/users/count`);
  const users: AxiosResponse<UserType[]> = await axios.get(process.env.BACKEND_API_URL + `/api/users?start=${page - 1}&limit=10`);

  return {
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
}

export async function userFindOneBackEnd({ id }: { id: number }) {
  const user: AxiosResponse<any> = await axios.get(process.env.BACKEND_API_URL + `/api/users/${id}?populate=avatar&populate=skilks&populate=learn`);
  return {
    data: { id: user?.data.id, attributes: { ...user?.data, avatar: { data: { id: user?.data?.avatar.id, attributes: { ...user?.data?.avatar } } } } },
  };
}
