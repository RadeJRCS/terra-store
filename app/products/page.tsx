'use client'
import ShopNav from '@/components/ShopNav'
import ShopFooter from '@/components/ShopFooter'
import { products } from '@/lib/products'
import { useCart } from '@/lib/cart'
import { useState } from 'react'

export default function ProductsPage() {
  const { addItem } = useCart()
  const [filter, setFilter] = useState('All')
  const [added, setAdded] = useState<string | null>(null)
  const categories = ['All', ...new Set(products.map(p => p.category))]
  const filtered = filter === 'All' ? products : products.filter(p => p.category === filter)

  const handleAdd = (product: typeof products[0]) => {
    addItem(product, product.colors[0])
    setAdded(product.id)
    setTimeout(() => setAdded(null), 1500)
  }

  return (
    <div className="min-h-screen flex flex-col"><ShopNav />
      <div className="max-w-5xl mx-auto px-6 py-10 flex-1">
        <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
          <div>
            <div className="text-[11px] tracking-widest text-gray-400 uppercase mb-2">Shop</div>
            <h1 className="font-serif text-4xl text-brand">All products</h1>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(c => <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1.5 rounded-full text-[12px] transition-all ${filter === c ? 'bg-brand text-white' : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-400'}`}>{c}</button>)}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map(p => (
            <div key={p.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform group">
              <div className="bg-brand-mid p-8 flex items-center justify-center relative">
                <span className="text-5xl group-hover:scale-110 transition-transform">{p.emoji}</span>
                {p.originalPrice && <span className="absolute top-3 right-3 bg-brand-accent text-white text-[10px] px-2 py-0.5 rounded-full font-medium">Save ${p.originalPrice - p.price}</span>}
              </div>
              <div className="p-5">
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{p.category}</div>
                <h3 className="text-[15px] font-medium text-brand mb-1">{p.name}</h3>
                <p className="text-[12px] text-gray-400 font-light mb-3 line-clamp-2">{p.description}</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[12px] text-brand-accent">{'★'.repeat(Math.round(p.rating))}</span>
                  <span className="text-[11px] text-gray-400">({p.reviews.toLocaleString()})</span>
                </div>
                <div className="flex gap-1.5 mb-3">{p.colors.map(c => <span key={c} className="text-[10px] bg-brand-light text-gray-500 px-2 py-0.5 rounded-full">{c}</span>)}</div>
                <div className="flex items-center justify-between">
                  <div><span className="text-[18px] font-medium text-brand">${p.price}</span>{p.originalPrice && <span className="text-[13px] text-gray-400 line-through ml-2">${p.originalPrice}</span>}</div>
                  <button onClick={() => handleAdd(p)} className={`px-4 py-2 rounded-lg text-[12px] font-medium transition-all ${added === p.id ? 'bg-green-600 text-white' : 'bg-brand text-white hover:opacity-90'}`}>{added === p.id ? '✓ Added' : 'Add to cart'}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ShopFooter />
    </div>
  )
}
