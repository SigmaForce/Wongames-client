import Auth from '@/templates/Auth'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <Auth>{children}</Auth>
}
