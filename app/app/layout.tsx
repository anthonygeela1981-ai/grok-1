import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JoePusherPrivateVault',
  description: 'Exclusive 4K Adult Content',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
