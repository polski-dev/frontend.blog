export default async function fetchAPISendFile({ path, files, authorization }: { path: string; files: []; authorization: string }): Promise<any> {
  const form = new FormData();

  files.forEach((item) => {
    form.append(item.type, item.file);
  });

  const res = await fetch(path, {
    method: "POST",
    headers: new Headers({
      Authorization: authorization,
      "Content-Type": "multipart/form-data",
    }),
  });

  const json = await res.json();

  return json;
}
