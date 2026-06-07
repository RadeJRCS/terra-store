'use client'
import Link from 'next/link'
import { useCart } from '@/lib/cart'

export default function ShopNav() {
  const { count } = useCart()
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-serif text-[22px] text-brand tracking-tight">terra</Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-[13px] text-gray-500 hover:text-brand transition-colors">Home</Link>
          <Link href="/products" className="text-[13px] text-gray-500 hover:text-brand transition-colors">Shop</Link>
          <Link href="/cart" className="text-[13px] text-gray-500 hover:text-brand transition-colors relative">
            Cart
            {count > 0 && (
              <span className="absolute -top-2 -right-4 bg-brand-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}
