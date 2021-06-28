import { InputHTMLAttributes } from 'react'
import { TextInputContainer } from './styles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function TextInput({ ...props }: TextInputProps) {
  return (
    <TextInputContainer {...props} />
  )
}
