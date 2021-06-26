import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import toast from 'react-hot-toast'

import { Button } from '@components/Button'
import { AppLogo } from '@components/AppLogo'
import { database } from '@services/firebase'
import { useAuth } from '@hooks/useAuth'

import illustrationImg from '@assets/images/illustration.svg'
import googleIconImg from '@assets/images/google-icon.svg'
import { PageAuthContainer } from './styles'

export function HomePage () {
  const history = useHistory()
  const { signInWithGoogle, user } = useAuth()
  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom () {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }

  async function handleJoinRoom (event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      toast.error('Essa sala não existe')
      return
    }

    if (roomRef.val().endedAt) {
      toast.error('Essa sala já foi fechada')
      return
    }

    history.push(`/rooms/${roomCode}`)
  }

  return (
    <PageAuthContainer>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de &amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className='main-content'>
          <AppLogo/>
          <button className='create-room' onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <span className='separator'>Ou entre em uma sala</span>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder='Digite o código da sala'
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit" disabled={!roomCode}>
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </PageAuthContainer>
  )
}
