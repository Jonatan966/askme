import { useTheme } from "@hooks/useTheme"
import { Toaster } from "react-hot-toast"

import './styles.scss'

export function AppToast() {
  const { currentTheme } = useTheme()

  return (
    <Toaster toastOptions={currentTheme === 'dark' ? {
      className:'app-toast-dark'
    } : {}} />
  )
}