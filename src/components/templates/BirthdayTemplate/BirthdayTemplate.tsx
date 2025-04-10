'use client'

import { Sequence, AbsoluteFill, useCurrentFrame, interpolate } from 'remotion'

export function BirthdayTemplate() {
  const frame = useCurrentFrame()

  const translateY = interpolate(frame, [0, 30], [-300, -100], {
    extrapolateRight: 'clamp',
  })

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  })

  return (
    <Sequence from={0}>
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          transform: `translateY(${translateY}px)`,
          opacity,
        }}>
        <span style={{ fontSize: 30 }}>🎉 Happy Birthday! 🎉</span>
      </AbsoluteFill>
    </Sequence>
  )
}
