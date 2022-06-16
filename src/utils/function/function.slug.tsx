class setSlug {
  _type: string;

  constructor(type: string) {
    this._type = type;
  }

  get setContent() {
    switch (this._type) {
      case "article":
      case "articleWaitingRoom":
        return "a";
      case "user":
        return "u";
      case "tag":
        return "t";
      case "video":
      case "videoWaitingRoom":
        return "v";
    }
  }

  get setPage() {
    switch (this._type) {
      case "article" || "articleWaitingRoom":
        return "";
      case "video" || "videoWaitingRoom":
        return "v";
      case "tag":
        return "t";
    }
  }
}

export default setSlug;
