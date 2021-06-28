import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router-dom'

import { database } from '../services/firebase'
import { useAuth } from './useAuth'

type QuestionType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likes: Record<string, {
    authorId: string;
  }>;
}>

export function useRoom(roomId: string) {
  const { user } = useAuth()
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [title, setTitle] = useState('')
  const [transmissionUrl, setTransmissionUrl] = useState('')
  const [isLoadingRoomInformation, setIsLoadingRoomInformation] = useState(true)

  const history = useHistory()

  useEffect(() => {
    setIsLoadingRoomInformation(true)

    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on('value', room => {
      try {
        const databaseRoom = room.val()
        const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {}

        const parsedQuestions = Object.entries(firebaseQuestions).map(([questionKey, questionValue]) => {
          return {
            id: questionKey,
            content: questionValue.content,
            author: questionValue.author,
            isHighlighted: questionValue.isHighlighted,
            isAnswered: questionValue.isAnswered,
            likeCount: Object.values(questionValue.likes ?? {}).length,
            likeId: Object.entries(questionValue.likes ?? {}).find(([key, like]) =>
              like.authorId === user?.id
            )?.[0]
          }
        })

        const filteredQuestions = parsedQuestions
          .sort((questionA, questionB) =>
            Number(questionB.isHighlighted) - Number(questionA.isHighlighted)
          )
          .sort((questionA, questionB) =>
            Number(questionA.isAnswered) - Number(questionB.isAnswered)
          )

        setTitle(databaseRoom.title)
        setTransmissionUrl(databaseRoom.transmissionUrl)
        setQuestions(filteredQuestions)
        setIsLoadingRoomInformation(false)
      } catch {
        toast.error('Não foi possível entrar nessa sala')
        history.replace('/')
      }
    })

    return () => {
      roomRef.off('value')
    }
  }, [roomId, user?.id])

  return {
    questions,
    title,
    transmissionUrl,
    isLoadingRoomInformation
  }
}
