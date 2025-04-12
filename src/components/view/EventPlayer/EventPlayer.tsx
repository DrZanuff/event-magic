'use client'

import { Player } from '@remotion/player'
import { EditorComposition } from '@/src/components/editor/EditorComposition/EditorComposition'
import { availableVideos } from '@/src/data/videos'
import { EventData } from '@/src/types'
import { AvailableVideosId } from '@/src/atoms/editor'

type EventPlayerProps = {
  event: EventData
}

export function EventPlayer({ event }: EventPlayerProps) {
  const video = availableVideos[Number(event.videoId) as AvailableVideosId]

  return (
    <Player
      component={EditorComposition}
      durationInFrames={video.duration * 30}
      compositionWidth={640}
      compositionHeight={360}
      fps={30}
      loop
      controls
      autoPlay
    />
  )
}
