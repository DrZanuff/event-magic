'use client'

import { Player } from '@remotion/player'
import { EditorComposition } from '@/src/components/editor/EditorComposition/EditorComposition'
import { availableVideos } from '@/src/data/videos'
import { EventData } from '@/src/types'
import { AvailableVideosId } from '@/src/atoms/editor'
import style from './EventPlayer.module.css'

type EventPlayerProps = {
  event: EventData
}

export function EventPlayer({ event }: EventPlayerProps) {
  const video = availableVideos[Number(event.videoId) as AvailableVideosId]

  return (
    <div className={style.player}>
      <Player
        component={EditorComposition}
        durationInFrames={video.duration * 30}
        style={{ width: '100%' }}
        compositionWidth={1200}
        compositionHeight={675}
        fps={30}
        loop={true}
        controls={false}
        autoPlay
      />
    </div>
  )
}
