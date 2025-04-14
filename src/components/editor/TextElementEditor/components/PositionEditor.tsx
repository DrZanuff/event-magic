'use client'

import { useAtom } from 'jotai'
import { TextElement } from '@/src/atoms/event'
import type { TextElementEditorProps } from '@/src/components/editor/TextElementEditor/TextElementEditor.types'
import inputStyle from '../../../../styles/input.module.css'
import styles from '../TextElementEditor-styles.module.css'

export function PositionEditor({ atom }: TextElementEditorProps) {
  const [textElement, setTextElement] = useAtom(atom)

  const handleChange = (key: keyof TextElement, value: any) => {
    setTextElement((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <>
      <div className={styles.rowCompact}>
        <label>
          <span>Angle</span>
          <input
            className={inputStyle.input}
            type="number"
            value={textElement.angle}
            onChange={(e) => handleChange('angle', Number(e.target.value))}
          />
        </label>
      </div>

      <div className={styles.rowCompact}>
        <label>
          <span>X</span>
          <input
            className={inputStyle.input}
            type="number"
            value={textElement.x}
            onChange={(e) => handleChange('x', Number(e.target.value))}
          />
        </label>

        <label>
          <span>Y</span>
          <input
            className={inputStyle.input}
            type="number"
            value={textElement.y}
            onChange={(e) => handleChange('y', Number(e.target.value))}
          />
        </label>
      </div>
    </>
  )
}
