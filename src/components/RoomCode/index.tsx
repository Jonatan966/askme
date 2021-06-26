import copyImg from '@assets/images/copy.svg'
import { useTheme } from '@hooks/useTheme'
import toast from 'react-hot-toast'

import './room-code.scss'

type RoomCodeProps = {
  roomCode: string;
}

export function RoomCode({ roomCode }: RoomCodeProps) {
  const { currentTheme } = useTheme()

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(roomCode)
    toast.success('Código copiado')
  }

  return (
    <button className={`room-code ${currentTheme}`} onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt='Copy room code' />
      </div>
      <span>Sala #{roomCode}</span>
    </button>
  )
}
