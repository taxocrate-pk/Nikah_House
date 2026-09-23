import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, ChevronDown, FileCheck2, Globe2, HeartHandshake, ShieldCheck } from 'lucide-react'
import { Footer, Header } from './site-shell'

export default function OnlineMarriagePage({ page }) {
  const subject = `Online Marriage in ${page.place.name}`
  const serviceUrl = `/online-marriage/${page.slug}`

  const faqs = [
    [`What does Online Marriage mean in ${page.place.name}?`, `Online Marriage is a broad search term. In practice, the religious Nikah, remote participation, civil registration, certificate issuance and later recognition are separate questions. Nikah House reviews which stages are relevant to the couple rather than treating them as one automatic process.`],
    ['Can both parties be in different places?', 'Remote participation may be possible in suitable circumstances, but identity, free consent, witnesses and any representative authority must be settled before the ceremony. The procedure should be planned around the parties and the intended later use of the documents.'],
    ['Is an Online Nikah the same as an Online Marriage?', 'The terms overlap in everyday searching, but they are not always identical. Online Nikah focuses on the Islamic marriage ceremony. Online Marriage may also refer to civil registration, certificates, recognition or cross-border document use.'],
    [`Will an online marriage automatically be recognised in ${page.place.name}?`, `No automatic promise should be made. Recognition depends on the procedure used, the law governing the marriage, the parties' legal capacity and the authority that later receives the documents.`],
    ['What documents are normally reviewed?', 'Identity documents, present marital status, prior divorce or death records where relevant, witness details, Haq Mehr, addresses, nationality and the intended use of the final marriage record are commonly reviewed.'],
    ['Can the documents be used for immigration or overseas purposes?', 'Marriage documents may be used as evidence in immigration or overseas applications, but the receiving authority applies its own rules. Translation, authentication, attestation or additional civil records may be required.'],
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', name: page.title, description: page.description, url: `https://nikahhouse.com${serviceUrl}` },
      { '@type': 'Service', name: subject, serviceType: 'Online Marriage Services', areaServed: page.areaServed, provider: { '@type': 'Organization', name: 'Nikah House', url: 'https://nikahhouse.com' }, description: page.description },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nikahhouse.com' }, { '@type': 'ListItem', position: 2, name: subject, item: `https://nikahhouse.com${serviceUrl}` }] },
      { '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
    ],
  }

  return (
    <div className="bg-[#fbfaf7] text-[#142435]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-[#142435] px-6 pb-24 pt-40 lg:px-10 lg:pb-28 lg:pt-48">
          <Image src="/images/nikah-hero.png" alt={`${subject} service`} fill priority sizes="100vw" className="object-cover object-center opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#142435] via-[#142435]/90 to-[#142435]/35" />
          <div className="relative mx-auto max-w-7xl">
            <nav aria-label="Breadcrumb" className="mb-10 flex gap-2 text-xs text-white/45"><Link href="/">Home</Link><span>/</span><span>{subject}</span></nav>
            <div className="max-w-4xl text-white">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b878]">{page.eyebrow}</p>
              <h1 className="font-serif text-5xl leading-[1.04] tracking-tight md:text-7xl">{page.heading}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">{page.intro}</p>
              <Link href="/contact" className="mt-9 inline-flex items-center rounded-full bg-[#d7b878] px-6 py-3.5 font-semibold text-[#142435] transition hover:bg-[#e8cf99]">Discuss Online Marriage <ArrowRight className="ml-2 size-4" /></Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-10"><div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-2xl bg-[#d7d0c4] md:grid-cols-3">{[
          ['Service Scope', `Online Marriage planning for couples connected with ${page.place.name}`],
          ['Core Requirements', 'Identity, legal capacity, free consent, witnesses and accurate particulars'],
          ['Documents', 'Nikahnama, registration planning, certificates and later document-use preparation'],
        ].map(([label, value]) => <div key={label} className="bg-[#f7f3ec] p-7"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ad8750]">{label}</p><p className="mt-3 leading-7 text-[#5d6263]">{value}</p></div>)}</div></section>

        <section className="px-6 pb-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ad8750]">A Distinct Search Intent</p><h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Online Marriage Is More Than A Video Call</h2></div><div className="space-y-7 text-base leading-8 text-[#5d6263]"><p>People searching for Online Marriage are often trying to solve several different problems at once. One couple may only need a properly arranged Islamic Nikah while living in different places. Another may need a marriage record suitable for local registration. A third may already be married religiously and now needs to understand certificates, translation, attestation or use of the record abroad. These are related matters, but they should not be merged into a single promise.</p><p>For couples connected with {page.place.name}, special attention is given to {page.place.focus}. The correct route depends on where the parties are located, their nationality and marital status, how the ceremony is arranged, and where the resulting documents will eventually be used.</p><p>Nikah House therefore treats Online Marriage as a case-specific service. We first identify the actual objective, then separate the religious ceremony, civil registration and document-use stages so the couple can see what is required and what is not.</p></div></div></section>

        <section className="bg-[#142435] px-6 py-24 text-white lg:px-10"><div className="mx-auto max-w-7xl"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b878]">How It Works</p><h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">A Clear Online Marriage Process</h2><div className="mt-14 grid gap-8 md:grid-cols-4">{[
          ['Initial Review', 'We confirm both parties’ locations, identity, nationality, marital status and the intended use of the marriage documents.'],
          ['Procedure Planning', 'Consent, witnesses, Wali where applicable, Haq Mehr, remote participation and any representative authority are settled in advance.'],
          ['Nikah And Record', 'The Islamic ceremony and Nikahnama particulars are coordinated carefully with consistent names, dates and declarations.'],
          ['Registration And Use', 'Registration, certificate, translation, authentication or overseas-use requirements are reviewed as separate next steps.'],
        ].map(([title, text], index) => <article key={title} className="border-t border-[#d7b878] pt-5"><span className="font-serif text-3xl text-[#d7b878]">0{index + 1}</span><h3 className="mt-7 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-white/60">{text}</p></article>)}</div></div></section>

        <section className="px-6 py-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ad8750]">Documents And Identity</p><h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Accurate Details Matter From The Beginning</h2><p className="mt-6 leading-8 text-[#5d6263]">Remote arrangements create no excuse for weak documentation. Names, dates of birth, identity numbers and marital-status details should be consistent before the Nikah record is prepared. Where previous marriages exist, the relevant evidence should be reviewed before making assumptions about eligibility or later registration.</p></div><div className="grid gap-4 sm:grid-cols-2">{['CNIC or valid passport', 'Current address and nationality', 'Present marital status', 'Divorce or death record, if relevant', 'Witness identity details', 'Wali details, where applicable', 'Agreed Haq Mehr', 'Authority or representation documents, if required'].map(item => <div key={item} className="flex gap-3 border-b border-[#d7d0c4] py-4 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-[#ad8750]" />{item}</div>)}</div></div></section>

        <section className="bg-[#f7f3ec] px-6 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-10 md:grid-cols-4">{[[ShieldCheck, 'Free Consent', 'Both parties must participate voluntarily and understand the marriage being arranged.'], [HeartHandshake, 'Nikah Requirements', 'Witnesses, Haq Mehr and Wali or representation questions are addressed according to the circumstances.'], [Globe2, 'Remote Participation', 'Technology can support participation, but the underlying procedure and documentation remain the important part.'], [FileCheck2, 'Later Document Use', 'Registration, certificates, translation, authentication and recognition are planned according to the intended destination.']].map(([Icon, title, text]) => <article key={title}><Icon className="size-7 text-[#ad8750]" strokeWidth={1.4} /><h2 className="mt-5 font-serif text-2xl">{title}</h2><p className="mt-3 leading-7 text-[#666b69]">{text}</p></article>)}</div></div></section>

        <section className="px-6 py-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ad8750]">Frequently Asked Questions</p><h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Questions About {subject}</h2></div><div className="divide-y divide-[#d7d0c4] border-y border-[#d7d0c4]">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl"><span>{question}</span><ChevronDown className="size-5 shrink-0 text-[#ad8750] transition group-open:rotate-180" /></summary><p className="max-w-3xl pt-4 pr-8 leading-7 text-[#666b69]">{answer}</p></details>)}</div></div></section>

        <section className="bg-[#d7b878] px-6 py-20 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#536060]">Discuss Your Circumstances</p><h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">Start {subject} With A Confidential Review</h2></div><Link href="/contact" className="inline-flex shrink-0 items-center rounded-full bg-[#142435] px-6 py-4 font-semibold text-white transition hover:bg-[#20364a]">Contact Nikah House <ArrowRight className="ml-2 size-4" /></Link></div></section>
      </main>
      <Footer />
    </div>
  )
}
