'use client'

import {
  messageAtom,
  locationAtom,
  dateTimeAtom,
  callToActionAtom,
  subTitleAtom,
  titleAtom,
} from '@/src/atoms/event'
import { currentVideoAtom } from '@/src/atoms/editor'
import { availableVideos } from '@/src/data/videos'
import { maxVideoId, minVideoId } from '@/src/utils/videoNavigation'
import { useAtom } from 'jotai'
import styles from './EditorControls-styles.module.css'
import { TextElementEditor } from '@/src/components/editor/TextElementEditor'
import { BackgroundControls } from '../BackgroundControls'

export function EditorControls() {
  const [currentVideo, setCurrentVideo] = useAtom(currentVideoAtom)
  const video = availableVideos[currentVideo]

  const handlePrevious = () => {
    setCurrentVideo((prev) =>
      prev === minVideoId ? maxVideoId : ((prev - 1) as typeof prev)
    )
  }

  const handleNext = () => {
    setCurrentVideo((prev) =>
      prev === maxVideoId ? minVideoId : ((prev + 1) as typeof prev)
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.videoSelector}>
        <button onClick={handlePrevious}>←</button>
        <div className={styles.videoDescription}>
          <h2>Video {currentVideo}</h2>
          <p>{video.description}</p>
        </div>
        <button onClick={handleNext}>→</button>
      </div>

      <div className={styles.textEditorsContainer}>
        <TextElementEditor label="Title" atom={titleAtom} />
        <TextElementEditor label="Subtitle" atom={subTitleAtom} />
        <TextElementEditor label="Messsage" atom={messageAtom} />
        <TextElementEditor label="Location" atom={locationAtom} />
        <TextElementEditor label="Date & Time" atom={dateTimeAtom} />
        <TextElementEditor label="Call to Action" atom={callToActionAtom} />
      </div>

      <BackgroundControls />
    </div>
  )
}
