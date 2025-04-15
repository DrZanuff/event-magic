'use client'

import styles from './Slider.module.css'

type SliderProps = {
  label: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
}

export function Slider({
  label,
  value,
  onChange,
  min = 0,
  max = 1,
  step = 0.01,
}: SliderProps) {
  return (
    <label className={styles.sliderContainer}>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.slider}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      <span className={styles.percentage}>{Math.round(value * 100)}%</span>
    </label>
  )
}
