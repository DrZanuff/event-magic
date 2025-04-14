'use client'

import { useState } from 'react'
import Sketch from '@uiw/react-color-sketch'
import type { ColorPickerInputProps } from './ColorPickerInput.types'
import { Panel } from '@/src/components/core/Panel'
import { CloseIcon } from '@/src/components/icons/CloseIcon'
import { PanelSeparator } from '@/src/components/core/PanelSeparator'
import styles from './ColorPickerInput-styles.module.css'
import buttons from '../../../styles/buttons.module.css'

export function ColorPickerInput({
  label,
  value,
  onChange,
}: ColorPickerInputProps) {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible((prev) => !prev)
  }

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <div className={styles.ColorPickerInputContainer}>
      <span>{label}</span>
      <span
        className={styles.color}
        style={{ backgroundColor: value }}
        onClick={handleClick}></span>
      {visible && (
        <div className={styles.colorPickerModal}>
          <Panel title={label}>
            <div className={styles.innerContainer}>
              <button
                style={{
                  minHeight: '0.8rem',
                  minWidth: '0.8rem',
                  maxHeight: '0.8rem',
                  maxWidth: '0.8rem',
                  padding: '0.8rem',
                  borderRadius: '50%',
                  marginLeft: 'auto',
                }}
                className={buttons['button-purple-outline']}
                onClick={handleClose}>
                <CloseIcon />
              </button>
            </div>
            <PanelSeparator />
            <div className={styles.innerContainer}>
              <Sketch
                style={{ backgroundColor: 'var(--background-b2)' }}
                color={value}
                onChange={(color) => {
                  onChange(color.hexa)
                }}
              />
            </div>
          </Panel>
        </div>
      )}
    </div>
  )
}
