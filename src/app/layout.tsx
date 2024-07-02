'use client'
import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'
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
            <Providers>{children}</Providers>
          </StyledComponentsRegistry>
        </ApolloProvider>
      </body>
    </html>
  )
}
