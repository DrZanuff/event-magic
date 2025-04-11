'use client'

import { useAuth } from '@/src/hooks/useAuth'

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
          <img src={user.photoURL ?? ''} alt="avatar" width={32} />
          <span>{user.name}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>{customMessage}</button>
      )}
    </div>
  )
}
