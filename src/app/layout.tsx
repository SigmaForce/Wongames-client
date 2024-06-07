import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'
import { poppins } from '../styles/fonts'

export const metadata: Metadata = {
  title: 'Won Games',
  description: 'A Sua Nova plataforma de Jogos'
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
