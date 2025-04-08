import { Providers } from '@/src/providers'

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Providers>{children}</Providers>
}
