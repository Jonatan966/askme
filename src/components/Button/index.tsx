import { ButtonHTMLAttributes } from 'react'

import { Spinner } from '@components/Spinner'

import { ButtonContainer } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  isLoading?: boolean;
}

export function Button({ isOutlined = false, isLoading, ...props }: ButtonProps) {
  return (
    <ButtonContainer
      {...props}
      {...(isLoading && {
        children: <Spinner />,
        type: 'button',
        onClick: () => undefined,
        disabled: false
      })}
      className={`${isOutlined ? 'outlined' : ''} ${props.className ? props.className : ''}`}
    />
  )
}
