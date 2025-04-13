'use client'

import { useAuth } from '@/src/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { EventData } from '@/src/types'
import { EventThumbnail } from '@/src/components/core/EventThumbnail'
import { useSetAtom } from 'jotai'
import { AvailableVideosId, currentVideoAtom } from '@/src/atoms/editor'
import {
  backgroundColorAtom,
  backgroundOpacityAtom,
  callToActionAtom,
  currentEditingAtom,
  currentEditingNameAtom,
  dateTimeAtom,
  locationAtom,
  messageAtom,
  subTitleAtom,
  titleAtom,
} from '@/src/atoms/event'
import styles from './Dashboard-styles.module.css'

export function Dashboard() {
  const { user } = useAuth()
  const router = useRouter()
  const [events, setEvents] = useState<EventData[]>([])

  const setSaveVideoId = useSetAtom(currentEditingAtom)
  const setSaveVideoName = useSetAtom(currentEditingNameAtom)
  const setCurrentVideo = useSetAtom(currentVideoAtom)

  const setBackgroundColor = useSetAtom(backgroundColorAtom)
  const backgroundOpacity = useSetAtom(backgroundOpacityAtom)

  const setTitle = useSetAtom(titleAtom)
  const setSubTitle = useSetAtom(subTitleAtom)
  const setMessage = useSetAtom(messageAtom)
  const setLocation = useSetAtom(locationAtom)
  const setDateTime = useSetAtom(dateTimeAtom)
  const setCallToAction = useSetAtom(callToActionAtom)

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

  const handleSelectVideo = useCallback(
    (eventData: EventData) => {
      setSaveVideoId(eventData._id || null)
      setSaveVideoName(eventData.eventName)
      setCurrentVideo(Number(eventData.videoId) as AvailableVideosId)
      setBackgroundColor(eventData.backgroundColor)
      backgroundOpacity(eventData.backgroundOpacity)
      setTitle(eventData.title)
      setSubTitle(eventData.subTitle)
      setMessage(eventData.message)
      setLocation(eventData.location)
      setDateTime(eventData.dateTime)
      setCallToAction(eventData.callToAction)

      router.push('/main/editor')
    },
    [
      setSaveVideoId, // ID in the mongo database
      setCurrentVideo, // Internal ID in the availableVideos const
      setBackgroundColor,
      backgroundOpacity,
      setTitle,
      setSubTitle,
      setMessage,
      setLocation,
      setDateTime,
      setCallToAction,
      router,
    ]
  )

  if (!user) return <span>Please, create an account</span>

  return (
    <div className={styles['Dashboard-container']}>
      <h1>Dashboard</h1>

      {events.length === 0 ? (
        <p>No events found. Create one to get started!</p>
      ) : (
        <ul className={styles['item-list']}>
          {events.map((event) => (
            <li
              key={event._id}
              className={styles['item-container']}
              onClick={() => handleSelectVideo(event)}>
              <p className={styles['title-li']}>{event.eventName}</p>
              <EventThumbnail event={event} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
