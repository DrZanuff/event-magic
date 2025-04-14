'use client'

import { useAtom } from 'jotai'
import { TextElement } from '@/src/atoms/event'
import type { TextElementEditorProps } from '@/src/components/editor/TextElementEditor/TextElementEditor.types'
import { ColorPickerInput } from '@/src/components/core/ColorPickerInput'
import inputStyle from '../../../../styles/input.module.css'
import styles from '../TextElementEditor-styles.module.css'

export function TypographyEditor({ label, atom }: TextElementEditorProps) {
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

      <label className={styles.areaInput}>
        <span>Text</span>
        <textarea
          className={inputStyle.input}
          value={textElement.text}
          onChange={(e) => handleChange('text', e.target.value)}
        />
      </label>

      <div className={styles.rowCompact}>
        <label>
          <span>Size</span>
          <input
            className={inputStyle.input}
            type="number"
            step="0.1"
            value={textElement.fontSize}
            onChange={(e) => handleChange('fontSize', Number(e.target.value))}
          />
        </label>

        <ColorPickerInput
          label="Color"
          value={textElement.fontColor}
          onChange={(newColor) => handleChange('fontColor', newColor)}
        />
      </div>
    </>
  )
}
