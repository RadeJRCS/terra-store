'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import { Product } from './products'

type CartItem = { product: Product; quantity: number; color: string }
type CartCtx = {
  items: CartItem[]
  addItem: (product: Product, color: string) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, qty: number) => void
  total: number
  count: number
}

const CartContext = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (product: Product, color: string) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id && i.color === color)
      if (existing) return prev.map(i => i.product.id === product.id && i.color === color ? { ...i, quantity: i.quantity + 1 } : i)
      return [...prev, { product, quantity: 1, color }]
    })
  }

  const removeItem = (productId: string) => setItems(prev => prev.filter(i => i.product.id !== productId))
  const updateQuantity = (productId: string, qty: number) => {
    if (qty <= 0) return removeItem(productId)
    setItems(prev => prev.map(i => i.product.id === productId ? { ...i, quantity: qty } : i))
  }

  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)
  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  return <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, total, count }}>{children}</CartContext.Provider>
}

export const useCart = () => { const ctx = useContext(CartContext); if (!ctx) throw new Error('useCart must be inside CartProvider'); return ctx }
