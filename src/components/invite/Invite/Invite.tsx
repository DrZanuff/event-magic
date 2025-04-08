'use client'

import type { InviteProps } from './Invite.types'
import styles from './Invite-styles.module.css'

export function Invite({ value }: InviteProps) {
  return (
    <div className={styles['Invite-container']}>
      <h1>Invite</h1>
      <h2>{value}</h2>
    </div>
  )
}
