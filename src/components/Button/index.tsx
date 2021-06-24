import { useTheme } from "@hooks/useTheme"
import { ButtonHTMLAttributes } from "react"

import './styles.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
}

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  const { currentTheme } = useTheme()

  return (
    <button
      {...props}
      className={`button ${isOutlined ? 'outlined' : ''} ${props.className ? props.className : ''} ${currentTheme}`}
    />
  )
}
