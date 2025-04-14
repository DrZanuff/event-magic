'use client'

import { useAtom } from 'jotai'
import {
  backgroundColorAtom,
  backgroundOpacityAtom,
  videoOpacityAtom,
} from '@/src/atoms/event'
import { ColorPickerInput } from '@/src/components/core/ColorPickerInput'
import styles from './BackgroundControls-styles.module.css'

export function BackgroundControls() {
  const [backgroundColor, setBackgroundColor] = useAtom(backgroundColorAtom)
  const [backgroundOpacity, setBackgroundOpacity] = useAtom(
    backgroundOpacityAtom
  )
  const [videoOpacity, setVideoOpacity] = useAtom(videoOpacityAtom)

  return (
    <div className={styles.container}>
      <h3>Background</h3>

      <ColorPickerInput
        label="Color"
        value={backgroundColor}
        onChange={(newColor) => setBackgroundColor(newColor)}
      />

      <h3>Opacity</h3>

      <label>
        <span>Background</span>
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

      <label>
        <span>Video</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={videoOpacity}
          onChange={(e) => setVideoOpacity(parseFloat(e.target.value))}
        />
        <span>{(videoOpacity * 100).toFixed(0)}%</span>
      </label>
    </div>
  )
}
