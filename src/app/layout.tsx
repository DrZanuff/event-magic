import '@/src/app/globals.css'
import styles from './layout.module.css'
import Link from 'next/link'
import { ReactNode } from 'react'
import { LoginButton } from '@/src/components/core/LoginButton'
import { DashboardHeaderLink } from '@/src/components/core/DashboardHeaderLink'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.layout}>
        <header className={styles.header}>
          <nav>
            <Link href="/">Home</Link>
            <span>|</span>
            <Link href="/main/editor">Editor</Link>
            <DashboardHeaderLink />
          </nav>

          <LoginButton />
        </header>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  )
}
