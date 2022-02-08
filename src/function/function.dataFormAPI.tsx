require("dotenv").config();

const standardMessageInitial = {
  data: [],
  meta: {
    pagination: {
      page: 1,
      pageSize: 10,
      pageCount: 1,
      total: 0,
    },
  },
};

type standardMessageType = {
  data: any[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

class dataFromAPI {
  _type: string;
  _page: number;
  _standardMessage: standardMessageType;

  constructor(type: string, page: number) {
    this._type = type;
    this._page = page;
    this._standardMessage = standardMessageInitial;
  }

  get contentQuery() {
    return (async () => {
      let linkAPI = "";

      switch (this._type) {
        case "article":
          linkAPI = `${process.env.URL_API}/api/article?pagination[page]=${this._page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=false`;
          break;
        case "articleWaitingRoom":
          linkAPI = `${process.env.URL_API}/api/article?pagination[page]=${this._page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=true`;
          break;
        case "video":
          linkAPI = `${process.env.URL_API}/api/videos?pagination[page]=${this._page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=false`;
          break;
        case "videoWaitingRoom":
          linkAPI = `${process.env.URL_API}/api/videos?pagination[page]=${this._page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=true`;
          break;
      }

      const response = await fetch(linkAPI)
        .then((r) => r.json())
        .then((d) => {
          if (!!d.data.length) {
            d.data.forEach((item: any) => (item.type = this._type));
            return d;
          }

          return Object.assign({ type: this._type }, this._standardMessage);
        })
        .catch((err) => Object.assign({ err: true, message: err }, this._standardMessage));

      return response;
    })();
  }
}

export default dataFromAPI;
