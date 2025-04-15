'use client'

import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider as JotaiProvider } from 'jotai'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <JotaiProvider>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
        }}>
        {children}
      </div>
      <Toaster />
    </JotaiProvider>
  )
}
