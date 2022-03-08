export default async function fetchAPI({ path, body, authorization = "", method = "POST" }: { path: string; body?: {}; authorization?: string; method?: string }): Promise<any> {
  const res = await fetch(
    path,
    method === "GET"
      ? {
          method: method,
          headers: new Headers({
            Authorization: authorization,
            "Content-Type": "application/json",
          }),
        }
      : {
          method: method,
          headers: new Headers({
            Authorization: authorization,
            "Content-Type": "application/json",
          }),
          body: JSON.stringify(body),
        }
  );

  const json = await res.json();

  return json;
}
