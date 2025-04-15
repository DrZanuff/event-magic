'use client'

import { VideoMetadata } from '@/src/atoms/editor'
import styles from './VideoSelector.module.css'

type VideoSelectorProps = {
  videoId: number
  video: VideoMetadata
  onPrevious: () => void
  onNext: () => void
}

export function VideoSelector({
  videoId,
  video,
  onPrevious,
  onNext,
}: VideoSelectorProps) {
  return (
    <div className={styles.wrapper}>
      <button onClick={onPrevious} className={styles.navButton}>
        ←
      </button>

      <div className={styles.thumbnailContainer}>
        <video
          className={styles.thumbnail}
          src={`/${video.url}`}
          muted
          playsInline
          preload="metadata"
        />
        <span className={styles.label}>Video {videoId}</span>
      </div>

      <button onClick={onNext} className={styles.navButton}>
        →
      </button>
    </div>
  )
}
