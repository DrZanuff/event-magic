'use client'

import { useAtomValue } from 'jotai'
import { currentVideoAtom } from '@/src/atoms/editor'
import {
  backgroundColorAtom,
  backgroundOpacityAtom,
  callToActionAtom,
  dateTimeAtom,
  locationAtom,
  messageAtom,
  subTitleAtom,
  titleAtom,
} from '@/src/atoms/event'
import { availableVideos } from '@/src/data/videos'
import { CompositionRenderer } from '@/src/components/core/CompositionRenderer'

export function EditorComposition() {
  const currentVideo = useAtomValue(currentVideoAtom)
  const video = availableVideos[currentVideo]

  const backgroundColor = useAtomValue(backgroundColorAtom)
  const backgroundOpacity = useAtomValue(backgroundOpacityAtom)

  const title = useAtomValue(titleAtom)
  const subTitle = useAtomValue(subTitleAtom)
  const message = useAtomValue(messageAtom)
  const location = useAtomValue(locationAtom)
  const dateTime = useAtomValue(dateTimeAtom)
  const callToAction = useAtomValue(callToActionAtom)

  return (
    <CompositionRenderer
      video={video}
      backgroundColor={backgroundColor}
      backgroundOpacity={backgroundOpacity}
      elements={[
        { ...title, layer: 'Title' },
        { ...subTitle, layer: 'Subtitle' },
        { ...message, layer: 'Message' },
        { ...location, layer: 'Location' },
        { ...dateTime, layer: 'DateTime' },
        { ...callToAction, layer: 'Info' },
      ]}
    />
  )
}
