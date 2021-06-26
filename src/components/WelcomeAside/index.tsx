import { WelcomeAsideContainer } from './styles'

import illustrationImg from '@assets/images/illustration.svg'
import { Button } from '@components/Button'
import { useEffect, useState } from 'react'

export function WelcomeAside() {
  const [isPassedTheWelcomeMessage, setIsPassedTheWelcomeMessage] = useState(() => {
    const storagedValue = localStorage.getItem('@letmeask:passed-welcome-message')

    return !!storagedValue
  })

  function handlePassWelcomeMessage() {
    setIsPassedTheWelcomeMessage(true)

    localStorage.setItem('@letmeask:passed-welcome-message', 'true')
  }

  useEffect(() => console.log(isPassedTheWelcomeMessage), [isPassedTheWelcomeMessage])

  return (
    <WelcomeAsideContainer className={isPassedTheWelcomeMessage ? 'passed-welcome-message' : ''}>
      <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
      <strong>Crie salas de Q&amp;A ao-vivo</strong>
      <p>Tire as dúvidas da sua audiência em tempo-real</p>
      {!isPassedTheWelcomeMessage && <Button onClick={handlePassWelcomeMessage}>Continuar</Button>}
    </WelcomeAsideContainer>
  )
}
