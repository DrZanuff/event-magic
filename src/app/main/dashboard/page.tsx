import { Dashboard } from '@/src/components/dashboard/Dashboard'

export default function DashboardPage() {
  return (
    <div
      style={{
        width: '80%',
        height: '70vh',
        border: '1px dashed gray',
        flexDirection: 'column',
        display: 'flex',
      }}>
      Dashboard Page
      <Dashboard />
    </div>
  )
}
