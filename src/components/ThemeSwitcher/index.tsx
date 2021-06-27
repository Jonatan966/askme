import { useTheme } from 'styled-components'

import { Button } from '@components/Button'

import { ReactComponent as MoonImg } from '@assets/images/moon.svg'
import { ReactComponent as SunImg } from '@assets/images/sun.svg'

interface ThemeSwitcherType {
  showLabel?: boolean;
}

export function ThemeSwitcher({ showLabel = false }: ThemeSwitcherType) {
  const { toggleTheme, currentTheme } = useTheme()

  const themes = {
    dark: <SunImg/>,
    light: <MoonImg/>
  }

  const translatedCurrentTheme = currentTheme === 'light' ? 'escuro' : 'claro'

  return (
    <Button
      onClick={toggleTheme}
      title={`Trocar para tema ${translatedCurrentTheme}`}
      isOutlined
    >
      {showLabel && `Trocar para tema ${translatedCurrentTheme}`}
      {themes[currentTheme]}
    </Button>
  )
}
