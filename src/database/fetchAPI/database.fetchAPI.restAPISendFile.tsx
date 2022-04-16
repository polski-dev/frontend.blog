export default async function fetchAPISendFile({ path, name, file, authorization }: { path: string; name: string; file: File; authorization: string }): Promise<any> {
  let data = new FormData();
  data.append(name, file);

  const res = await fetch(path, {
    method: "POST",
    headers: {
      Authorization: authorization,
    },
    body: data,
  });

  const json = await res.json();

  return json;
}
