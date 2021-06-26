import { SpinnerContainer } from './styles'

interface SpinnerProps {
  className?: string;
}

export function Spinner({ className = '' }: SpinnerProps) {
  return (
    <SpinnerContainer className={className}/>
  )
}
