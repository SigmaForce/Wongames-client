import Profile from '@/templates/Profile'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <Profile>{children}</Profile>
}
