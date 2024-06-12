import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'
import { poppins } from '../styles/fonts'

export const metadata: Metadata = {
  title: {
    default: 'Won Games',
    template: '%s | Won Games'
  },
  description: 'The best Game Stores in the world!',
  icons: {
    icon: '/img/icon-512.png',
    apple: '/img/icon-512.png'
  },
  manifest: '/manifest.json'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
