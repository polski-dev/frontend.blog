import { TagStateType } from "types/types.tagState";

const initialStateTag: TagStateType = {
  home: {
    data: [],
    meta: {
      pagination: {
        page: 1,
        pageSize: 10,
        pageCount: 1,
        total: 0,
      },
    },
  },
};

export default initialStateTag;
