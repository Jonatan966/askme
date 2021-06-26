import { ReactComponent as EmptyQuestionsImg } from '@assets/images/empty-questions.svg'

import './styles.scss'

interface CenteredMessageProps {
  title: string;
  message: string;
}

export function CenteredMessage({ message, title }: CenteredMessageProps) {
  return (
    <div className="centered-message">
      <EmptyQuestionsImg/>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  )
}
