'use client'
import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'
import { CartProvider } from '@/hooks/use-cart'

import { poppins } from '../styles/fonts'
import { ApolloProvider } from '@apollo/client'

import { useApollo } from '@/utils/apollo'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const client = useApollo()
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ApolloProvider client={client}>
          <StyledComponentsRegistry>
            <CartProvider>
              <Providers>{children}</Providers>
            </CartProvider>
          </StyledComponentsRegistry>
        </ApolloProvider>
      </body>
    </html>
  )
}
