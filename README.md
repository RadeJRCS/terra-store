# Terra Store - Demo E-commerce Site

Demo e-commerce site for testing VeroBehavior snippet integration.

## Deploy

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Deploy

## VeroBehavior Integration

Add to `app/layout.tsx` inside `<head>`:

```html
<script src="https://verobehavior.vercel.app/api/snippet?key=terra-store" async></script>
```
