import HomeWithSchema from '@/components/homepage'

export default function Page() {
  return <HomeWithSchema />
}

export const metadata = {
  title: 'Nikah Services in Pakistan & Overseas | Nikah House',
  description: 'Nikah services, online Nikah, Nikah Nama preparation and marriage documentation support in Pakistan and for overseas Pakistanis. Contact Nikah House.',
  keywords: ['Nikah services', 'online Nikah', 'Nikah in Pakistan', 'overseas Pakistani Nikah', 'Nikah Nama'],
  alternates: { canonical: 'https://nikahhouse.com' },
}

export const viewport = { colorScheme: 'light', themeColor: '#142435', width: 'device-width', initialScale: 1 }
