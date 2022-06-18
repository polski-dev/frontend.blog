import { postsFindFrontEnd, PostsFindType } from "utils/query/posts/find";
import { SectionContentShortListEnum } from "../types/component.contentShortList.types";

export const query = async ({ typ, content, page, id }: { typ: SectionContentShortListEnum; content?: PostsFindType; page: number; id?: number }): Promise<PostsFindType | undefined> => {
  switch (typ) {
    case SectionContentShortListEnum.posts:
      const res: PostsFindType = await postsFindFrontEnd({ page });
      if (res?.data && content?.data) res.data = [...content?.data, ...res.data];
      return res;
      break;
  }
};
