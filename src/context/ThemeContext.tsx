import { createContext, useState } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextProps = {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  toggle: false,
  setToggle: () => {},
});

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <ThemeContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};