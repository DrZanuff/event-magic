'use client'

import { useAtom } from 'jotai'
import type { FadeAnimation } from '@/src/atoms/event'
import { fadeInAnimationAtom, fadeOutAnimationAtom } from '@/src/atoms/event'
import inputStyle from '../../../styles/input.module.css'
import styles from './AnimationControls.module.css'

const fadeAnimations: FadeAnimation[] = [
  'None',
  'Fade',
  'SlideDown',
  'SlideUp',
  'SlideLeft',
  'SlideRight',
]

export function AnimationControls() {
  const [fadeInAnimation, setFadeInAnimation] = useAtom(fadeInAnimationAtom)
  const [fadeOutAnimation, setFadeOutAnimation] = useAtom(fadeOutAnimationAtom)

  return (
    <div className={styles.container}>
      <h4>Animation</h4>

      <div className={styles.rowInput}>
        <label>
          <span>In</span>
          <select
            className={inputStyle.input}
            value={fadeInAnimation}
            onChange={(e) =>
              setFadeInAnimation(e.target.value as FadeAnimation)
            }>
            {fadeAnimations.map((anim) => (
              <option key={anim} value={anim}>
                {anim}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.rowInput}>
        <label>
          <span>Out</span>

          <select
            className={inputStyle.input}
            value={fadeOutAnimation}
            onChange={(e) =>
              setFadeOutAnimation(e.target.value as FadeAnimation)
            }>
            {fadeAnimations.map((anim) => (
              <option key={anim} value={anim}>
                {anim}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
}
