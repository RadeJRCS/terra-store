'use client'
import ShopNav from '@/components/ShopNav'
import ShopFooter from '@/components/ShopFooter'
import Link from 'next/link'
import { useCart } from '@/lib/cart'

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, count } = useCart()

  return (
    <div className="min-h-screen flex flex-col"><ShopNav />
      <div className="max-w-3xl mx-auto px-6 py-10 flex-1">
        <h1 className="font-serif text-4xl text-brand mb-8">Your cart {count > 0 && <span className="text-gray-400 text-2xl">({count})</span>}</h1>
        {items.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-5xl block mb-4">🛒</span>
            <p className="text-[16px] text-gray-400 mb-6">Your cart is empty</p>
            <Link href="/products" className="bg-brand text-white px-6 py-3 rounded-lg text-[14px] font-medium hover:opacity-90 transition-opacity">Browse products</Link>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {items.map(item => (
                <div key={item.product.id} className="bg-white border border-gray-100 rounded-xl p-5 flex items-center gap-5">
                  <div className="w-16 h-16 bg-brand-mid rounded-lg flex items-center justify-center text-3xl flex-shrink-0">{item.product.emoji}</div>
                  <div className="flex-1">
                    <div className="text-[15px] font-medium text-brand">{item.product.name}</div>
                    <div className="text-[12px] text-gray-400">{item.color}</div>
                  </div>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-3 py-1.5 text-gray-400 hover:text-brand transition-colors">-</button>
                    <span className="text-[14px] font-medium w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-3 py-1.5 text-gray-400 hover:text-brand transition-colors">+</button>
                  </div>
                  <div className="text-right">
                    <div className="text-[16px] font-medium text-brand">${item.product.price * item.quantity}</div>
                    <button onClick={() => removeItem(item.product.id)} className="text-[11px] text-red-400 hover:text-red-600 transition-colors">Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[14px] text-gray-500">Subtotal</span>
                <span className="text-[14px] text-brand">${total}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[14px] text-gray-500">Shipping</span>
                <span className="text-[14px] text-gray-500">{total >= 100 ? 'Free' : '$9.95'}</span>
              </div>
              <div className="border-t border-gray-100 my-3" />
              <div className="flex justify-between items-center mb-6">
                <span className="text-[16px] font-medium text-brand">Total</span>
                <span className="text-[20px] font-medium text-brand">${total >= 100 ? total : total + 9.95}</span>
              </div>
              <Link href="/checkout" className="block w-full bg-brand text-white py-3 rounded-lg text-[14px] font-medium text-center hover:opacity-90 transition-opacity">
                Proceed to checkout
              </Link>
              <Link href="/products" className="block w-full text-center text-[13px] text-gray-400 hover:text-brand mt-3 transition-colors">
                Continue shopping
              </Link>
            </div>
          </>
        )}
      </div>
      <ShopFooter />
    </div>
  )
}
