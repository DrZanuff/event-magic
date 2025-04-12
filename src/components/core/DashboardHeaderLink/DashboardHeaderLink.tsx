'use client'

import Link from 'next/link'
import { useAuth } from '@/src/hooks/useAuth'

export function DashboardHeaderLink() {
  const { user } = useAuth()

  if (!user) {
    return null
  }

  return (
    <>
      <Link href="/main/dashboard">Invitations</Link>
    </>
  )
}
