import { AllTagStateType } from "./store.slice.tag.type";

const initialState: AllTagStateType = {
  all: {
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
  },
};

export default initialState;
