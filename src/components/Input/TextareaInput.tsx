import { TextareaHTMLAttributes } from 'react'
import { TextareaInputContainer } from './styles'

interface TextareaInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {

}

export function TextareaInput({ ...props }: TextareaInputProps) {
  return (
    <TextareaInputContainer {...props} />
  )
}
