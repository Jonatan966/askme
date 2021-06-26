import { useEffect, useState } from 'react'

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
  const [isLoadingRoomInformation, setIsLoadingRoomInformation] = useState(true)

  useEffect(() => {
    setIsLoadingRoomInformation(true)

    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on('value', room => {
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

      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions)
      setIsLoadingRoomInformation(false)
    })

    return () => {
      roomRef.off('value')
    }
  }, [roomId, user?.id])

  return {
    questions,
    title,
    isLoadingRoomInformation
  }
}
