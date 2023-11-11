import { createContext, useState, useEffect } from "react";

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
  const initialTheme = JSON.parse(
    localStorage.getItem("theme") || JSON.stringify("light")
  );
  const [theme, setTheme] = useState<string>(initialTheme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
