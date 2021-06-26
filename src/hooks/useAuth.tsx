import { useContext, useEffect, useState, createContext, ReactNode } from 'react'
import { UserProps } from 'interfaces/user.interface'

import { auth, firebase } from '../services/firebase'

interface AuthContextProps {
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  user: UserProps | undefined;
  isLoadingUserInformation: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>()
  const [isLoadingUserInformation, setIsLoadingUserInformation] = useState(true)

  useEffect(() => {
    setIsLoadingUserInformation(true)

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        saveUserInformation(user)
      }
      setIsLoadingUserInformation(false)
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

  async function signOut() {
    await auth.signOut()
    setUser(undefined)
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
      signInWithGoogle,
      signOut,
      isLoadingUserInformation
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
