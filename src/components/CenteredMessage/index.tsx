import { ReactComponent as EmptyQuestionsImg } from '@assets/images/empty-questions.svg'

import { CenteredMessageContainer } from './styles'

interface CenteredMessageProps {
  title: string;
  message: string;
}

export function CenteredMessage({ message, title }: CenteredMessageProps) {
  return (
    <CenteredMessageContainer>
      <EmptyQuestionsImg/>
      <h1>{title}</h1>
      <p>{message}</p>
    </CenteredMessageContainer>
  )
}
