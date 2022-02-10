import { createContext, useState, useEffect } from "react";

export type GlobalContentMenu = {
  modeMenu: string;
  setModeMenu: (state: string) => void;
  powerMenu: boolean;
  setPowerMenu: (state: boolean) => void;
};

export const MenuContext = createContext<GlobalContentMenu>({
  modeMenu: "display",
  setModeMenu: () => {},
  powerMenu: false,
  setPowerMenu: () => {},
});

type ProviderMenuType = {
  children?: JSX.Element | string;
};

export default function ProviderMenu({ children }: ProviderMenuType) {
  const [modeMenu, setModeMenu] = useState("display");
  const [powerMenu, setPowerMenu] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        modeMenu,
        setModeMenu,
        powerMenu,
        setPowerMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
