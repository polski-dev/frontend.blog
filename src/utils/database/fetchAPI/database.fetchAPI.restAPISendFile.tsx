export default async function fetchAPISendFile({ path, name, file, body, authorization }: { path: string; name: string; file: File; body?: { title?: string; content?: string; type?: string; tags?: string; youtube?: string }; authorization: string }): Promise<any> {
  let data = new FormData();
  data.append(name, file);
  body?.type && data.append("type", body?.type);
  body?.tags && data.append("tags", body?.tags);
  body?.title && data.append("title", body?.title);
  body?.content && data.append("content", body?.content);
  body?.youtube && data.append("youtube", body?.youtube);

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
