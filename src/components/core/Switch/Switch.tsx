import styles from './Switch.module.css'

type SwitchProps = {
  value: boolean
  onChange: (checked: boolean) => void
  label?: string
}

export function Switch({ value, onChange, label }: SwitchProps) {
  return (
    <label className={styles.switchWrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        type="checkbox"
        className={styles.input}
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={styles.slider} />
    </label>
  )
}
