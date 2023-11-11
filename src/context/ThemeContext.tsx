import { createContext, useState } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextProps = {
   theme: string;
  setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<string>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
