import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Button } from '@components/Button'
import { UserInfo } from '@components/UserInfo'
import { database } from '@services/firebase'
import { useAuth } from '@hooks/useAuth'
import { useTheme } from '@hooks/useTheme'

import illustrationImg from '@assets/images/illustration.svg'
import logoImg from '@assets/images/logo.svg'

import './styles.scss'

export function NewRoomPage() {
  const { user } = useAuth()
  const [roomName, setRoomName] = useState('')

  const history = useHistory()

  const { currentTheme } = useTheme()


  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if (roomName.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: roomName,
      authorId: user?.id
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <div id='page-auth' className={currentTheme}>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de &amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className='main-content'>
          <img src={logoImg} alt="Letmeask" />

          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input 
              type="text" 
              placeholder='Nome da sala'
              value={roomName}
              onChange={event => setRoomName(event.target.value)}
            />
            <Button type="submit" disabled={!roomName}>
              Criar sala
            </Button>
          </form>

          <p>
            Quer entrar em uma sala existente? {' '}
            <Link to='/'>Clique aqui</Link>
          </p>

          
          {user && (
            <UserInfo user={user} />
          )}
        </div>
      </main>
    </div>
  )
}
