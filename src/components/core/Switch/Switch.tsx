import styles from './Switch.module.css'

type SwitchProps = {
  onChange: (checked: boolean) => void
  label?: string
}

export function Switch({ onChange, label }: SwitchProps) {
  return (
    <label className={styles.switchWrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        type="checkbox"
        className={styles.input}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={styles.slider} />
    </label>
  )
}
