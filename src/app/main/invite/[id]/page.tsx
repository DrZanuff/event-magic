'use client'

import { useParams } from 'next/navigation'

export default function InvitePage() {
  const { id } = useParams()

  return (
    <div style={{ width: '80%', height: '70vh', border: '1px dashed gray' }}>
      Invite Page id: {id}
    </div>
  )
}
