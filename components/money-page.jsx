import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, ChevronDown, FileCheck2, HeartHandshake, ShieldCheck } from 'lucide-react'
import { Footer, Header } from './site-shell'

export default function MoneyPage({ page }) {
  const online = page.type === 'online'
  const subject = online ? `Online Nikah for ${page.place.name}` : `Court Marriage in ${page.place.name}`
  const serviceUrl = online ? `/online-nikah/${page.slug}` : `/court-marriage/${page.slug}`
  const process = online
    ? [
        ['Case Review', 'We review both parties’ locations, nationality, marital status, identity documents and the intended use of the marriage record.'],
        ['Nikah Planning', 'Consent, witnesses, Wali where applicable, Haq Mehr, remote participation and any representative role are confirmed.'],
        ['Online Nikah', 'The Nikah is coordinated through a suitable live process with accurate names, declarations and ceremony particulars.'],
        ['Documents And Next Steps', 'The Nikahnama, registration route, certificate, translation and authentication requirements are addressed separately.'],
      ]
    : [
        ['Confidential Review', 'We confirm identity, age, current marital status, free consent, religious requirements and any genuine safety concern.'],
        ['Documents Prepared', 'CNIC or passport particulars, declarations, witness information, Haq Mehr and Nikahnama details are checked carefully.'],
        ['Nikah Completed', 'For Muslim couples, an authorised Nikah Khawan solemnises the Nikah; a judge does not ordinarily perform the marriage.'],
        ['Official Registration', `The record is prepared for registration through the competent authority serving ${page.place.name}.`],
      ]

  const faqs = online
    ? [
        [`Is an Online Nikah valid in ${page.place.name}?`, `The answer depends on the procedure used, the law governing the marriage, the parties’ capacity and the purpose for which recognition is required in ${page.place.name}. Religious validity and civil recognition must be considered separately.`],
        ['Must both parties join the same video call?', 'The suitable participation method depends on the planned Nikah procedure. Identity, clear consent, witnesses and any representative authority should be settled before the ceremony.'],
        ['Will we receive a Nikahnama?', 'The documentation supplied depends on the case and registration route. Names, identity details, marital status and Haq Mehr should be recorded accurately from the beginning.'],
        [`Can the documents be used for immigration in ${page.place.name}?`, 'A marriage document may form part of an immigration application, but it does not guarantee acceptance or approval. The relevant authority applies its own validity and evidence rules.'],
        ['Do we need apostille or embassy attestation?', 'That depends on the country issuing the record, the destination authority and the document type. Authentication confirms the origin of a document; it does not independently establish marriage validity.'],
      ]
    : [
        [`What does Court Marriage mean in ${page.place.name}?`, 'In Pakistan, Court Marriage commonly describes a consensual marriage arranged with legal and documentary assistance. For Muslim couples, the Nikah is ordinarily solemnised by an authorised Nikah Khawan rather than by a judge.'],
        ['Can adults marry through free consent?', 'Free and informed consent is fundamental. Identity, age, current marital status and legal capacity must be reviewed according to the applicable law and facts.'],
        ['Are witnesses required?', 'Witnesses form an important part of the Nikah process. Their eligibility and identity details should be confirmed before the ceremony.'],
        ['Is the Nikahnama the final marriage certificate?', 'The Nikahnama is the primary marriage record, while registration and a computerised marriage certificate are separate documentary stages handled through the competent authority.'],
        [`Is this service available outside ${page.place.name}?`, 'Court Marriage through NikahHouse.com is a Pakistan-based service offered through the listed Pakistani city pages. International couples may instead discuss Online Nikah and overseas document-use requirements.'],
      ]

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', name: page.title, description: page.description, url: `https://nikahhouse.com${serviceUrl}` },
      { '@type': 'LegalService', name: subject, serviceType: online ? 'Online Nikah Services' : 'Court Marriage Services', areaServed: page.areaServed, provider: { '@type': 'Organization', name: 'NikahHouse.com', url: 'https://nikahhouse.com' }, description: page.description },
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
          <Image src={online ? '/images/nikah-hero.png' : '/images/nikah-ceremony.png'} alt={`${subject} service`} fill priority sizes="100vw" className="object-cover object-center opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#142435] via-[#142435]/90 to-[#142435]/35" />
          <div className="relative mx-auto max-w-7xl">
            <nav aria-label="Breadcrumb" className="mb-10 flex gap-2 text-xs text-white/45"><Link href="/">Home</Link><span>/</span><span>{subject}</span></nav>
            <div className="max-w-4xl text-white">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b878]">{page.eyebrow}</p>
              <h1 className="font-serif text-5xl leading-[1.04] tracking-tight md:text-7xl">{page.heading}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">{page.intro}</p>
              <Link href="/contact" className="mt-9 inline-flex items-center rounded-full bg-[#d7b878] px-6 py-3.5 font-semibold text-[#142435] transition hover:bg-[#e8cf99]">Discuss Your Case <ArrowRight className="ml-2 size-4" /></Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-10"><div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-2xl bg-[#d7d0c4] md:grid-cols-3">{[
          [online ? 'Service Scope' : 'Availability', online ? 'Online Nikah coordination for international and Pakistan-connected couples' : `Court Marriage service in ${page.place.name}, Pakistan`],
          ['Core Requirements', 'Identity, legal capacity, free consent, witnesses and accurate particulars'],
          ['Documents', online ? 'Nikahnama, registration plan and overseas-use preparation' : 'Nikahnama, supporting papers and official registration route'],
        ].map(([label, value]) => <div key={label} className="bg-[#f7f3ec] p-7"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ad8750]">{label}</p><p className="mt-3 leading-7 text-[#5d6263]">{value}</p></div>)}</div></section>

        <section className="px-6 pb-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ad8750]">A Case-Specific Service</p><h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">What We Review Before Arranging {subject}</h2></div><div className="space-y-7 text-base leading-8 text-[#5d6263]"><p>Every marriage service begins with the people involved, not a generic checklist. We review identity, nationality, residence, age, current marital status, prior marriage documents and the ability of each party to consent freely. Names and dates must remain consistent across passports, identity cards and the final marriage record.</p><p>{online ? `For couples connected with ${page.place.name}, special attention is given to ${page.place.focus}. The law connected with the ceremony may differ from the rules applied by the authority that later receives the documents.` : `For couples in ${page.place.name}, the service focuses on ${page.place.focus}. Court Marriage is offered only through our Pakistan service; foreign-country pages are reserved for Online Nikah.`}</p><p>A religious ceremony, civil registration, immigration acceptance and overseas recognition are related but distinct questions. NikahHouse.com does not claim that one document automatically resolves every later legal or administrative requirement.</p></div></div></section>

        <section className="bg-[#142435] px-6 py-24 text-white lg:px-10"><div className="mx-auto max-w-7xl"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b878]">How It Works</p><h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">A Clear Process From Review To Official Documents</h2><div className="mt-14 grid gap-8 md:grid-cols-4">{process.map(([title, text], index) => <article key={title} className="border-t border-[#d7b878] pt-5"><span className="font-serif text-3xl text-[#d7b878]">0{index + 1}</span><h3 className="mt-7 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-white/60">{text}</p></article>)}</div></div></section>

        <section className="px-6 py-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ad8750]">Documents And Details</p><h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Prepare Accurate Information From The Beginning</h2><p className="mt-6 leading-8 text-[#5d6263]">Document requirements change with nationality, marital history, participation method and intended use. The following items are commonly reviewed, but the final checklist remains case-specific.</p></div><div className="grid gap-4 sm:grid-cols-2">{['CNIC or valid passport', 'Current address and nationality', 'Evidence of marital status', 'Divorce or death record, if relevant', 'Witness identity details', 'Wali details, where applicable', 'Agreed Haq Mehr', 'Special authority, if required'].map(item => <div key={item} className="flex gap-3 border-b border-[#d7d0c4] py-4 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-[#ad8750]" />{item}</div>)}</div></div></section>

        <section className="bg-[#f7f3ec] px-6 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-10 md:grid-cols-3">{[[ShieldCheck, 'Free Consent And Capacity', 'The identity, age, marital status and voluntary decision of both parties are fundamental.'], [HeartHandshake, online ? 'Remote Participation' : 'Nikah And Witnesses', online ? 'Technology supports participation, but the approved ceremony and representation route remain decisive.' : 'The Nikah is completed through offer, acceptance, witnesses, agreed Haq Mehr and an authorised Nikah Khawan.'], [FileCheck2, 'Registration And Later Use', 'The primary marriage record, official registration, certificate and overseas preparation should be planned in the correct sequence.']].map(([Icon, title, text]) => <article key={title}><Icon className="size-7 text-[#ad8750]" strokeWidth={1.4} /><h2 className="mt-5 font-serif text-2xl">{title}</h2><p className="mt-3 leading-7 text-[#666b69]">{text}</p></article>)}</div></div></section>

        <section className="px-6 py-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ad8750]">Frequently Asked Questions</p><h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Questions About {subject}</h2></div><div className="divide-y divide-[#d7d0c4] border-y border-[#d7d0c4]">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl"><span>{question}</span><ChevronDown className="size-5 shrink-0 text-[#ad8750] transition group-open:rotate-180" /></summary><p className="max-w-3xl pt-4 pr-8 leading-7 text-[#666b69]">{answer}</p></details>)}</div></div></section>

        <section className="bg-[#d7b878] px-6 py-20 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#536060]">Discuss Your Circumstances</p><h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">Start {subject} With A Confidential Case Review</h2></div><Link href="/contact" className="inline-flex shrink-0 items-center rounded-full bg-[#142435] px-6 py-4 font-semibold text-white transition hover:bg-[#20364a]">Contact NikahHouse.com <ArrowRight className="ml-2 size-4" /></Link></div></section>
      </main>
      <Footer />
    </div>
  )
}
