import { Toaster } from 'react-hot-toast'
import { useTheme } from 'styled-components'

import './styles.scss'

export function AppToast() {
  const { currentTheme } = useTheme()

  return (
    <Toaster toastOptions={
      currentTheme === 'dark'
        ? { className: 'app-toast-dark' }
        : {}
    } />
  )
}
