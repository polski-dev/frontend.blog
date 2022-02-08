import { createContext, useState, useEffect } from "react";

export type GlobalContentSearch = {
  searchQuery: string;
  searchContent: {
    all: {
      data: any[];
      meta: {
        pagination: {
          page: number;
          pageSize: number;
          pageCount: number;
          total: number;
        };
      };
    };
    article: {
      data: any[];
      meta: {
        pagination: {
          page: number;
          pageSize: number;
          pageCount: number;
          total: number;
        };
      };
    };
    video: {
      data: any[];
      meta: {
        pagination: {
          page: number;
          pageSize: number;
          pageCount: number;
          total: number;
        };
      };
    };
    users: {
      data: any[];
      meta: {
        pagination: {
          page: number;
          pageSize: number;
          pageCount: number;
          total: number;
        };
      };
    };
    tags: {
      data: any[];
      meta: {
        pagination: {
          page: number;
          pageSize: number;
          pageCount: number;
          total: number;
        };
      };
    };
  };
  setSearchQuery: (query: string) => void;
  setSearchContent: (content: any) => void;
};

export const initialContextSearch = {
  all: {
    data: [],
    meta: {
      pagination: {
        page: 0,
        pageSize: 40,
        pageCount: 0,
        total: 0,
      },
    },
  },
  article: {
    data: [],
    meta: {
      pagination: {
        page: 0,
        pageSize: 10,
        pageCount: 0,
        total: 0,
      },
    },
  },
  video: {
    data: [],
    meta: {
      pagination: {
        page: 0,
        pageSize: 10,
        pageCount: 0,
        total: 0,
      },
    },
  },
  users: {
    data: [],
    meta: {
      pagination: {
        page: 0,
        pageSize: 10,
        pageCount: 0,
        total: 0,
      },
    },
  },
  tags: {
    data: [],
    meta: {
      pagination: {
        page: 0,
        pageSize: 10,
        pageCount: 0,
        total: 0,
      },
    },
  },
};

export const SearchContext = createContext<GlobalContentSearch>({
  searchQuery: "",
  searchContent: initialContextSearch,
  setSearchQuery: (query: string) => {},
  setSearchContent: (content: {}) => {},
});

type ProviderMenuType = {
  children?: JSX.Element | string;
};

export default function ProviderSearch({ children }: ProviderMenuType) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchContent, setSearchContent] = useState(initialContextSearch);

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
