import { TextElement } from '@/src/atoms/event'
import { PrimitiveAtom } from 'jotai'

export interface TextElementEditorProps {
  label?: string
  atom: PrimitiveAtom<TextElement>
}
