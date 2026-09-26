import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  title: 'Nikah House | Professional Nikah Services',
  description: 'Professional Nikah, online Nikah and marriage-documentation guidance for couples in Pakistan and overseas.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/icon-light-32x32.png',
    apple: '/apple-icon.png',
  },
}

export const viewport = { colorScheme: 'light', themeColor: '#142435', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
