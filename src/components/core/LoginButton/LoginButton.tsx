'use client'

import { useAuth } from '@/src/hooks/useAuth'
import Image from 'next/image'
import styles from './LoginButton-styles.module.css'
import buttons from '../../../styles/buttons.module.css'

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
        <div className={styles['avatar-container']}>
          <Image
            src={user.photoURL ?? ''}
            alt="avatar"
            width={64}
            height={64}
            className={styles.avatar}
          />
          <button className={buttons['button-purple-outline']} onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <button className={buttons['button-outline-magenta']} onClick={login}>
          {customMessage}
        </button>
      )}
    </div>
  )
}
