import { forwardRef, InputHTMLAttributes } from 'react'
import { TextInputContainer } from './styles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInputComponent({ ...props }, ref) {
    return (
      <TextInputContainer {...props} />
    )
  }
)
