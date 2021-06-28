import ReactPlayer from 'react-player'
import { useState } from 'react'

import { Spinner } from '@components/Spinner'

import { PlayerStatusContainer } from './styles'

type PlayerStates = 'loading' | 'ready' | 'error'

interface StreamPlayerProps {
  url: string;
}

interface PlayerStatusProps {
  playerState?: PlayerStates;
}

export function StreamPlayer({ url }: StreamPlayerProps) {
  const [playerState, setPlayerState] = useState<PlayerStates>('loading')

  function onPlayerReady(playerProps: ReactPlayer) {
    setPlayerState('ready')
  }

  function onPlayerError() {
    setPlayerState('error')
  }

  return (
    <>
      {(playerState !== 'ready') && <PlayerStatus playerState={playerState} />}
      <ReactPlayer
        url={url}
        width='100%'
        height='25rem'
        style={{
          marginTop: '1rem',
          display: playerState === 'ready' ? 'block' : 'none'
        }}
        onError={onPlayerError}
        onReady={onPlayerReady}
      />
    </>
  )
}

function PlayerStatus({ playerState } : PlayerStatusProps) {
  return (
    <PlayerStatusContainer>
      {playerState === 'loading'
        ? <Spinner/>
        : (
            <>
              <h1>Ocorreu um erro</h1>
              <p>Não foi possível carregar a transmissão</p>
            </>
          )
      }
    </PlayerStatusContainer>
  )
}
