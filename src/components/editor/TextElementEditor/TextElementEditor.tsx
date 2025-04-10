'use client'

import { useAtom } from 'jotai'
import { FadeAnimation, TextElement } from '@/src/atoms/event'
import type { TextElementEditorProps } from './TextElementEditor.types'
import styles from './TextElementEditor-styles.module.css'

const fadeAnimations: FadeAnimation[] = [
  'None',
  'Fade',
  'SlideDown',
  'SlideUp',
  'SlideLeft',
  'SlideRight',
]

export function TextElementEditor({ label, atom }: TextElementEditorProps) {
  const [textElement, setTextElement] = useAtom(atom)

  const handleChange = (key: keyof TextElement, value: any) => {
    setTextElement((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className={styles.container}>
      <h3>{label}</h3>

      <label>
        Text:
        <input
          type="text"
          value={textElement.text}
          onChange={(e) => handleChange('text', e.target.value)}
        />
      </label>

      <label>
        Font Size:
        <input
          type="number"
          value={textElement.fontSize}
          onChange={(e) => handleChange('fontSize', Number(e.target.value))}
        />
      </label>

      <label>
        Font Color:
        <input
          type="color"
          value={textElement.fontColor}
          onChange={(e) => handleChange('fontColor', e.target.value)}
        />
      </label>

      <label>
        Background Color:
        <input
          type="color"
          value={textElement.backgroundColor}
          onChange={(e) => handleChange('backgroundColor', e.target.value)}
        />
      </label>

      <label>
        Border Radius:
        <input
          type="number"
          value={textElement.borderRadius}
          onChange={(e) => handleChange('borderRadius', Number(e.target.value))}
        />
      </label>

      <label>
        Angle:
        <input
          type="number"
          value={textElement.angle}
          onChange={(e) => handleChange('angle', Number(e.target.value))}
        />
      </label>

      <label>
        X:
        <input
          type="number"
          value={textElement.x}
          onChange={(e) => handleChange('x', Number(e.target.value))}
        />
      </label>

      <label>
        Y:
        <input
          type="number"
          value={textElement.y}
          onChange={(e) => handleChange('y', Number(e.target.value))}
        />
      </label>

      <label>
        Shadow Color:
        <input
          type="color"
          value={textElement.shadowColor}
          onChange={(e) => handleChange('shadowColor', e.target.value)}
        />
      </label>

      <label>
        Shadow Offset:
        <input
          type="number"
          value={textElement.shadowOffset}
          onChange={(e) => handleChange('shadowOffset', Number(e.target.value))}
        />
      </label>

      <label>
        Shadow Blur:
        <input
          type="number"
          value={textElement.shadowBlur}
          onChange={(e) => handleChange('shadowBlur', Number(e.target.value))}
        />
      </label>

      <label>
        Fade In Animation:
        <select
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

      <label>
        Fade Out Animation:
        <select
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
  )
}
