import { Editor } from '@/src/components/editor/Editor'
import styles from './editor-page.module.css'

export default function EditorPage() {
  return (
    <div className={styles.editorContainer}>
      <Editor />
    </div>
  )
}
