import { Button } from '@components/Button'

import moonImg from '@assets/images/moon.svg'
import sunImg from '@assets/images/sun.svg'
import { useTheme } from '@hooks/useTheme'

export function ThemeSwitcher() {
  const { toggleTheme, currentTheme } = useTheme()

  const themes = {
    dark: sunImg,
    light: moonImg
  }

  return (
    <Button onClick={toggleTheme} title={`Trocar para tema ${currentTheme === 'light' ? 'escuro' : 'claro'}`}>
      <img src={themes[currentTheme]} alt={currentTheme} />
    </Button>
  )
}
