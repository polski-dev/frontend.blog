export default async function fetchAPI({ path, body = {}, authorization = "" }: { path: string; body?: {}; authorization?: string }): Promise<any> {
  const res = await fetch(path, {
    method: "POST",
    headers: new Headers({
      Authorization: authorization,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(body),
  });

  const json = await res.json();

  return json;
}
