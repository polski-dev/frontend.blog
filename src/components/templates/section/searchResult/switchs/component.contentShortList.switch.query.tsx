import { searchFrontEnd, SearchType } from "utils/query/search";
import { ContentEnum } from "types/database/types.database.contentEnum";

export const query = async ({ typ, content, page, query }: { typ: ContentEnum; content?: SearchType; page: number; query: string }): Promise<SearchType | undefined> => {
  switch (typ) {
    case ContentEnum.searchTag:
    case ContentEnum.searchPost:
    case ContentEnum.searchUser:
      let res: SearchType = await searchFrontEnd({ page, query });
      if (res?.data?.posts?.data && res?.data?.tags?.data && res?.data?.users?.data && content?.data?.posts?.data && content?.data?.tags?.data && content?.data?.users?.data) {
        res.data.posts.data = [...content?.data?.posts?.data, ...res?.data?.posts?.data];
        res.data.tags.data = [...content?.data?.tags?.data, ...res?.data?.tags?.data];
        res.data.users.data = [...content?.data?.users?.data, ...res?.data?.users?.data];
      }
      return res;
  }
};
