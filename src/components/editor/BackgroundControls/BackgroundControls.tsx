'use client'

import { useAtom } from 'jotai'
import { backgroundColorAtom, backgroundOpacityAtom } from '@/src/atoms/event'
import styles from './BackgroundControls-styles.module.css'

export function BackgroundControls() {
  const [backgroundColor, setBackgroundColor] = useAtom(backgroundColorAtom)
  const [backgroundOpacity, setBackgroundOpacity] = useAtom(
    backgroundOpacityAtom
  )

  return (
    <div className={styles.container}>
      <label>
        Background Color:
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </label>

      <label>
        Background Opacity:
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={backgroundOpacity}
          onChange={(e) => setBackgroundOpacity(parseFloat(e.target.value))}
        />
        <span>{(backgroundOpacity * 100).toFixed(0)}%</span>
      </label>
    </div>
  )
}
