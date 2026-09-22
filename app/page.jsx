import HomeWithSchema from '@/components/homepage'

export default function Page() {
  return <HomeWithSchema />
}

export const metadata = {
  title: 'NikahHouse.com | Professional Nikah Services in Pakistan & Overseas',
  description: 'Professional Nikah, online Nikah and marriage-documentation guidance for couples in Pakistan and overseas.',
  keywords: ['Nikah services', 'online Nikah', 'Nikah in Pakistan', 'overseas Pakistani Nikah', 'Nikah Nama'],
  alternates: { canonical: 'https://nikahhouse.com' },
}

export const viewport = { colorScheme: 'light', themeColor: '#142435', width: 'device-width', initialScale: 1 }
      
