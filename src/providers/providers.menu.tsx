import { createContext, useState, useEffect } from "react";

export type GlobalContentMenu = {
  showMenu: boolean;
  setShowMenu: (state: boolean) => void;
  powerMenu: boolean;
  setPowerMenu: (state: boolean) => void;
};

export const MenuContext = createContext<GlobalContentMenu>({
  showMenu: false,
  setShowMenu: (): void => {},
  powerMenu: false,
  setPowerMenu: (): void => {},
});

type ProviderMenuType = {
  children?: JSX.Element | string;
};

export default function ProviderMenu({ children }: ProviderMenuType) {
  const [showMenu, setShowMenu] = useState(false);
  const [powerMenu, setPowerMenu] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        showMenu,
        setShowMenu,
        powerMenu,
        setPowerMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
