'use client'

import {
  AbsoluteFill,
  Sequence,
  Video,
  useCurrentFrame,
  interpolate,
  staticFile,
} from 'remotion'
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

export function EditorComposition() {
  const frame = useCurrentFrame()

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

  const translateY = interpolate(frame, [0, 30], [-300, -100], {
    extrapolateRight: 'clamp',
  })

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  })

  const renderTextElement = (el: typeof title) => (
    <div
      style={{
        position: 'absolute',
        top: el.y,
        left: el.x,
        transform: `rotate(${el.angle}deg)`,
        fontSize: el.fontSize,
        fontFamily: el.fontName,
        color: el.fontColor,
        backgroundColor: el.backgroundColor,
        borderRadius: el.borderRadius,
        boxShadow: `${el.shadowOffset}px ${el.shadowOffset}px ${el.shadowBlur}px ${el.shadowColor}`,
        padding: '8px 16px',
        whiteSpace: 'pre-wrap',
        maxWidth: '90%',
      }}>
      {el.text}
    </div>
  )

  return (
    <Sequence from={0} durationInFrames={video.duration * 30}>
      <AbsoluteFill style={{ backgroundColor }}>
        <div
          style={{
            backgroundColor,
            opacity: backgroundOpacity,
            position: 'absolute',
            inset: 0,
          }}
        />

        <Video
          src={staticFile(video.url)}
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        />

        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            transform: `translateY(${translateY}px)`,
            opacity,
          }}>
          {renderTextElement(title)}
          {renderTextElement(subTitle)}
          {renderTextElement(message)}
          {renderTextElement(location)}
          {renderTextElement(dateTime)}
          {renderTextElement(callToAction)}
        </AbsoluteFill>
      </AbsoluteFill>
    </Sequence>
  )
}
