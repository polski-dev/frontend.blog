class setSlug {
  _type: string;

  constructor(type: string) {
    this._type = type;
  }

  get setContent() {
    switch (this._type) {
      case "article":
        return "a";
      case "user":
        return "u";
      case "tag":
        return "t";
      case "video":
        return "v";
    }
  }

  get setPage() {
    switch (this._type) {
      case "article":
        return "";
      case "video":
        return "v";
      case "tag":
        return "t";
    }
  }

  get setContentApi() {
    switch (this._type) {
      case "article":
        return "/api/article/";
      case "articleWaitingRoom":
        return "/api/article/waitingroom/";
      case "video":
        return "/api/video/";
      case "videoWaitingRoom":
        return "/api/video/waitingroom/";
    }
  }
}

export default setSlug;
