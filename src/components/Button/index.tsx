import { ButtonHTMLAttributes } from 'react'

import { Spinner } from '@components/Spinner'
import { useTheme } from '@hooks/useTheme'

import { ButtonContainer } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  isLoading?: boolean;
}

export function Button({ isOutlined = false, isLoading, ...props }: ButtonProps) {
  const { currentTheme } = useTheme()

  return (
    <ButtonContainer
      {...props}
      {...(isLoading && {
        children: <Spinner />,
        type: 'button',
        onClick: () => undefined,
        disabled: false
      })}
      className={`${isOutlined ? 'outlined' : ''} ${props.className ? props.className : ''} ${currentTheme}`}
    />
  )
}
