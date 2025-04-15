import { Dashboard } from '@/src/components/dashboard/Dashboard'
import style from './dashboard-page.module.css'

export default function DashboardPage() {
  return (
    <div className={style.dashboardContainer}>
      <div className={style.dashboardWindow}>
        <Dashboard />
      </div>
    </div>
  )
}
