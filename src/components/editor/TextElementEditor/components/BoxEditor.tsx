'use client'

import { useAtom } from 'jotai'
import { TextElement } from '@/src/atoms/event'
import type { TextElementEditorProps } from '@/src/components/editor/TextElementEditor/TextElementEditor.types'
import { ColorPickerInput } from '@/src/components/core/ColorPickerInput'
import inputStyle from '../../../../styles/input.module.css'
import styles from '../TextElementEditor-styles.module.css'
import { Switch } from '@/src/components/core/Switch'

export function BoxEditor({ label, atom }: TextElementEditorProps) {
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

      <Switch
        label="Enabled"
        onChange={(status) => handleChange('backGroundEnabled', status)}
      />
      <div className={styles.rowCompact}>
        <ColorPickerInput
          label="Background"
          value={textElement.backgroundColor}
          onChange={(newColor) => handleChange('backgroundColor', newColor)}
        />

        <label>
          <span>Radius</span>
          <input
            className={inputStyle.input}
            type="number"
            value={textElement.borderRadius}
            onChange={(e) =>
              handleChange('borderRadius', Number(e.target.value))
            }
          />
        </label>
      </div>

      <h4>Shadow</h4>

      <div className={styles.rowCompact}>
        <Switch
          label="Enabled"
          onChange={(status) => handleChange('shadowEnabled', status)}
        />

        <ColorPickerInput
          label="Color"
          value={textElement.shadowColor}
          onChange={(newColor) => handleChange('shadowColor', newColor)}
        />
      </div>

      <div className={styles.rowCompact}>
        <label>
          <span>Offset</span>
          <input
            className={inputStyle.input}
            type="number"
            value={textElement.shadowOffset}
            onChange={(e) =>
              handleChange('shadowOffset', Number(e.target.value))
            }
          />
        </label>

        <label>
          <span>Blur</span>
          <input
            className={inputStyle.input}
            type="number"
            value={textElement.shadowBlur}
            onChange={(e) => handleChange('shadowBlur', Number(e.target.value))}
          />
        </label>
      </div>
    </>
  )
}
