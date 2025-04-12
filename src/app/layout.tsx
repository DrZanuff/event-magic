import '@/src/app/globals.css'
import styles from './layout.module.css'
import Link from 'next/link'
import { ReactNode } from 'react'
import { LoginButton } from '@/src/components/core/LoginButton'
import { DashboardHeaderLink } from '@/src/components/core/DashboardHeaderLink'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={styles.layout}>
        <header className={styles.header}>
          <Link href="/">
            <strong>Event Magic ✨</strong>
          </Link>

          <nav>
            <Link href="/">Home</Link>
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
