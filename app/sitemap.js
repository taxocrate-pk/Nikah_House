import { courtMarriageSlugs, onlineNikahSlugs } from '@/lib/service-pages'

export default function sitemap() {
  const lastModified = new Date()
  return [
    { url: 'https://nikahhouse.com', lastModified, changeFrequency: 'weekly', priority: 1 },
    ...onlineNikahSlugs.map(slug => ({ url: `https://nikahhouse.com/online-nikah/${slug}`, lastModified, changeFrequency: 'monthly', priority: 0.9 })),
    ...courtMarriageSlugs.map(slug => ({ url: `https://nikahhouse.com/court-marriage/${slug}`, lastModified, changeFrequency: 'monthly', priority: 0.9 })),
    ...['about', 'contact', 'blog'].map(slug => ({ url: `https://nikahhouse.com/${slug}`, lastModified, changeFrequency: slug === 'blog' ? 'weekly' : 'yearly', priority: 0.6 })),
  ]
}
