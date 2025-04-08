'use client'

import type { EditorProps } from './Editor.types'
import styles from './Editor-styles.module.css'
import { useState } from 'react'

export function Editor({ value }: EditorProps) {
  const [state, setState] = useState()

  return (
    <div className={styles['Editor-container']}>
      <h1>Editor</h1>
      <h2>{value}</h2>
    </div>
  )
}
