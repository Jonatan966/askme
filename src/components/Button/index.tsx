import { Spinner } from '@components/Spinner'
import { useTheme } from '@hooks/useTheme'
import { ButtonHTMLAttributes } from 'react'

import './styles.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  isLoading?: boolean;
}

export function Button({ isOutlined = false, isLoading, ...props }: ButtonProps) {
  const { currentTheme } = useTheme()

  return (
    <button
      {...props}
      {...(isLoading && {
        children: <Spinner />,
        type: 'button',
        onClick: () => undefined,
        disabled: false
      })}
      className={`button ${isOutlined ? 'outlined' : ''} ${props.className ? props.className : ''} ${currentTheme}`}
    />
  )
}
