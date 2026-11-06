import NikahKhawanPage from '@/components/nikah-khawan-page'
import { meta } from '@/lib/nikah-khawan'

const url = `https://www.nikahhouse.com/${meta.slug}`

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: url },
  openGraph: { title: meta.title, description: meta.description, url, type: 'website' },
}

export default function Page() {
  return <NikahKhawanPage />
}
