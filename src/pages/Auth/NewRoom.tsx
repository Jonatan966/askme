import toast from 'react-hot-toast'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { Button } from '@components/Button'
import { UserInfo } from '@components/UserInfo'
import { ShowAfterLoad } from '@components/ShowAfterLoad'
import { AppLogo } from '@components/AppLogo'
import { WelcomeAside } from '@components/WelcomeAside'
import { ThemeSwitcher } from '@components/ThemeSwitcher'
import { TextInput } from '@components/Input/TextInput'
import { StreamSelectorInput } from '@components/Input/StreamSelectorInput'
import { database } from '@services/firebase'
import { useAuth } from '@hooks/useAuth'

import { PageAuthContainer } from './styles'

interface RoomFormInformations {
  roomName: string;
  transmissionUrl: string;
}

export function NewRoomPage () {
  const { user, isLoadingUserInformation } = useAuth()
  const { register, handleSubmit, setValue } = useForm()

  const handleTransmissionUrlChange = (newValue: string) => setValue('transmissionUrl', newValue)

  const [isCreatingRoom, setIsCreatingRoom] = useState(false)

  const history = useHistory()

  useEffect(() => {
    register('transmissionUrl')
  }, [])

  useEffect(() => {
    if (!isLoadingUserInformation && !user) {
      history.replace('/')
    }
  }, [isLoadingUserInformation, user])

  async function handleCreateRoom ({ roomName, transmissionUrl }: RoomFormInformations) {
    setIsCreatingRoom(true)

    try {
      const roomRef = database.ref('rooms')

      const firebaseRoom = await roomRef.push({
        title: roomName,
        transmissionUrl,
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
    <PageAuthContainer>
        <WelcomeAside/>

        <main>
          <ShowAfterLoad isLoading={isLoadingUserInformation}>
            <div className='main-content'>
              <AppLogo />

              <h2>Criar uma nova sala</h2>

              <form onSubmit={handleSubmit(handleCreateRoom)}>
                <TextInput
                  {...register('roomName')}
                  type="text"
                  placeholder='Nome da sala'
                  required
                />
                <StreamSelectorInput onChange={handleTransmissionUrlChange} />

                <Button type="submit" /* disabled={!roomName.trim()} */ isLoading={isCreatingRoom}>
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

              <ThemeSwitcher showLabel/>
            </div>
          </ShowAfterLoad>
        </main>
    </PageAuthContainer>
  )
}
