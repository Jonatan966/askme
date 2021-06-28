import { Toaster } from 'react-hot-toast'
import { useTheme } from 'styled-components'

export function AppToast() {
  const { colors } = useTheme()
  const AppToastStyles = {
    background: colors.backgroundPrimary,
    color: colors.textPrimary
  }

  return (
    <Toaster toastOptions={{
      style: AppToastStyles
    }} />
  )
}
