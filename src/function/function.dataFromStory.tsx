class dataFromStory {
  _type: string;

  constructor(type: string) {
    this._type = type;
  }

  readData(story: any) {
    switch (this._type) {
      case "article":
        return story.article.best.articles;
      default:
        return [];
    }
  }

  checkIsAnyNextContent(story: any) {
    switch (this._type) {
      case "article":
        if (story.article.best.pageActive >= story.article.best.pages) return false;
        return true;
      default:
        new Error('I not understand type in function ,,checkIsAnyNextContent"');
        return false;
    }
  }
}

export default dataFromStory;
