'use client'

import { useAuth } from '@/src/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { EventData } from '@/src/types'
import styles from './Dashboard-styles.module.css'

export function Dashboard() {
  const { user } = useAuth()
  const router = useRouter()
  const [events, setEvents] = useState<EventData[]>([])

  useEffect(() => {
    if (!user) {
      return
    }

    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events/list', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: user.uid }),
        })

        const data = await res.json()
        if (data.success) {
          setEvents(data.events)
        }
      } catch (err) {
        console.error('Failed to fetch events:', err)
      }
    }

    fetchEvents()
  }, [user, router])

  if (!user) return <span>Please, create an account</span>

  return (
    <div className={styles['Dashboard-container']}>
      <h1>Dashboard</h1>

      <ul>
        {events.map((event) => (
          <li key={event._id}>{event.title.text}</li>
        ))}
      </ul>
      <span></span>
    </div>
  )
}
