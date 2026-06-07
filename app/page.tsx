'use client'
import ShopNav from '@/components/ShopNav'
import ShopFooter from '@/components/ShopFooter'
import Link from 'next/link'
import { products } from '@/lib/products'
import { useCart } from '@/lib/cart'
import { useState } from 'react'

export default function HomePage() {
  const { addItem } = useCart()
  const featured = products.slice(0, 3)
  const [added, setAdded] = useState<string | null>(null)

  const handleAdd = (product: typeof products[0]) => {
    addItem(product, product.colors[0])
    setAdded(product.id)
    setTimeout(() => setAdded(null), 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ShopNav />

      {/* Hero */}
      <section className="bg-brand-mid py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-brand leading-[1.1] mb-4">
            Everyday essentials,<br /><em className="italic text-brand-accent">thoughtfully made.</em>
          </h1>
          <p className="text-[16px] text-gray-500 max-w-md mx-auto mb-8 font-light leading-relaxed">
            Premium products designed for people who value simplicity, quality, and intention in everything they own.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/products" className="bg-brand text-white px-7 py-3 rounded-lg text-[14px] font-medium hover:opacity-90 transition-opacity">
              Shop all products
            </Link>
            <Link href="/products" className="bg-white text-brand border border-gray-200 px-7 py-3 rounded-lg text-[14px] hover:border-gray-400 transition-colors">
              New arrivals
            </Link>
          </div>
        </div>
      </section>

      {/* Features bar */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-gray-100">
          {[
            { icon: '📦', text: 'Free shipping over $100' },
            { icon: '↩️', text: '30-day free returns' },
            { icon: '🔒', text: 'Secure checkout' },
          ].map(f => (
            <div key={f.text} className="py-4 text-center text-[12px] text-gray-500 flex items-center justify-center gap-2">
              <span>{f.icon}</span> {f.text}
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="text-[11px] tracking-widest text-gray-400 uppercase mb-2">Featured</div>
              <h2 className="font-serif text-3xl text-brand">Most loved this season</h2>
            </div>
            <Link href="/products" className="text-[13px] text-brand-accent font-medium hover:underline">View all</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map(p => (
              <div key={p.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform group">
                <div className="bg-brand-mid p-8 flex items-center justify-center relative">
                  <span className="text-5xl group-hover:scale-110 transition-transform">{p.emoji}</span>
                  {p.originalPrice && (
                    <span className="absolute top-3 right-3 bg-brand-accent text-white text-[10px] px-2 py-0.5 rounded-full font-medium">
                      Save ${p.originalPrice - p.price}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{p.category}</div>
                  <Link href="/products" className="text-[15px] font-medium text-brand block mb-2 hover:text-brand-accent transition-colors">{p.name}</Link>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[12px] text-brand-accent">{'★'.repeat(Math.round(p.rating))}</span>
                    <span className="text-[11px] text-gray-400">({p.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[18px] font-medium text-brand">${p.price}</span>
                      {p.originalPrice && <span className="text-[13px] text-gray-400 line-through ml-2">${p.originalPrice}</span>}
                    </div>
                    <button
                      onClick={() => handleAdd(p)}
                      className={`px-4 py-2 rounded-lg text-[12px] font-medium transition-all ${
                        added === p.id ? 'bg-green-600 text-white' : 'bg-brand text-white hover:opacity-90'
                      }`}
                    >
                      {added === p.id ? '✓ Added' : 'Add to cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All categories */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl text-brand text-center mb-10">Shop by category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Audio', 'Bags', 'Wearables', 'Home Office'].map(cat => (
              <Link key={cat} href="/products"
                className="bg-brand-light border border-gray-100 rounded-xl p-6 text-center hover:border-brand-accent/30 transition-colors group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {cat === 'Audio' ? '🎧' : cat === 'Bags' ? '🎒' : cat === 'Wearables' ? '⌚' : '💡'}
                </div>
                <div className="text-[14px] font-medium text-brand">{cat}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-2xl text-brand mb-3">Join the Terra community</h2>
          <p className="text-[14px] text-gray-500 font-light mb-6">Be the first to know about new products, exclusive offers, and design stories.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-[14px] outline-none focus:border-brand-accent transition-colors" />
            <button className="bg-brand text-white px-6 py-2.5 rounded-lg text-[13px] font-medium hover:opacity-90">Subscribe</button>
          </div>
        </div>
      </section>

      <ShopFooter />
    </div>
  )
}
