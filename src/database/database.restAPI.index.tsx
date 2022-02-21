import { contentSugestInitialState, ContentSugestType } from "./database.graphQL.index";

async function fetchAPI({ path }: { path: string }) {
  const res = await fetch(`/api/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }

  return json;
}

// search
const searchSugestGetPreview: (search: string) => Promise<ContentSugestType> = async (search: string): Promise<ContentSugestType> =>
  await fetchAPI({ path: `search/0/${search}` });

export type { ContentSugestType };
export { contentSugestInitialState, searchSugestGetPreview };
