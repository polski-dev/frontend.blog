export default async function fetchAPI({ path, body = {} }: { path: string; body?: {} }): Promise<any> {
  const res = await fetch(`/api/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await res.json();

  return json;
}
