import { useHistory, useParams } from 'react-router-dom'

import { Question } from '@components/Question'
import { ConfirmModal } from '@components/Modal/ConfirmModal'
import { RoomHeader } from '@components/RoomHeader'

import { useModal } from '@hooks/useModal'
import { useRoom } from '@hooks/useRoom'
import { useTheme } from '@hooks/useTheme'
import { database } from '@services/firebase'

import deleteImg from '@assets/images/delete.svg'
import checkImg from '@assets/images/check.svg'
import answerImg from '@assets/images/answer.svg'

import './styles.scss'

type RoomParams = {
  id: string;
}

export function AdminRoomPage () {
  const history = useHistory()
  const { id: roomId } = useParams<RoomParams>()
  const [
    confirmDeleteQuestionModalState,
    handleOpenConfirmDeleteQuestionModal,
    handleCloseConfirmDeleteQuestionModal
  ] = useModal<string>()
  const [
    confirmEndRoomModalState,
    handleOpenConfirmEndRoomModal,
    handleCloseConfirmEndRoomModal
  ] = useModal()

  const { title, questions } = useRoom(roomId)

  const { currentTheme } = useTheme()

  async function handleConfirmDeleteQuestion (questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
  }

  async function handleConfirmEndRoom () {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })

    history.replace('/')
  }

  async function handleCheckQuestionAsAnswered (questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  async function handleHightlightQuestion (questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    })
  }

  return (
    <div id="page-room" className={currentTheme}>
      <ConfirmModal
        modalState={confirmDeleteQuestionModalState}
        handleCloseModal={handleCloseConfirmDeleteQuestionModal}
        onConfirm={handleConfirmDeleteQuestion}
        title='Excluir pergunta'
        description='Tem certeza que você deseja excluir esta pergunta?'
      />

      <ConfirmModal
        modalState={confirmEndRoomModalState}
        handleCloseModal={handleCloseConfirmEndRoomModal}
        onConfirm={handleConfirmEndRoom}
        title='Encerrar sala'
        description='Tem certeza que você deseja encerrar esta sala?'
      />

      <RoomHeader
        roomId={roomId}
        handleOpenConfirmEndRoomModal={handleOpenConfirmEndRoomModal}
      />

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && (
            <span>{questions.length} perguntas</span>
          )}
        </div>

        <div className="question-list">
          {questions.map(question => (
            <Question
              author={question.author}
              content={question.content}
              key={question.id}
              isAnswered={question.isAnswered}
              isHighlighted={question.isHighlighted}
            >
              {!question.isAnswered && (
                <>
                  <button
                    type='button'
                    onClick={() => handleCheckQuestionAsAnswered(question.id)}
                  >
                    <img src={checkImg} alt='Marcar pergunta como respondida' />
                  </button>

                  <button
                    type='button'
                    onClick={() => handleHightlightQuestion(question.id)}
                  >
                    <img src={answerImg} alt='Dar destaque à pergunta' />
                  </button>
                </>
              )}

              <button
                type='button'
                onClick={() => handleOpenConfirmDeleteQuestionModal(question.id)}
              >
                <img src={deleteImg} alt='Remover pergunta' />
              </button>
            </Question>
          ))}
        </div>
      </main>
    </div>
  )
}
