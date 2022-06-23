import axios from "axios";

export async function postsCountBackEnd(id?: number) {
  const res = id ? await axios.get(process.env.BACKEND_API_URL + `/api/post/count/${id}`) : await axios.get(process.env.BACKEND_API_URL + `/api/post/count`);
  return !!res?.data?.error ? res.data : res?.data;
}

export async function postsCountFrontEnd(id?: number) {
  let res = await axios.get(`/api/post/count/${id ? id : ""}`);
  return !!res?.data?.error ? res.data : res?.data;
}
