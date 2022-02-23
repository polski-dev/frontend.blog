export interface ArticeWithOnlyTitleType {
  data: {
    article: {
      data:
        | {
            id: string;
            attributes: {
              title: string;
            };
          }[]
        | [];
      meta: {
        pagination: {
          pageCount: number;
        };
      };
    };
  };
}
