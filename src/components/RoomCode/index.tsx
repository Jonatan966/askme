import copyImg from '@assets/images/copy.svg'
import toast from 'react-hot-toast'

import { RoomCodeContainer } from './styles'

type RoomCodeProps = {
  roomCode: string;
}

export function RoomCode({ roomCode }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(roomCode)
    toast.success('Código copiado')
  }

  return (
    <RoomCodeContainer onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt='Copy room code' />
      </div>
      <span>Sala #{roomCode}</span>
    </RoomCodeContainer>
  )
}
