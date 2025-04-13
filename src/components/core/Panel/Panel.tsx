import type { PanelProps } from './Panel.types'
import styles from './Panel-styles.module.css'

export function Panel({ title, children }: PanelProps) {
  return (
    <div className={styles.PanelContainer}>
      {title && <div className={styles.header}>{title}</div>}
      <div className={styles.body}>{children}</div>
    </div>
  )
}
