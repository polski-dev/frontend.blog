export const selectHeader = (type: string, search?: string) => {
  switch (type) {
    case "all":
      return "Wszystko";
    case "allWaitingRoom":
      return "Poczekalnia";
    case "video":
      return "Video";
    case "videoWaitingRoom":
      return "Poczekalnia video";
    case "article":
      return "Artykuły";
    case "articleWaitingRoom":
      return "Poczekalnia artykułów";
    case "search":
      return `Wynik wyszukiwania: ${search}`;
    case "searchArticleShort":
      return `Wynik wyszukiwania artykułów: ${search}`;
    case "searchVideoShort":
      return `Wynik wyszukiwania video: ${search}`;
    case "searchTagShort":
      return `Wynik wyszukiwania tagów: ${search}`;
    case "searchUserShort":
      return `Wynik wyszukiwania użytkowników: ${search}`;
  }
};
