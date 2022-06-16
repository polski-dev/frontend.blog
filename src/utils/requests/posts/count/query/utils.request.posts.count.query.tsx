import axios from "axios";

export async function postsCountBackEnd() {
  const res = await axios.get(process.env.BACKEND_API_URL + `/api/post/count`);
  return !!res?.data?.error ? res.data : res?.data;
}

export async function postsCountFrontEnd() {
  const res = await axios.get(`/api/post/count`);
  return !!res?.data?.error ? res.data : res?.data;
}
