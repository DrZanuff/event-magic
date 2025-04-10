// src/services/auth.ts
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth, googleProvider } from './firebase'

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user
    return {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
    }
  } catch (error) {
    console.error('Login failed', error)
    return null
  }
}

export const logout = () => signOut(auth)

export const onAuthChange = (callback: (user: any) => void) => {
  return onAuthStateChanged(auth, callback)
}
