'use client'

import { useAtomValue } from 'jotai'
import { currentSelectedLayerElementAtom } from '@/src/atoms/editor'
import type { VideoMetadata } from '@/src/atoms/editor'
import type { TextElement } from '@/src/atoms/event'
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
  videoOpacity: number
  elements: TextElement[]
}

export function CompositionRenderer({
  video,
  backgroundColor,
  backgroundOpacity,
  videoOpacity,
  elements,
}: CompositionRendererProps) {
  const currentSelectedElement = useAtomValue(currentSelectedLayerElementAtom)

  const frame = useCurrentFrame()

  // const translateY = interpolate(frame, [0, 30], [-300, -100], {
  //   extrapolateRight: 'clamp',
  // })

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  })

  const renderTextElement = (el: TextElement, index: number) => {
    const isSelected = el.layer === currentSelectedElement

    return (
      <div
        key={index}
        style={{
          position: 'absolute',
          top: `${el.y}em`,
          left: `${el.x}em`,
          padding: `${el.paddingY}em ${el.paddingX}em`,
          transform: `rotate(${el.angle}deg)`,
          fontSize: `${el.fontSize}em`,
          fontFamily: el.fontName,
          ...(el.shadowEnabled
            ? {
                boxShadow: `${el.shadowOffset}em ${el.shadowOffset}em ${el.shadowBlur}em ${el.shadowColor}`,
              }
            : {}),
          color: el.fontColor,
          backgroundColor: el.backGroundEnabled ? el.backgroundColor : 'unset',
          borderRadius: el.borderRadius,
          ...(el.shadowFontEnabled
            ? {
                textShadow: `${el.shadowFontOffset}em ${el.shadowFontOffset}em ${el.shadowFontBlur}em ${el.shadowFontColor}`,
              }
            : {}),
          whiteSpace: 'pre-wrap',
          maxWidth: '90%',
          border: isSelected ? '2px dotted red' : 'none',
        }}>
        {el.text}
      </div>
    )
  }

  return (
    <Sequence from={0} durationInFrames={video.duration * 30}>
      <AbsoluteFill
      // style={{ backgroundColor }}
      >
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
            opacity: videoOpacity,
            inset: 0,
            zIndex: 0,
            width: '100%',
            height: 'auto',
          }}
        />

        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // transform: `translateY(${translateY}px)`,
            opacity,
          }}>
          {elements.map(renderTextElement)}
        </AbsoluteFill>
      </AbsoluteFill>
    </Sequence>
  )
}
