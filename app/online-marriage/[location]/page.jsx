import { notFound } from 'next/navigation'
import OnlineMarriagePage from '@/components/online-marriage-page'
import { getOnlineMarriagePage, onlineMarriageSlugs } from '@/lib/service-pages'

export function generateStaticParams() {
  return onlineMarriageSlugs.map(location => ({ location }))
}

export async function generateMetadata({ params }) {
  const { location } = await params
  const page = getOnlineMarriagePage(location)
  if (!page) return {}
  const url = `https://nikahhouse.com/online-marriage/${location}`
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: { title: page.title, description: page.description, url, type: 'website' },
  }
}

export default async function OnlineMarriageLocationPage({ params }) {
  const { location } = await params
  const page = getOnlineMarriagePage(location)
  if (!page) notFound()
  return <OnlineMarriagePage page={page} />
}
