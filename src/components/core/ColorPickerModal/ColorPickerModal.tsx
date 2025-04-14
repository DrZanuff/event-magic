'use client'

import { useAtom } from 'jotai'
import { colorPickerModalAtom } from '@/src/atoms/ui'
import { Panel } from '@/src/components/core/Panel'
import { PanelSeparator } from '@/src/components/core/PanelSeparator'
import { CloseIcon } from '@/src/components/icons/CloseIcon'
import Sketch from '@uiw/react-color-sketch'
import styles from './ColorPickerModal-styles.module.css'
import buttons from '../../../styles/buttons.module.css'

export function ColorPickerModal() {
  const [modalState, setModalState] = useAtom(colorPickerModalAtom)

  if (!modalState) return null

  const { label, value, onChange } = modalState

  return (
    <div className={styles.colorPickerModal}>
      <Panel title={label}>
        <div className={styles.innerContainer}>
          <button
            onClick={() => setModalState(null)}
            className={buttons['button-purple-outline']}
            style={{
              minHeight: '0.8rem',
              minWidth: '0.8rem',
              maxHeight: '0.8rem',
              maxWidth: '0.8rem',
              padding: '0.8rem',
              borderRadius: '50%',
              marginLeft: 'auto',
            }}>
            <CloseIcon />
          </button>
        </div>
        <PanelSeparator />
        <div className={styles.innerContainer}>
          <Sketch
            style={{ backgroundColor: 'var(--background-b2)' }}
            color={value}
            onChange={(color) => onChange(color.hexa)}
          />
        </div>
      </Panel>
    </div>
  )
}
