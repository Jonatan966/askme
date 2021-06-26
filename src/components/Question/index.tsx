import { ReactNode } from 'react'
import classNames from 'classnames'

import { useTheme } from '@hooks/useTheme'

import { QuestionContainer } from './styles'

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false
}: QuestionProps) {
  const { currentTheme } = useTheme()

  return (
    <QuestionContainer
      className={classNames(
        currentTheme,
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>

        <div>
          {children}
        </div>
      </footer>
    </QuestionContainer>
  )
}
