import ReactPlayer from 'react-player'
import { useState } from 'react'

import { Spinner } from '@components/Spinner'

import { PlayerStatusContainer } from './styles'

interface StreamPlayerProps {
  url: string;
}

interface PlayerStatusProps {
  isLoading?: boolean;
}

export function StreamPlayer({ url }: StreamPlayerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  function onPlayerReady(playerProps: ReactPlayer) {
    setIsLoading(false)
  }

  function onPlayerError() {
    setIsError(true)
    setIsLoading(false)
  }

  return (
    <>
      {(isLoading || isError) && <PlayerStatus isLoading={isLoading} />}
      <ReactPlayer
        url={url}
        width='100%'
        height='25rem'
        style={{
          marginTop: '1rem',
          display: (isLoading || isError) ? 'none' : 'block'
        }}
        onError={onPlayerError}
        onReady={onPlayerReady}
        // playing={true}
      />
    </>
  )
}

function PlayerStatus({ isLoading } : PlayerStatusProps) {
  return (
    <PlayerStatusContainer>
      {isLoading
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
