'use client'

import { useAtom } from 'jotai'
import {
  backgroundColorAtom,
  backgroundOpacityAtom,
  videoOpacityAtom,
} from '@/src/atoms/event'
import { ColorPickerInput } from '@/src/components/core/ColorPickerInput'
import { Slider } from '@/src/components/core/Slider'
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

      <div className={styles.color}>
        <ColorPickerInput
          label="Color"
          value={backgroundColor}
          onChange={(newColor) => setBackgroundColor(newColor)}
        />
      </div>

      <h4>Opacity</h4>

      <Slider
        label="Background"
        value={backgroundOpacity}
        onChange={setBackgroundOpacity}
      />

      <Slider label="Video" value={videoOpacity} onChange={setVideoOpacity} />
    </div>
  )
}
