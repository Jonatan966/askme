import { useContext } from "react";
import { FC, useState } from "react";
import { createContext } from "react";

type CurrentThemeProps = 'light' | 'dark'

type ThemeProps = {
  currentTheme: CurrentThemeProps;
  toggleTheme: () => void
}

const ThemeContext = createContext({} as ThemeProps)

export const ThemeProvider: FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<CurrentThemeProps>('dark')

  const toggleTheme = () => setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
