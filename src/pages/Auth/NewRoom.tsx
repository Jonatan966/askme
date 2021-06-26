import { FormEvent, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Button } from '@components/Button'
import { UserInfo } from '@components/UserInfo'
import { database } from '@services/firebase'
import { useAuth } from '@hooks/useAuth'
import { useTheme } from '@hooks/useTheme'

import illustrationImg from '@assets/images/illustration.svg'
import logoImg from '@assets/images/logo.svg'

import './styles.scss'
import toast from 'react-hot-toast'
import { ShowAfterLoad } from '@components/ShowAfterLoad'

export function NewRoomPage () {
  const { user, isLoadingUserInformation } = useAuth()
  const [roomName, setRoomName] = useState('')
  const [isCreatingRoom, setIsCreatingRoom] = useState(false)

  const history = useHistory()

  const { currentTheme } = useTheme()

  useEffect(() => {
    if (!isLoadingUserInformation && !user) {
      history.replace('/')
    }
  }, [isLoadingUserInformation, user])

  async function handleCreateRoom (event: FormEvent) {
    event.preventDefault()
    setIsCreatingRoom(true)

    try {
      const roomRef = database.ref('rooms')

      const firebaseRoom = await roomRef.push({
        title: roomName,
        authorId: user?.id
      })

      history.push(`/admin/rooms/${firebaseRoom.key}`)
    } catch {
      toast.error('Ocorreu um erro interno ao tentar criar essa sala')
    } finally {
      setIsCreatingRoom(false)
    }
  }

  return (
    <div id='page-auth' className={currentTheme}>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de &amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

        <main>
          <ShowAfterLoad isLoading={isLoadingUserInformation}>
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
                <Button type="submit" disabled={!roomName.trim()} isLoading={isCreatingRoom}>
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
          </ShowAfterLoad>
        </main>
    </div>
  )
}
