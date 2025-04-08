import { Providers } from '@/src/providers'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Providers>{children}</Providers>
}
