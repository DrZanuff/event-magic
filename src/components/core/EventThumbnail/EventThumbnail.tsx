'use client'

import { Thumbnail } from '@remotion/player'
import { EventData } from '@/src/types'
import { CompositionRenderer } from '../CompositionRenderer'
import { availableVideos } from '@/src/data/videos'
import { AvailableVideosId } from '@/src/atoms/editor'
import styles from './EventThumbnail-styles.module.css'

type EventThumbnailProps = {
  event: EventData
  width?: number
  height?: number
  frame?: number
}

export function EventThumbnail({
  event,
  width = 256,
  height = 144,
  frame = 30,
}: EventThumbnailProps) {
  const video = availableVideos[Number(event.videoId) as AvailableVideosId]

  return (
    <div className={styles['EventThumbnail-container']}>
      <Thumbnail
        component={CompositionRenderer}
        compositionWidth={width}
        compositionHeight={height}
        frameToDisplay={frame}
        durationInFrames={video.duration * 30}
        fps={30}
        inputProps={{
          video,
          backgroundColor: event.backgroundColor,
          backgroundOpacity: event.backgroundOpacity,
          elements: [
            event.title,
            event.subTitle,
            event.message,
            event.location,
            event.dateTime,
            event.callToAction,
          ],
        }}
      />
    </div>
  )
}
