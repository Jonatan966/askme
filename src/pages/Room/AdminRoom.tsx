import { useHistory, useParams } from 'react-router-dom'

import { Button } from '../../components/Button'
import { RoomCode } from '../../components/RoomCode'
import { Question } from '../../components/Question'
import { useRoom } from '../../hooks/useRoom'
import { database } from '../../services/firebase'

import logoImg from '../assets/images/logo.svg'
import deleteImg from '../assets/images/delete.svg'

import './styles.scss'

type RoomParams = {
  id: string;
}

export function AdminRoomPage() {
  // const { user } = useAuth()
  const history = useHistory()
  const { id: roomId } = useParams<RoomParams>()
  
  const { title, questions } = useRoom(roomId)

  async function handleDeleteQuestion(questionId: string) {
    // TODO: utilizar o react-modal
    if (!window.confirm('Tem certeza de que você deseja excluir esta pergunta?')) {
      return
    }

    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })

    history.replace('/')
  }

  return (
    <div id="page-room">
      <header>
        <div className='content'>
          <img src={logoImg} alt='Letmeask' />

          <div>
            <RoomCode roomCode={roomId} />
            <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
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
                onClick={() => handleDeleteQuestion(question.id)}
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
