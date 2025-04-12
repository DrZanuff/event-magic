'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { EventData } from '@/src/types'
import { EventPlayer } from '@/src/components/view/EventPlayer'

export default function ViewEventPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [event, setEvent] = useState<EventData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    const fetchEvent = async () => {
      try {
        const res = await fetch(`/api/events/view?id=${id}`)
        const data = await res.json()
        if (data.success) {
          setEvent(data.event)
        }
      } catch (err) {
        console.error('Error fetching event:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchEvent()
  }, [id])

  if (loading) return <p>Loading...</p>
  if (!event) return <p>Event not found</p>

  return (
    <div>
      <h1>{event.title?.text}</h1>
      <EventPlayer event={event} />
    </div>
  )
}
