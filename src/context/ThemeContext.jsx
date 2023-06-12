import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const initialTheme = getInitialTheme();
  const [isDark, setIsDark] = useState(initialTheme);
  const changeTheme = () => setIsDark((dark) => !dark);

  return (
    <ThemeContext.Provider value={{ isDark, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function getInitialTheme() {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme ? JSON.parse(storedTheme) : false;
}
