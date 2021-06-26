import { ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { darkColors } from '../styles/themes/dark'
import { lightColors } from '../styles/themes/light'

const colorThemes = {
  dark: darkColors,
  light: lightColors
}

type CurrentThemeProps = 'dark' | 'light'

interface AppThemeProviderProps {
  children: ReactNode;
}

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<CurrentThemeProps>(() => {
    const storagedCurrentTheme = localStorage.getItem('@letmeask:theme')

    if (!['dark', 'light'].includes(storagedCurrentTheme || '')) {
      return 'light'
    }

    return storagedCurrentTheme as CurrentThemeProps
  })

  function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'

    setCurrentTheme(newTheme)
    localStorage.setItem('@letmeask:theme', newTheme)
  }

  return (
    <ThemeProvider theme={{
      ...colorThemes[currentTheme],
      toggleTheme
    }}>
      {children}
    </ThemeProvider>
  )
}
