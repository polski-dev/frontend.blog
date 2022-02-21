import { contentSearchSugestInitialState, ContentSearchSugestType, contentInitialState, ContentType } from "./database.graphQL.index";

async function fetchAPI({ path, body = {} }: { path: string; body?: {} }): Promise<any> {
  const res = await fetch(`https://www.polski.dev/api/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }

  return json;
}

// search
const contentSearchSugestGetPreview: (search: string) => Promise<ContentSearchSugestType> = async (search: string): Promise<ContentSearchSugestType> =>
  await fetchAPI({ path: `search/0/${search}` });

// content
const contentGetPreview: (page: number, waitingroom: boolean) => Promise<ContentType> = async (page: number, waitingroom: boolean): Promise<ContentType> =>
  await fetchAPI({ path: `content/${page}`, body: { waitingroom } });

export type { ContentSearchSugestType, ContentType };
export { contentSearchSugestInitialState, contentSearchSugestGetPreview, contentInitialState, contentGetPreview };
