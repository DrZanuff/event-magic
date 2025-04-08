'use client'

import { Invite } from '@/src/components/invite/Invite'
import { useParams } from 'next/navigation'

export default function InvitePage() {
  const { id } = useParams()

  return (
    <div
      style={{
        width: '80%',
        height: '70vh',
        border: '1px dashed gray',
        flexDirection: 'column',
        display: 'flex',
      }}>
      Invite Page id: {id}
      <Invite value="client" />
    </div>
  )
}
