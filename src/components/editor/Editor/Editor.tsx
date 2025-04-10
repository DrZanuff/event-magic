'use client'

import { Player } from '@remotion/player'
import { EditorComposition } from '@/src/components/editor/EditorComposition/EditorComposition'
import { EditorControls } from '@/src/components/editor/EditorControls/EditorControls'
import { EditorRegisteredUserArea } from '@/src/components/editor/EditorRegisteredUserArea'
import { useAtomValue } from 'jotai'
import { currentVideoAtom } from '@/src/atoms/editor'
import { availableVideos } from '@/src/data/videos'
import styles from './Editor-styles.module.css'

export function Editor() {
  const currentVideo = useAtomValue(currentVideoAtom)
  const video = availableVideos[currentVideo]

  return (
    <div className={styles['Editor-container']}>
      <div className={styles['Editor-player']}>
        <Player
          component={EditorComposition}
          durationInFrames={video.duration * 30}
          compositionWidth={640}
          compositionHeight={360}
          fps={30}
          loop={true}
          controls
          autoPlay
        />
      </div>

      <div className={styles['Editor-controls']}>
        <EditorControls />
        <EditorRegisteredUserArea />
      </div>
    </div>
  )
}
