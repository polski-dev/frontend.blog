import { type } from "os";

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
  _urlAPI?: string;
  _standardMessage: standardMessageType;

  constructor(urlAPI: string = "https://www.polski.dev", type: string) {
    this._type = type;
    this._urlAPI = urlAPI;
    this._standardMessage = standardMessageInitial;
  }

  async queryAPI(link: string) {
    const response = await fetch(link)
      .then((r) => r.json())
      .then((d) => {
        if (this._type === "searchUser") {
          let user = {
            data: d,
            meta: {
              pagination: {
                page: 1,
                pageSize: 10,
                pageCount: Math.ceil(d.length / 10),
                total: d.length,
              },
            },
          };

          user.data.forEach((item: any) => (item.type = "user"));
          return user;
        }
        if (!!d.data.length) {
          d.data.forEach((item: any) => (item.type = this._type === "searchArticle" ? "article" : this._type === "searchVideo" ? "video" : this._type === "searchTag" ? "tag" : this._type));
          return d;
        }

        return Object.assign({ type: this._type }, this._standardMessage);
      })
      .catch((err) => Object.assign({ err: true, message: err }, this._standardMessage));

    return response;
  }

  async query(link: string) {
    const response = await fetch(link)
      .then((r) => r.json())
      .then((d) => d)
      .catch((err) => Object.assign({ err: true, message: err }, this._standardMessage));

    return response;
  }

  contentQuery(page: number, query?: string) {
    return (async () => {
      let linkAPI = "";

      switch (this._type) {
        case "all":
          linkAPI = `/api/content/${page}`;
          break;
        case "video":
          linkAPI = `/api/content/video/${page}`;
          break;
        case "videoWaitingRoom":
          linkAPI = `/api/content/video/waitingroom/${page}`;
          break;
        case "article":
          linkAPI = `/api/content/article/${page}`;
          break;
        case "articleWaitingRoom":
          linkAPI = `/api/content/article/waitingroom/${page}`;
          break;
        case "search":
        case "searchTag":
        case "searchUser":
        case "searchVideo":
        case "searchArticle":
          linkAPI = `/api/search/${page}/${query}`;
          break;
        case "tag":
          linkAPI = `/api/tag/${page}`;
          break;
      }

      return this.query(linkAPI);
    })();
  }

  contentQueryAPI(page: number, query?: string) {
    return (async () => {
      let linkAPI = "";

      switch (this._type) {
        case "article":
          linkAPI = `${this._urlAPI}/api/article?pagination[page]=${page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=false`;
          break;

        case "articleWaitingRoom":
          linkAPI = `${this._urlAPI}/api/article?pagination[page]=${page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=true`;
          break;

        case "video":
          linkAPI = `${this._urlAPI}/api/videos?pagination[page]=${page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=false`;
          break;

        case "videoWaitingRoom":
          linkAPI = `${this._urlAPI}/api/videos?pagination[page]=${page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[waitingroom][$eq]=true`;
          break;

        case "searchArticle":
          linkAPI = `${this._urlAPI}/api/article?pagination[page]=${page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort=views%3Adesc&filters[title][$containsi]=${query}`;
          break;

        case "searchVideo":
          linkAPI = `${this._urlAPI}/api/videos?pagination[page]=${page}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort=views%3Adesc&filters[title][$containsi]=${query}`;
          break;

        case "searchUser":
          linkAPI = `${this._urlAPI}/api/users?pagination[page]=${page}&pagination[pageSize]=10&populate=avatar&sort[1]=createdAt%3Adesc&filters[username][$containsi]=${query}`;
          break;

        case "searchTag":
          linkAPI = `${this._urlAPI}/api/tag?pagination[page]=${page}&pagination[pageSize]=10&populate=cover&sort=views%3Adesc&filters[title][$containsi]=${query}`;
          break;
      }

      return this.queryAPI(linkAPI);
    })();
  }

  tagQueryAPI(page: number) {
    return (async () => {
      let linkAPI = "";

      switch (this._type) {
        case "all":
          linkAPI = `${this._urlAPI}/api/tag?pagination[page]=${page}&pagination[pageSize]=10&populate=cover&sort=views%3Adesc`;
          break;
      }

      return this.queryAPI(linkAPI);
    })();
  }
}

export default dataFromAPI;
