import { useEffect, useState } from "react"
import { database } from "../services/firebase"

type QuestionType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}>


export function useRoom(roomId: string) {
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [title, setTitle] = useState('')

  useEffect(() => {
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
          isAnswered: questionValue.isAnswered
        }
      })

      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions)
    })

    roomRef.on('child_added', teste => console.log(teste.val()))
    roomRef.on('child_changed', teste => console.log('removido', teste.val()))
  }, [roomId])

  return {
    questions,
    title
  }
}
