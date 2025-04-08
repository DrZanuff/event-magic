'use client'

import type { DashboardProps } from './Dashboard.types'
import styles from './Dashboard-styles.module.css'

export function Dashboard({ value }: DashboardProps) {
  return (
    <div className={styles['Dashboard-container']}>
      <h1>Dashboard</h1>
      <h2>{value}</h2>
    </div>
  )
}
