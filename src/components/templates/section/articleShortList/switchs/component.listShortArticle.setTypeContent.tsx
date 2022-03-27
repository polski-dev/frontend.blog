export const setTypeContent = (type: string) => {
  switch (type) {
    case "all":
    case "search":
    case "allFromUser":
    case "allWaitingRoom":
      return "all";
    case "video":
    case "searchVideoShort":
    case "videoWaitingRoom":
      return "video";
    case "article":
    case "searchArticleShort":
    case "articleWaitingRoom":
      return "article";
    case "tag":
    case "searchTagShort":
    case "tagWaitingRoom":
      return "tag";
    case "user":
    case "searchUserShort":
    case "userWaitingRoom":
      return "user";
    default:
      return "all";
  }
};
