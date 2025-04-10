import '@/src/app/globals.css'
import styles from './layout.module.css'
import Link from 'next/link'
import { ReactNode } from 'react'
import { LoginButton } from '@/src/components/core/LoginButton'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.layout}>
        <header className={styles.header}>
          <nav>
            <Link href="/">Home</Link> |<Link href="/main/editor">Editor</Link>{' '}
            |<Link href="/main/dashboard">My Invitations</Link>
          </nav>

          <LoginButton />
        </header>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  )
}
