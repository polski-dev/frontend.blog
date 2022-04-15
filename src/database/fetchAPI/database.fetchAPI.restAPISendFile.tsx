import FormData from "form-data";

export default async function fetchAPISendFile({ path, name, file, authorization }: { path: string; name: string; file: FormData; authorization: string }): Promise<any> {
  const form = new FormData();
  form.append(name, file);

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
