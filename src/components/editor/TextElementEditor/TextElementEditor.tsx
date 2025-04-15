'use client'

import type { TextElementEditorProps } from './TextElementEditor.types'
import { TypographyEditor } from '@/src/components/editor/TextElementEditor/components/TypographyEditor'
import { BoxEditor } from '@/src/components/editor/TextElementEditor/components/BoxEditor'
import { PositionEditor } from '@/src/components/editor/TextElementEditor/components/PositionEditor'
import { AnimationEditor } from '@/src/components/editor/TextElementEditor/components/AnimationEditor'
import { PanelSeparator } from '@/src/components/core/PanelSeparator'
import styles from './TextElementEditor-styles.module.css'

export function TextElementEditor({ label, atom }: TextElementEditorProps) {
  return (
    <>
      <div className={styles.container}>
        <h3>{label}</h3>
        <TypographyEditor atom={atom} label="Typography" />
      </div>
      <PanelSeparator />

      <div className={styles.container}>
        <BoxEditor atom={atom} label="Box" />
      </div>

      <PanelSeparator />
      <div className={styles.container}>
        <PositionEditor atom={atom} />
      </div>

      <PanelSeparator />
      <div className={styles.container}>
        <AnimationEditor atom={atom} label="Animation" />
      </div>
    </>
  )
}
