export type Product = {
  id: string
  name: string
  price: number
  originalPrice?: number
  category: string
  description: string
  details: string[]
  emoji: string
  colors: string[]
  rating: number
  reviews: number
}

export const products: Product[] = [
  {
    id: 'wireless-headphones',
    name: 'Studio Wireless Headphones',
    price: 249,
    originalPrice: 329,
    category: 'Audio',
    description: 'Premium noise-cancelling wireless headphones with 40-hour battery life. Hi-Res Audio certified with adaptive sound control.',
    details: ['40-hour battery life', 'Active noise cancellation', 'Hi-Res Audio certified', 'Bluetooth 5.3', 'USB-C fast charging', 'Foldable design'],
    emoji: '🎧',
    colors: ['Charcoal', 'Sand', 'Forest'],
    rating: 4.8,
    reviews: 1247,
  },
  {
    id: 'leather-backpack',
    name: 'Everyday Leather Backpack',
    price: 189,
    category: 'Bags',
    description: 'Full-grain leather backpack with padded laptop compartment. Water-resistant lining, YKK zippers, and magnetic closure.',
    details: ['Full-grain leather', '15" laptop compartment', 'Water-resistant lining', 'YKK zippers', 'Magnetic closure', '22L capacity'],
    emoji: '🎒',
    colors: ['Tan', 'Black', 'Burgundy'],
    rating: 4.9,
    reviews: 834,
  },
  {
    id: 'smart-watch',
    name: 'Minimal Smart Watch',
    price: 349,
    originalPrice: 399,
    category: 'Wearables',
    description: 'Ceramic case smartwatch with always-on display. Health monitoring, GPS, and 5-day battery. Sapphire crystal glass.',
    details: ['Ceramic case', 'Sapphire crystal', 'Always-on AMOLED', 'Heart rate + SpO2', 'Built-in GPS', '5-day battery'],
    emoji: '⌚',
    colors: ['Silver', 'Midnight', 'Rose Gold'],
    rating: 4.7,
    reviews: 2103,
  },
  {
    id: 'desk-lamp',
    name: 'Architect Desk Lamp',
    price: 129,
    category: 'Home Office',
    description: 'Adjustable LED desk lamp with wireless charging base. Five color temperatures, memory function, and ambient light sensor.',
    details: ['Adjustable arm + head', '5 color temperatures', 'Wireless charging base', 'Ambient light sensor', 'Memory function', 'USB-A output'],
    emoji: '💡',
    colors: ['Matte Black', 'White', 'Brass'],
    rating: 4.6,
    reviews: 567,
  },
  {
    id: 'travel-mug',
    name: 'Insulated Travel Mug',
    price: 39,
    category: 'Accessories',
    description: 'Double-wall vacuum insulated travel mug. Keeps drinks hot for 12 hours or cold for 24. Leak-proof lid with one-hand operation.',
    details: ['500ml capacity', '12h hot / 24h cold', 'Leak-proof lid', 'One-hand operation', 'Dishwasher safe', 'BPA free'],
    emoji: '☕',
    colors: ['Matte Black', 'Sage', 'Terracotta'],
    rating: 4.8,
    reviews: 3421,
  },
  {
    id: 'wireless-charger',
    name: 'Bamboo Wireless Charger',
    price: 49,
    category: 'Tech',
    description: 'Qi-certified wireless charging pad made from sustainable bamboo. 15W fast charging with LED indicator and foreign object detection.',
    details: ['15W fast charging', 'Qi certified', 'Sustainable bamboo', 'LED indicator', 'Foreign object detection', 'USB-C input'],
    emoji: '🔋',
    colors: ['Natural', 'Dark Walnut'],
    rating: 4.5,
    reviews: 892,
  },
]
