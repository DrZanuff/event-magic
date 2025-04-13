import { useAtom } from 'jotai'
import {
  LayerElements,
  currentSelectedLayerElementAtom,
} from '@/src/atoms/editor'
import { Panel } from '@/src/components/core/Panel'
import { TextIcon } from '@/src/components/icons/TextIcon'
import styles from './EditorLayerElements-styles.module.css'

const layerElementList: { value: LayerElements; label: string }[] = [
  { value: 'Title', label: 'Title' },
  { value: 'Subtitle', label: 'Subtitle' },
  { value: 'Message', label: 'Main Message' },
  { value: 'Location', label: 'Local' },
  { value: 'DateTime', label: 'Date & Time' },
  { value: 'Info', label: 'Info' },
]

export function EditorLayerElements() {
  const [selectedElement, setSelectedElement] = useAtom(
    currentSelectedLayerElementAtom
  )

  const handleSelectElement = (element: LayerElements) => {
    if (selectedElement === element) {
      setSelectedElement(null)
      return
    }

    setSelectedElement(element)
  }

  return (
    <Panel title="Layer Elements">
      {layerElementList.map(({ value, label }) => {
        const isSelected = selectedElement === value
        return (
          <div
            key={value}
            className={isSelected ? styles.elementSelected : styles.element}
            onClick={() => handleSelectElement(value)}>
            <TextIcon color={isSelected ? 'var(--accent-a2)' : '#fff'} />
            <span>{label}</span>
          </div>
        )
      })}
    </Panel>
  )
}
