'use client'

import { colorPickerModalAtom } from '@/src/atoms/ui'
import type { ColorPickerInputProps } from './ColorPickerInput.types'
import styles from './ColorPickerInput-styles.module.css'
import { useSetAtom } from 'jotai'

export function ColorPickerInput({
  label,
  value,
  onChange,
}: ColorPickerInputProps) {
  const openColorModal = useSetAtom(colorPickerModalAtom)

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value
    if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(hex)) {
      onChange(hex)
    }
  }

  return (
    <div className={styles.ColorPickerInputContainer}>
      <div className={styles.previewAndInput}>
        <span
          className={styles.color}
          style={{ backgroundColor: value }}
          onClick={() =>
            openColorModal({
              isOpen: true,
              label,
              value,
              onChange,
            })
          }
        />
        <input
          type="text"
          value={value}
          onChange={handleHexChange}
          className={styles.hexInput}
          maxLength={7}
        />
      </div>
    </div>
  )
}
