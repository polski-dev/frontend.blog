export const setTypeContent = (type: string) => {
  switch (type) {
    case "all":
    case "search":
    case "allWaitingRoom":
      return "all";
    case "video":
    case "searchVideo":
    case "videoWaitingRoom":
      return "video";
    case "article":
    case "searchArticleShort":
    case "articleWaitingRoom":
      return "article";
    case "tag":
    case "searchTag":
    case "tagWaitingRoom":
      return "tag";
    case "user":
    case "searchUser":
    case "userWaitingRoom":
      return "user";
    default:
      return "all";
  }
};
