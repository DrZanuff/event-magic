'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  backgroundColorAtom,
  backgroundOpacityAtom,
  callToActionAtom,
  dateTimeAtom,
  locationAtom,
  messageAtom,
  subTitleAtom,
  titleAtom,
  currentEditingAtom,
} from '@/src/atoms/event'
import { currentVideoAtom } from '@/src/atoms/editor'
import { useAtomValue, useAtom } from 'jotai'
import { useAuth } from '@/src/hooks/useAuth'
import { LoginButton } from '../../core/LoginButton'
import styles from './EditorRegisteredUserArea-styles.module.css'

export function EditorRegisteredUserArea() {
  const { user } = useAuth()
  const router = useRouter()
  const backgroundColor = useAtomValue(backgroundColorAtom)
  const backgroundOpacity = useAtomValue(backgroundOpacityAtom)
  const callToAction = useAtomValue(callToActionAtom)
  const dateTime = useAtomValue(dateTimeAtom)
  const location = useAtomValue(locationAtom)
  const message = useAtomValue(messageAtom)
  const subTitle = useAtomValue(subTitleAtom)
  const title = useAtomValue(titleAtom)
  const currentVideo = useAtomValue(currentVideoAtom)

  const [savedVideoId, setSaveVideoId] = useAtom(currentEditingAtom)

  const [eventName, setEventName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleUpdateEventName = (value: string) => {
    setEventName(value)
  }

  const handleSaveEvent = async () => {
    setIsLoading(true)

    const payload = {
      userId: user?.uid,
      videoId: currentVideo,
      eventName,
      backgroundColor,
      backgroundOpacity,
      callToAction,
      location,
      message,
      dateTime,
      subTitle,
      title,
      createdAt: new Date().toISOString(),
    }

    try {
      const res = await fetch(
        savedVideoId ? `/api/events/${savedVideoId}` : '/api/events/save',
        {
          method: savedVideoId ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      )

      const data = await res.json()
      if (data.success) {
        alert('Event saved!')
        setSaveVideoId(data.insertedId)
      } else {
        alert('Failed to save event.')
      }
    } catch (err) {
      console.error('Save error:', err)
      alert('Unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteEvent = async () => {
    if (!savedVideoId) return

    const confirmDelete = confirm('Are you sure you want to delete this event?')
    if (!confirmDelete) return

    setIsLoading(true)
    try {
      const res = await fetch(`/api/events/${savedVideoId}`, {
        method: 'DELETE',
      })

      const data = await res.json()
      if (data.success) {
        alert('Event deleted!')
        setSaveVideoId(null)
        setEventName('')
      } else {
        alert('Failed to delete event.')
      }
    } catch (err) {
      console.error('Delete error:', err)
      alert('Unexpected error occurred while deleting')
    } finally {
      setIsLoading(false)
      router.push('/main/dashboard')
    }
  }

  if (!user) {
    return (
      <div className={styles['no-user']}>
        <h3>
          You{`&apos;`}re not registered. Please Sign In or create an account to
          save a Event
        </h3>

        <LoginButton customMessage="Create an account with Google" />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <input
        value={eventName}
        onChange={(e) => handleUpdateEventName(e.target.value)}
        disabled={isLoading}></input>

      <button
        disabled={!eventName.length || isLoading}
        onClick={handleSaveEvent}>
        Save
      </button>

      <button disabled={isLoading} onClick={handleDeleteEvent}>
        Delete
      </button>
    </div>
  )
}
