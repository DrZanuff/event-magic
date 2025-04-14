import { atom } from 'jotai'

type ColorPickerModalState = {
  isOpen: boolean
  label: string
  value: string
  onChange: (newColor: string) => void
} | null

export const colorPickerModalAtom = atom<ColorPickerModalState>(null)
