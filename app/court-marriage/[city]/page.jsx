import { notFound } from 'next/navigation'
import MoneyPage from '@/components/money-page'
import { courtMarriageSlugs, getCourtMarriagePage } from '@/lib/service-pages'

export function generateStaticParams() {
  return courtMarriageSlugs.map(city => ({ city }))
}

export async function generateMetadata({ params }) {
  const { city } = await params
  const page = getCourtMarriagePage(city)
  if (!page) return {}
  const url = `https://nikahhouse.com/court-marriage/${city}`
  return { title: page.title, description: page.description, alternates: { canonical: url }, openGraph: { title: page.title, description: page.description, url, type: 'website' } }
}

export default async function CourtMarriageCityPage({ params }) {
  const { city } = await params
  const page = getCourtMarriagePage(city)
  if (!page) notFound()
  return <MoneyPage page={page} />
}
