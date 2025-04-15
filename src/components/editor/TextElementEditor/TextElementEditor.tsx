'use client'

import type { TextElementEditorProps } from './TextElementEditor.types'
import { TypographyEditor } from '@/src/components/editor/TextElementEditor/components/TypographyEditor'
import { BoxEditor } from '@/src/components/editor/TextElementEditor/components/BoxEditor'
import { PositionEditor } from '@/src/components/editor/TextElementEditor/components/PositionEditor'
import { PanelSeparator } from '@/src/components/core/PanelSeparator'
import styles from './TextElementEditor-styles.module.css'

export function TextElementEditor({ label, atom }: TextElementEditorProps) {
  return (
    <>
      <div className={styles.container} style={{ marginBottom: '0.5rem' }}>
        <h3>{label}</h3>
        <TypographyEditor atom={atom} label="Typography" />
      </div>

      <PanelSeparator />

      <div className={styles.container} style={{ marginBottom: '0.5rem' }}>
        <PositionEditor atom={atom} />
      </div>

      <PanelSeparator />

      <div className={styles.container} style={{ marginBottom: '0.5rem' }}>
        <BoxEditor atom={atom} label="Box" />
      </div>
    </>
  )
}
