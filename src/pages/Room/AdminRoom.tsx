import { useHistory, useParams } from 'react-router-dom'

import { Button } from '@components/Button'
import { RoomCode } from '@components/RoomCode'
import { Question } from '@components/Question'
import { ConfirmModal } from '@components/Modal/ConfirmModal'

import { useModal } from '@hooks/useModal'
import { useRoom } from '@hooks/useRoom'
import { useTheme } from '@hooks/useTheme'
import { database } from '@services/firebase'

import logoImg from '@assets/images/logo.svg'
import deleteImg from '@assets/images/delete.svg'

import './styles.scss'

type RoomParams = {
  id: string;
}

export function AdminRoomPage() {
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

  async function handleConfirmDeleteQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
  }

  async function handleConfirmEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })

    history.replace('/')
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

      <header>
        <div className='content'>
          <img src={logoImg} alt='Letmeask' />

          <div>
            <RoomCode roomCode={roomId} />
            <Button isOutlined onClick={() => handleOpenConfirmEndRoomModal()}>Encerrar sala</Button>
          </div>
        </div>
      </header>

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
            >
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
