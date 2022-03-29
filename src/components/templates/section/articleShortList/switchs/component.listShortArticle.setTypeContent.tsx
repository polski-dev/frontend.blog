export const setTypeContent = (type: string) => {
  switch (type) {
    case "all":
    case "search":
    case "allWithTag":
    case "allFromUser":
    case "allWaitingRoom":
      return "all";
    case "video":
    case "videoWithTag":
    case "searchVideoShort":
    case "videoWaitingRoom":
      return "video";
    case "article":
    case "articleWithTag":
    case "searchArticleShort":
    case "articleWaitingRoom":
      return "article";
    case "tag":
    case "searchTagShort":
    case "tagWaitingRoom":
      return "tag";
    case "user":
    case "userWithTag":
    case "searchUserShort":
    case "userWaitingRoom":
      return "user";
    default:
      return "all";
  }
};
