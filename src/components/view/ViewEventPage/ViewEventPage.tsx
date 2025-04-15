'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { EventData } from '@/src/types'
import { EventPlayer } from '@/src/components/view/EventPlayer'
import {
  backgroundColorAtom,
  backgroundOpacityAtom,
  videoOpacityAtom,
  callToActionAtom,
  dateTimeAtom,
  locationAtom,
  messageAtom,
  subTitleAtom,
  titleAtom,
} from '@/src/atoms/event'
import { AvailableVideosId, currentVideoAtom } from '@/src/atoms/editor'
import { useSetAtom } from 'jotai'
import style from './ViewEventPage.module.css'

export function ViewEventPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [event, setEvent] = useState<EventData | null>(null)
  const [loading, setLoading] = useState(true)

  const setBackgroundColor = useSetAtom(backgroundColorAtom)
  const setBackgroundOpacity = useSetAtom(backgroundOpacityAtom)
  const setVideoOpacity = useSetAtom(videoOpacityAtom)
  const setCurrentVideo = useSetAtom(currentVideoAtom)

  const setTitle = useSetAtom(titleAtom)
  const setSubTitle = useSetAtom(subTitleAtom)
  const setMessage = useSetAtom(messageAtom)
  const setLocation = useSetAtom(locationAtom)
  const setDateTime = useSetAtom(dateTimeAtom)
  const setCallToAction = useSetAtom(callToActionAtom)

  useEffect(() => {
    if (!id) return

    const fetchEvent = async () => {
      try {
        const res = await fetch(`/api/events/view?id=${id}`)
        const data = await res.json()
        if (data.success) {
          const eventData: EventData = data.event

          setEvent(eventData)
          setBackgroundColor(eventData.backgroundColor)
          setBackgroundOpacity(eventData.backgroundOpacity)
          setVideoOpacity(eventData.videoOpacity)
          setTitle(eventData.title)
          setSubTitle(eventData.subTitle)
          setMessage(eventData.message)
          setLocation(eventData.location)
          setDateTime(eventData.dateTime)
          setCallToAction(eventData.callToAction)
          setCurrentVideo(Number(eventData.videoId) as AvailableVideosId)
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
    <div className={style.player}>
      <EventPlayer event={event} />
    </div>
  )
}
