import { notFound } from 'next/navigation'
import MoneyPage from '@/components/money-page'
import { getOnlineNikahPage, onlineNikahSlugs } from '@/lib/service-pages'

export function generateStaticParams() {
  return onlineNikahSlugs.map(country => ({ country }))
}

export async function generateMetadata({ params }) {
  const { country } = await params
  const page = getOnlineNikahPage(country)
  if (!page) return {}
  const url = `https://nikahhouse.com/online-nikah/${country}`
  return { title: page.title, description: page.description, alternates: { canonical: url }, openGraph: { title: page.title, description: page.description, url, type: 'website' } }
}

export default async function OnlineNikahCountryPage({ params }) {
  const { country } = await params
  const page = getOnlineNikahPage(country)
  if (!page) notFound()
  return <MoneyPage page={page} />
}
