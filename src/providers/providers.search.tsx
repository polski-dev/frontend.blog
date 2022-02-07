import { createContext, useState, useEffect } from "react";

export type GlobalContentSearch = {
  searchQuery: string;
  searchContent: any[];
  setSearchQuery: (query: string) => void;
  setSearchContent: (content: []) => void;
};

export const SearchContext = createContext<GlobalContentSearch>({
  searchQuery: "",
  searchContent: [],
  setSearchQuery: (query: string) => {},
  setSearchContent: (content: []) => {},
});

type ProviderMenuType = {
  children?: JSX.Element | string;
};

export default function ProviderSearch({ children }: ProviderMenuType) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchContent, setSearchContent] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchContent,
        setSearchContent,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
