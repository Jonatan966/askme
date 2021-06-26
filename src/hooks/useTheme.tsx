import { useContext, useState, createContext, ReactNode } from 'react'

type CurrentThemeProps = 'light' | 'dark'

type ThemeProps = {
  currentTheme: CurrentThemeProps;
  toggleTheme: () => void
}

type ThemeProviderProps = {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeProps)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<CurrentThemeProps>(() => {
    const storagedCurrentTheme = localStorage.getItem('@letmeask:theme')

    if (!['dark', 'light'].includes(storagedCurrentTheme || '')) {
      return 'light'
    }

    return storagedCurrentTheme as CurrentThemeProps
  })

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    setCurrentTheme(newTheme)

    localStorage.setItem('@letmeask:theme', newTheme)
  }

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
