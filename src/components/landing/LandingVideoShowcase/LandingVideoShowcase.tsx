'use client'

import { Player } from '@remotion/player'
import { LandingComposition } from '@/src/components/landing/LandingComposition'
import styles from './LandingVideoShowcase-styles.module.css'

export function LandingVideoShowcase() {
  return (
    <div className={styles.LandingVideoShowcaseContainer}>
      <Player
        component={LandingComposition}
        durationInFrames={300}
        compositionWidth={900}
        compositionHeight={506}
        fps={30}
        loop
        autoPlay
        controls={false}
      />
    </div>
  )
}
