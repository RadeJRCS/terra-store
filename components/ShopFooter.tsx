import Link from 'next/link'

export default function ShopFooter() {
  return (
    <footer className="bg-brand text-white/50 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-serif text-[20px] text-white/90 mb-3">terra</div>
            <p className="text-[12px] leading-relaxed">Thoughtfully designed products for modern living.</p>
          </div>
          {[
            { t: 'Shop', links: ['All Products', 'Audio', 'Bags', 'Wearables', 'Home Office'] },
            { t: 'Help', links: ['Shipping', 'Returns', 'FAQ', 'Contact Us'] },
            { t: 'Company', links: ['About', 'Sustainability', 'Privacy', 'Terms'] },
          ].map(col => (
            <div key={col.t}>
              <div className="text-[11px] tracking-widest text-white/40 mb-3 uppercase">{col.t}</div>
              {col.links.map(l => <div key={l} className="text-[12px] text-white/40 hover:text-white/70 cursor-pointer mb-1.5">{l}</div>)}
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 text-[11px] text-white/30 flex justify-between">
          <span>2026 Terra Store. All rights reserved.</span>
          <span>Demo site for VeroBehavior integration testing</span>
        </div>
      </div>
    </footer>
  )
}
