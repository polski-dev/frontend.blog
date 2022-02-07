import { createContext, useState, useEffect } from "react";

export type GlobalContentMenu = {
  modeMenu: string;
  setModeMenu: (state: string) => void;
  powerMenu: boolean;
  setPowerMenu: (state: boolean) => void;
};

export const MenuContext = createContext<GlobalContentMenu>({
  modeMenu: "hidde",
  setModeMenu: () => {},
  powerMenu: false,
  setPowerMenu: () => {},
});

type ProviderMenuType = {
  children?: JSX.Element | string;
};

export default function ProviderMenu({ children }: ProviderMenuType) {
  const [modeMenu, setModeMenu] = useState("hidde");
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
