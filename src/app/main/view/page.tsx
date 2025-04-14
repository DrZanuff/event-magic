import { ViewEventPage } from '@/src/components/view/ViewEventPage'
import { Suspense } from 'react'

export default function ViewPage() {
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <ViewEventPage />
    </Suspense>
  )
}
