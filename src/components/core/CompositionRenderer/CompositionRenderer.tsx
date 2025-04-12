'use client'

import { VideoMetadata } from '@/src/atoms/editor'
import { TextElement } from '@/src/atoms/event'
import {
  AbsoluteFill,
  Sequence,
  Video,
  useCurrentFrame,
  interpolate,
  staticFile,
} from 'remotion'

type CompositionRendererProps = {
  video: VideoMetadata
  backgroundColor: string
  backgroundOpacity: number
  elements: TextElement[]
}

export function CompositionRenderer({
  video,
  backgroundColor,
  backgroundOpacity,
  elements,
}: CompositionRendererProps) {
  const frame = useCurrentFrame()

  const translateY = interpolate(frame, [0, 30], [-300, -100], {
    extrapolateRight: 'clamp',
  })

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  })

  const renderTextElement = (el: TextElement, index: number) => (
    <div
      key={index}
      style={{
        position: 'absolute',
        top: el.y,
        left: el.x,
        transform: `rotate(${el.angle}deg)`,
        fontSize: `${el.fontSize}em`,
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
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            width: '100%',
          }}
        />

        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            transform: `translateY(${translateY}px)`,
            opacity,
          }}>
          {elements.map(renderTextElement)}
        </AbsoluteFill>
      </AbsoluteFill>
    </Sequence>
  )
}
