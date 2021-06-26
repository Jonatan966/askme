import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '@components/Button'
import { RoomHeader } from '@components/RoomHeader'
import { Question } from '@components/Question'
import { UserInfo } from '@components/UserInfo'

import { useTheme } from '@hooks/useTheme'
import { useAuth } from '@hooks/useAuth'
import { useRoom } from '@hooks/useRoom'

import { database } from '@services/firebase'

import { ReactComponent as LikeImg } from '@assets/images/like.svg'

import './styles.scss'
import { ShowAfterLoad } from '@components/ShowAfterLoad'
import { CenteredMessage } from '@components/CenteredMessage'

type RoomParams = {
  id: string;
}

export function RoomPage() {
  const { user, signInWithGoogle } = useAuth()
  const { id: roomId } = useParams<RoomParams>()
  const [newQuestion, setNewQuestion] = useState('')

  const { title, questions, isLoadingRoomInformation } = useRoom(roomId)
  const { currentTheme } = useTheme()

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault()

    if (newQuestion.trim() === '') {
      return
    }

    if (!user) {
      // TODO: utilizar o react-hot-toast
      throw new Error('You must be logged in')
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighlighted: false,
      isAnswered: false
    }

    await database.ref(`rooms/${roomId}/questions`).push(question)

    setNewQuestion('')
  }

  async function handleLikeQuestion(questionId: string, likeId?: string) {
    if (!user) return

    if (likeId) {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
        .remove()

      return
    }

    await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
      authorId: user.id
    })
  }

  return (
    <div id="page-room" className={currentTheme}>
      <RoomHeader roomId={roomId} />

      <ShowAfterLoad isLoading={isLoadingRoomInformation}>
        <main>
          <div className="room-title">
            <h1>Sala {title}</h1>
            {questions.length > 0 && (
              <span>{questions.length} perguntas</span>
            )}
          </div>

          <form onSubmit={handleSendQuestion}>
            <textarea
              placeholder='O que você quer perguntar?'
              onChange={event => setNewQuestion(event.target.value)}
              value={newQuestion}
            />

            <div className="form-footer">
              {user
                ? <UserInfo user={user} />
                : (
                <span>
                  Para enviar uma pergunta, <button onClick={signInWithGoogle}>faça seu login</button>
                </span>
                  )
              }

              <Button type='submit' disabled={!user || !newQuestion}>Enviar pergunta</Button>
            </div>
          </form>

          {questions.length
            ? (
              <div className="question-list">
                {questions.map(question => (
                  <Question
                    author={question.author}
                    content={question.content}
                    key={question.id}
                    isAnswered={question.isAnswered}
                    isHighlighted={question.isHighlighted}
                  >
                    { !question.isAnswered && (
                      <button
                        className={`like-button ${question.likeId ? 'liked' : ''}`}
                        type='button'
                        aria-label='Marcar como gostei'
                        title='Marcar como gostei'
                        onClick={() => handleLikeQuestion(question.id, question.likeId)}
                      >
                        {question.likeCount > 0 && <span>{question.likeCount}</span>}
                        <LikeImg/>
                      </button>
                    )}
                  </Question>
                ))}
              </div>
              )
            : <CenteredMessage
                title='Nenhuma pergunta por aqui...'
                message={`${user ? 'S' : 'Faça login e s'}eja a primeira pessoa a fazer uma pergunta!`}
              />
          }
        </main>
      </ShowAfterLoad>
    </div>
  )
}
