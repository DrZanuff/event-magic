'use client'

import { useEffect } from 'react'
import { useResetTextElements } from '@/src/hooks/useResetTextElements'
import { Player } from '@remotion/player'
import { EditorComposition } from '@/src/components/editor/EditorComposition/EditorComposition'
import { EditorControls } from '@/src/components/editor/EditorControls/EditorControls'
import { EditorRegisteredUserArea } from '@/src/components/editor/EditorRegisteredUserArea'
import { useAtomValue } from 'jotai'
import { currentVideoAtom } from '@/src/atoms/editor'
import { availableVideos } from '@/src/data/videos'
import { EditorLayerElements } from '@/src/components/editor/EditorLayerElements'
import styles from './Editor-styles.module.css'

export function Editor() {
  const currentVideo = useAtomValue(currentVideoAtom)
  const video = availableVideos[currentVideo]
  const reset = useResetTextElements()

  useEffect(() => {
    return () => {
      reset()
    }
  }, [])

  return (
    <div className={styles['Editor-container']}>
      <div className={styles['Editor-controls']}>
        <EditorLayerElements />
        <EditorRegisteredUserArea />
      </div>
      <div className={styles['Editor-player']}>
        <Player
          component={EditorComposition}
          durationInFrames={video.duration * 30}
          style={{ width: '100%' }}
          compositionWidth={1200}
          compositionHeight={675}
          fps={30}
          loop={true}
          controls
          autoPlay
        />
      </div>

      <div className={styles['Editor-controls']}>
        <EditorControls />
      </div>
    </div>
  )
}
