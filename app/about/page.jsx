import InfoPage from '@/components/info-page'

export const metadata = { title: 'About Nikah House', description: 'Learn how Nikah House coordinates Nikah, Online Nikah, Court Marriage and marriage-documentation services.' }

export default function AboutPage() {
  return <InfoPage eyebrow="About Nikah House" title="A Professional Home For Nikah Services" intro="Nikah House coordinates dignified Nikah services for couples in Pakistan and overseas, with careful attention to consent, ceremony requirements and accurate documentation."><h2 className="font-serif text-3xl text-[#142435]">Our Service Approach</h2><p>Every matter begins with the circumstances of the couple. We distinguish the Islamic ceremony from civil registration, official certificates, foreign recognition and immigration use. This avoids broad promises and helps couples understand which steps apply to them.</p><h2 className="font-serif text-3xl text-[#142435]">Pakistan And International Coverage</h2><p>Court Marriage is offered only through our Pakistani city services in Karachi, Lahore, Islamabad, Rawalpindi and Faisalabad. Online Nikah coordination is available for couples connected with Pakistan, the United Kingdom, United States, Canada, Europe, Australia, the UAE and the wider Middle East.</p></InfoPage>
}
