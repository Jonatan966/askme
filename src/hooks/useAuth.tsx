import { FC } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

import { auth, firebase } from '../services/firebase'

export interface UserProps {
  id: string;
  name: string;
  avatar: string;
}

interface AuthContextProps {
  signInWithGoogle: () => Promise<void>;
  user: UserProps | undefined;
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<UserProps>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        saveUserInformation(user)
      }
    })

    return () => unsubscribe()
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    const signInResult = await auth.signInWithPopup(provider)

    if (signInResult.user) {
      saveUserInformation(signInResult.user)
    }
  }

  function saveUserInformation(userInformation: firebase.User) {
    const { displayName, photoURL, uid } = userInformation

    if (!displayName || !photoURL) {
      throw new Error('Missing information from Google Account.')
    }

    setUser({
      id: uid,
      name: displayName,
      avatar: photoURL
    })
  }
  
  return (
    <AuthContext.Provider value={{
      user,
      signInWithGoogle
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
