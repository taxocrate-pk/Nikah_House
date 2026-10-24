import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  title: 'Nikah House | Professional Nikah Services',
  description: 'Professional Nikah, online Nikah and marriage-documentation guidance for couples in Pakistan and overseas.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64 128x128 256x256' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport = { colorScheme: 'light', themeColor: '#142435', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
