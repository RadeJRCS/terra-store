import type { Metadata } from 'next'
import { CartProvider } from '@/lib/cart'
import './globals.css'

export const metadata: Metadata = {
  title: 'Terra Store - Premium Everyday Essentials',
  description: 'Thoughtfully designed products for modern living.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><CartProvider>{children}</CartProvider></body>
    </html>
  )
}
