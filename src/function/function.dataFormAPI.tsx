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
  _urlAPI?: string;
  _type: string;
  _page: number;
  _standardMessage: standardMessageType;

  constructor(urlAPI: string = "", type: string, page: number) {
    this._urlAPI = urlAPI;
    this._type = type;
    this._page = page;
    this._standardMessage = standardMessageInitial;
  }

  async response(link: string) {
    const response = await fetch(link)
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
  }

  get contentQuery() {
    return (async () => {
      let linkAPI = "";

      switch (this._type) {
        case "article":
          linkAPI = `${this._urlAPI}/api/article?pagination[page]=${this._page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=false`;
          break;
        case "articleWaitingRoom":
          linkAPI = `${this._urlAPI}/api/article?pagination[page]=${this._page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=true`;
          break;
        case "video":
          linkAPI = `${this._urlAPI}/api/videos?pagination[page]=${this._page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=false`;
          break;
        case "videoWaitingRoom":
          linkAPI = `${this._urlAPI}/api/videos?pagination[page]=${this._page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=true`;
          break;
      }

      return this.response(linkAPI);
    })();
  }

  get contentQueryAPI() {
    return (async () => {
      let linkAPI = "";

      switch (this._type) {
        case "article":
          linkAPI = `${this._urlAPI}/api/article?pagination[page]=${this._page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=false`;
          break;
        case "articleWaitingRoom":
          linkAPI = `${this._urlAPI}/api/article?pagination[page]=${this._page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=true`;
          break;
        case "video":
          linkAPI = `${this._urlAPI}/api/videos?pagination[page]=${this._page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=false`;
          break;
        case "videoWaitingRoom":
          linkAPI = `${this._urlAPI}/api/videos?pagination[page]=${this._page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=true`;
          break;
      }

      return this.response(linkAPI);
    })();
  }

  get tagQueryAPI() {
    return (async () => {
      let linkAPI = "";

      switch (this._type) {
        case "all":
          linkAPI = `${this._urlAPI}/api/tag?pagination[page]=${this._page}&pagination[pageSize]=10&populate=cover&sort[1]=createdAt%3Adesc`;
          break;
      }

      return this.response(linkAPI);
    })();
  }
}

export default dataFromAPI;
