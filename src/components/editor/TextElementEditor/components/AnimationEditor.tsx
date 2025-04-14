'use client'

import { useAtom } from 'jotai'
import type { TextElement, FadeAnimation } from '@/src/atoms/event'
import type { TextElementEditorProps } from '@/src/components/editor/TextElementEditor/TextElementEditor.types'
import inputStyle from '../../../../styles/input.module.css'
import styles from '../TextElementEditor-styles.module.css'

const fadeAnimations: FadeAnimation[] = [
  'None',
  'Fade',
  'SlideDown',
  'SlideUp',
  'SlideLeft',
  'SlideRight',
]

export function AnimationEditor({ label, atom }: TextElementEditorProps) {
  const [textElement, setTextElement] = useAtom(atom)

  const handleChange = (key: keyof TextElement, value: any) => {
    setTextElement((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <>
      <h4>{label}</h4>

      <div className={styles.rowInput}>
        <label>
          <span>In</span>
          <select
            className={inputStyle.input}
            value={textElement.fadeInAnimation}
            onChange={(e) =>
              handleChange('fadeInAnimation', e.target.value as FadeAnimation)
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
            value={textElement.fadeOutAnimation}
            onChange={(e) =>
              handleChange('fadeOutAnimation', e.target.value as FadeAnimation)
            }>
            {fadeAnimations.map((anim) => (
              <option key={anim} value={anim}>
                {anim}
              </option>
            ))}
          </select>
        </label>
      </div>
    </>
  )
}
