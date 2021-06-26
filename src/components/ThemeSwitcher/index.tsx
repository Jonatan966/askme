import { useTheme } from 'styled-components'

import { Button } from '@components/Button'

import { ReactComponent as MoonImg } from '@assets/images/moon.svg'
import { ReactComponent as SunImg } from '@assets/images/sun.svg'

export function ThemeSwitcher() {
  const { toggleTheme, currentTheme } = useTheme()

  const themes = {
    dark: <SunImg/>,
    light: <MoonImg/>
  }

  return (
    <Button onClick={toggleTheme} title={`Trocar para tema ${currentTheme === 'light' ? 'escuro' : 'claro'}`}>
      {themes[currentTheme]}
    </Button>
  )
}
