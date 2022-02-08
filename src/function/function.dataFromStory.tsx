class dataFromStory {
  _type: string;

  constructor(type: string) {
    this._type = type;
  }

  readData(story: any) {
    switch (this._type) {
      case "article":
        return story.article.all.articles;
      case "articleWaitingRoom":
        return story.article.waitingRoom.articles;
      case "video":
        return story.video.all.videos;
      case "videoWaitingRoompage":
        return story.video.waitingRoom.videos;
      default:
        return [];
    }
  }

  checkIsAnyNextContent(story: any) {
    switch (this._type) {
      case "article":
        if (story.article.all.pageActive >= story.article.all.pages) return false;
        return true;
      case "articleWaitingRoom":
        if (story.article.waitingRoom.pageActive >= story.article.waitingRoom.pages) return false;
        return true;
      case "video":
        if (story.video.all.pageActive >= story.video.all.pages) return false;
        return true;
      case "videoWaitingRoom":
        if (story.video.waitingRoom.pageActive >= story.video.waitingRoom.pages) return false;
        return true;
      default:
        new Error('I not understand type in function ,,checkIsAnyNextContent"');
        return false;
    }
  }
}

export default dataFromStory;
