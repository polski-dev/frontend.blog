import { createContext, useState } from "react";

export type GlobalContentMenu = {
  showMenu: boolean;
  setShowMenu: (state: boolean) => void;
};

export const MenuContext = createContext<GlobalContentMenu>({
  showMenu: false,
  setShowMenu: (): void => {},
});

type ProviderMenuType = {
  children?: JSX.Element | string;
};

export default function ProviderMenu({ children }: ProviderMenuType) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
