import {
  AbsoluteFill,
  Video,
  staticFile,
  useCurrentFrame,
  interpolate,
} from 'remotion'

export const LandingComposition = () => {
  const frame = useCurrentFrame()

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  })
  const titleTranslateY = interpolate(frame, [0, 30], [-40, 0], {
    extrapolateRight: 'clamp',
  })

  const eventDescriptionOpacity = interpolate(frame, [15, 45], [0, 1], {
    extrapolateRight: 'clamp',
  })
  const eventDescriptionTranslateY = interpolate(frame, [15, 45], [-20, 0], {
    extrapolateRight: 'clamp',
  })

  const subtitleOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill>
      <Video
        src={staticFile('videos/video3.mp4')}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '20%',
          width: '100%',
          textAlign: 'center',
          color: 'white',
          fontSize: '2rem',
          fontWeight: 700,
          textShadow: '0 2px 10px #0008',
          opacity: titleOpacity,
          transform: `translateY(${titleTranslateY}px)`,
          zIndex: 1,
        }}>
        ✨ Your story deserves a magical invitation
      </div>

      <div
        style={{
          position: 'absolute',
          top: '45%',
          width: '100%',
          padding: '0 1rem',
          textAlign: 'center',
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 500,
          lineHeight: 1.4,
          textShadow: '0 2px 8px #0009',
          opacity: eventDescriptionOpacity,
          transform: `translateY(${eventDescriptionTranslateY}px)`,
          zIndex: 1,
        }}>
        Join us for an unforgettable evening of music, laughter, and connection.
        <br />
        Dance under the stars with your favorite people!
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          width: '100%',
          textAlign: 'center',
          color: 'black',
          backgroundColor: 'white',
          fontSize: '1.2rem',
          fontWeight: 500,
          padding: '0.6rem 1.2rem',
          boxShadow: '0 4px 20px #0004',
          opacity: subtitleOpacity,
          zIndex: 1,
        }}>
        777 Enchanted Ave · Every Friday at 8PM
      </div>
    </AbsoluteFill>
  )
}
