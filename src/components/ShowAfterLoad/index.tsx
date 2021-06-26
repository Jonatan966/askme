import { ReactNode } from 'react'
import { Spinner } from '@components/Spinner'

import './styles.scss'

interface ShowAfterLoadProps {
  isLoading: boolean;
  children: ReactNode;
}

export function ShowAfterLoad({ isLoading, children }: ShowAfterLoadProps) {
  if (isLoading) {
    return <Spinner className='center-spinner' />
  }

  return <>{children}</>
}
