'use client'
import ShopNav from '@/components/ShopNav'
import ShopFooter from '@/components/ShopFooter'
import Link from 'next/link'
import { useCart } from '@/lib/cart'
import { useState } from 'react'

export default function CheckoutPage() {
  const { items, total, count } = useCart()
  const [step, setStep] = useState(1)
  const [placed, setPlaced] = useState(false)
  const shipping = total >= 100 ? 0 : 9.95

  if (count === 0 && !placed) {
    return (
      <div className="min-h-screen flex flex-col"><ShopNav />
        <div className="max-w-xl mx-auto px-6 py-16 text-center flex-1">
          <span className="text-5xl block mb-4">🛒</span>
          <p className="text-[16px] text-gray-400 mb-6">Your cart is empty</p>
          <Link href="/products" className="bg-brand text-white px-6 py-3 rounded-lg text-[14px] font-medium">Shop products</Link>
        </div>
        <ShopFooter />
      </div>
    )
  }

  if (placed) {
    return (
      <div className="min-h-screen flex flex-col"><ShopNav />
        <div className="max-w-xl mx-auto px-6 py-16 text-center flex-1">
          <span className="text-5xl block mb-4">✅</span>
          <h1 className="font-serif text-3xl text-brand mb-3">Order confirmed!</h1>
          <p className="text-[14px] text-gray-500 mb-6">Thank you for your purchase. You will receive a confirmation email shortly.</p>
          <p className="text-[13px] text-gray-400 mb-8">Order #TER-{Math.floor(Math.random() * 90000 + 10000)}</p>
          <Link href="/" className="bg-brand text-white px-6 py-3 rounded-lg text-[14px] font-medium">Back to store</Link>
        </div>
        <ShopFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col"><ShopNav />
      <div className="max-w-4xl mx-auto px-6 py-10 flex-1">
        <h1 className="font-serif text-4xl text-brand mb-2">Checkout</h1>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-8 text-[12px]">
          {['Shipping', 'Payment', 'Review'].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-medium ${step > i ? 'bg-green-600 text-white' : step === i + 1 ? 'bg-brand text-white' : 'bg-gray-200 text-gray-400'}`}>{step > i ? '✓' : i + 1}</span>
              <span className={step >= i + 1 ? 'text-brand font-medium' : 'text-gray-400'}>{s}</span>
              {i < 2 && <span className="text-gray-300 mx-1">-</span>}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-[1fr_320px] gap-8">
          <div>
            {step === 1 && (
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h2 className="text-[16px] font-medium text-brand mb-4">Shipping information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="text-[12px] text-gray-500 block mb-1">First name</label><input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand-accent" placeholder="Jane" /></div>
                  <div><label className="text-[12px] text-gray-500 block mb-1">Last name</label><input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand-accent" placeholder="Smith" /></div>
                  <div className="col-span-2"><label className="text-[12px] text-gray-500 block mb-1">Email</label><input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand-accent" placeholder="jane@email.com" type="email" /></div>
                  <div className="col-span-2"><label className="text-[12px] text-gray-500 block mb-1">Address</label><input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand-accent" placeholder="123 Main Street" /></div>
                  <div><label className="text-[12px] text-gray-500 block mb-1">City</label><input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand-accent" placeholder="San Francisco" /></div>
                  <div><label className="text-[12px] text-gray-500 block mb-1">ZIP</label><input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand-accent" placeholder="94105" /></div>
                </div>
                <button onClick={() => setStep(2)} className="mt-6 w-full bg-brand text-white py-3 rounded-lg text-[14px] font-medium hover:opacity-90">Continue to payment</button>
              </div>
            )}
            {step === 2 && (
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h2 className="text-[16px] font-medium text-brand mb-4">Payment details</h2>
                <div className="space-y-4">
                  <div><label className="text-[12px] text-gray-500 block mb-1">Card number</label><input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand-accent" placeholder="4242 4242 4242 4242" /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-[12px] text-gray-500 block mb-1">Expiry</label><input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand-accent" placeholder="MM/YY" /></div>
                    <div><label className="text-[12px] text-gray-500 block mb-1">CVC</label><input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand-accent" placeholder="123" /></div>
                  </div>
                  <div><label className="text-[12px] text-gray-500 block mb-1">Name on card</label><input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-brand-accent" placeholder="Jane Smith" /></div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button onClick={() => setStep(1)} className="flex-1 border border-gray-200 text-gray-500 py-3 rounded-lg text-[14px] hover:border-gray-400">Back</button>
                  <button onClick={() => setStep(3)} className="flex-1 bg-brand text-white py-3 rounded-lg text-[14px] font-medium hover:opacity-90">Review order</button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <h2 className="text-[16px] font-medium text-brand mb-4">Review your order</h2>
                <div className="space-y-3 mb-6">
                  {items.map(item => (
                    <div key={item.product.id} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-b-0">
                      <span className="text-2xl">{item.product.emoji}</span>
                      <div className="flex-1">
                        <div className="text-[14px] text-brand">{item.product.name}</div>
                        <div className="text-[11px] text-gray-400">{item.color} x{item.quantity}</div>
                      </div>
                      <div className="text-[14px] font-medium">${item.product.price * item.quantity}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="flex-1 border border-gray-200 text-gray-500 py-3 rounded-lg text-[14px] hover:border-gray-400">Back</button>
                  <button onClick={() => setPlaced(true)} className="flex-1 bg-green-600 text-white py-3 rounded-lg text-[14px] font-medium hover:opacity-90">Place order - ${total + shipping}</button>
                </div>
              </div>
            )}
          </div>

          {/* Order summary sidebar */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 h-fit sticky top-20">
            <h3 className="text-[14px] font-medium text-brand mb-4">Order summary</h3>
            {items.map(item => (
              <div key={item.product.id} className="flex items-center gap-2 py-2 text-[12px]">
                <span className="text-lg">{item.product.emoji}</span>
                <span className="flex-1 text-gray-500">{item.product.name} x{item.quantity}</span>
                <span className="font-medium">${item.product.price * item.quantity}</span>
              </div>
            ))}
            <div className="border-t border-gray-100 my-3" />
            <div className="flex justify-between text-[13px] text-gray-500 mb-1"><span>Subtotal</span><span>${total}</span></div>
            <div className="flex justify-between text-[13px] text-gray-500 mb-3"><span>Shipping</span><span>{shipping === 0 ? 'Free' : '$' + shipping}</span></div>
            <div className="flex justify-between text-[15px] font-medium text-brand"><span>Total</span><span>${total + shipping}</span></div>
          </div>
        </div>
      </div>
      <ShopFooter />
    </div>
  )
}
