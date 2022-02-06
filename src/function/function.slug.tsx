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
    }
  }

  get setContentApi() {
    switch (this._type) {
      case "article":
        return "/api/articles/";
    }
  }
}

export default setSlug;
