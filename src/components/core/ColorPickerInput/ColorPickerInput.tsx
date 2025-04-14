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

  return (
    <div className={styles.ColorPickerInputContainer}>
      <span>{label}</span>
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
    </div>
  )
}
