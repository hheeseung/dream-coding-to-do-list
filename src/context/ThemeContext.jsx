import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const changeTheme = () => setIsDark((dark) => !dark);

  return (
    <ThemeContext.Provider value={{ isDark, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
