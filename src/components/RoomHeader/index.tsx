import { AppLogo } from '@components/AppLogo'
import { Button } from '@components/Button'
import { RoomCode } from '@components/RoomCode'
import { ThemeSwitcher } from '@components/ThemeSwitcher'
import { useState } from 'react'

import { ReactComponent as MenuImg } from '@assets/images/menu.svg'
import { ReactComponent as CloseImg } from '@assets/images/close.svg'

import { RoomHeaderContainer } from './styles'

type RoomHeaderTypes = {
  roomId: string;
  handleOpenConfirmEndRoomModal?: () => void;
}

export function RoomHeader({ roomId, handleOpenConfirmEndRoomModal }: RoomHeaderTypes) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false)

  const toggleNavbar = () => setIsNavbarVisible(!isNavbarVisible)

  return (
    <RoomHeaderContainer>
      <div className='content'>
        <div className='main-content'>
          <AppLogo/>
          <ThemeSwitcher/>
          <Button
            className='show-nav-btn'
            onClick={toggleNavbar}
            title={`${isNavbarVisible ? 'Fechar' : 'Abrir'} menu`}
          >
            {isNavbarVisible ? <CloseImg/> : <MenuImg/>}
          </Button>
        </div>

        <nav className={isNavbarVisible ? 'opened' : ''}>
          <RoomCode roomCode={roomId} />
          {handleOpenConfirmEndRoomModal && (
            <Button
              isOutlined
              onClick={() => handleOpenConfirmEndRoomModal()}
            >
              Encerrar sala
            </Button>
          )}
        </nav>
      </div>
    </RoomHeaderContainer>
  )
}
