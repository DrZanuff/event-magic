import { Editor } from '@/src/components/editor/Editor'

export default function EditorPage() {
  return (
    <div style={{ width: '80%', height: '70vh', border: '1px dashed gray' }}>
      Editor Page
      <Editor value="client" />
    </div>
  )
}
