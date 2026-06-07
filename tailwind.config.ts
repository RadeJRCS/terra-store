import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: { colors: { brand: { DEFAULT: '#2C2C2C', accent: '#D4A574', light: '#FAF7F4', mid: '#F0EBE5' } } } },
  plugins: [],
}
export default config
