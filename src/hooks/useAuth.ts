// src/hooks/useAuth.ts
'use client'

import { useEffect, useState } from 'react'
import { loginWithGoogle, logout, onAuthChange } from '@/src/services/auth'

export type AuthUser = {
  uid: string
  name: string | null
  email: string | null
  photoURL: string | null
}

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  const handleLogin = async () => {
    const loggedInUser = await loginWithGoogle()
    if (loggedInUser) {
      setUser(loggedInUser)
      sessionStorage.setItem('user', JSON.stringify(loggedInUser))
    }
  }

  const handleLogout = async () => {
    await logout()
    setUser(null)
    sessionStorage.removeItem('user')
  }

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setLoading(false)
    }

    const unsubscribe = onAuthChange((firebaseUser) => {
      if (!firebaseUser) {
        setUser(null)
        sessionStorage.removeItem('user')
      } else {
        const currentUser: AuthUser = {
          uid: firebaseUser.uid,
          name: firebaseUser.displayName,
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
        }
        setUser(currentUser)
        sessionStorage.setItem('user', JSON.stringify(currentUser))
      }

      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return {
    user,
    loading,
    login: handleLogin,
    logout: handleLogout,
  }
}
