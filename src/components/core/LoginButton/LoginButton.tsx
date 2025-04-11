'use client'

import { useAuth } from '@/src/hooks/useAuth'
import Image from 'next/image'
import styles from './LoginButton-styles.module.css'

export function LoginButton({
  customMessage = 'Login with Google',
}: {
  customMessage?: string
}) {
  const { user, login, logout, loading } = useAuth()

  if (loading) return <p>Carregando...</p>

  return (
    <div className={styles.container}>
      {user ? (
        <div>
          <Image
            src={user.photoURL ?? ''}
            alt="avatar"
            width={64}
            height={64}
          />
          <span>{user.name}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>{customMessage}</button>
      )}
    </div>
  )
}
