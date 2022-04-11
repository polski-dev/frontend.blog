export default async function fetchAPISendFile({ path, files, authorization }: { path: string; files: [{ name: string; type: string; file: any }]; authorization: string }): Promise<any> {
  const form = new FormData();
  files.forEach((item) => {
    form.append(item.type, item.file);
    form.append("name", item.name);
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
