import { AppLogo } from '@components/AppLogo'
import { Button } from '@components/Button'
import { RoomCode } from '@components/RoomCode'
import { ThemeSwitcher } from '@components/ThemeSwitcher'

import { RoomHeaderContainer } from './styles'

type RoomHeaderTypes = {
  roomId: string;
  handleOpenConfirmEndRoomModal?: () => void;
}

export function RoomHeader({ roomId, handleOpenConfirmEndRoomModal }: RoomHeaderTypes) {
  return (
    <RoomHeaderContainer>
      <div className='content'>
        <AppLogo/>

        <div>
          <RoomCode roomCode={roomId} />
          {handleOpenConfirmEndRoomModal && (
            <Button
              isOutlined
              onClick={() => handleOpenConfirmEndRoomModal()}
            >
              Encerrar sala
            </Button>
          )}
          <ThemeSwitcher/>
        </div>
      </div>
    </RoomHeaderContainer>
  )
}
