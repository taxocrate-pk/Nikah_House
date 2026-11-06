import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, Check, ChevronDown, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Footer, Header } from './site-shell'
import { contact, contactReady, telLink, waLink } from '@/lib/site-contact'
import {
  KEYPHRASE, advantages, cities, comparison, credit, documents, faqs, fees, hero, meta,
  notBureau, special, team, tips, whatItIs,
} from '@/lib/nikah-khawan'

const URL = `https://www.nikahhouse.com/${meta.slug}`
const SERVICE = 'Nikah Khawan services'

const H2 = 'font-serif text-4xl leading-tight md:text-5xl'
const EYEBROW = 'text-xs font-semibold uppercase tracking-[0.24em] text-[#ad8750]'

/** DNA D1: a WhatsApp button that names the service, plus a tel: Call link. */
function DualCta({ dark = false }) {
  if (!contactReady) {
    return (
      <div className={`mt-8 flex items-start gap-3 rounded-xl border p-5 text-sm ${dark ? 'border-[#d7b878]/50 bg-[#d7b878]/10 text-white/80' : 'border-[#ad8750]/40 bg-[#f7f3ec] text-[#5d6263]'}`}>
        <AlertTriangle className="mt-0.5 size-5 shrink-0 text-[#ad8750]" strokeWidth={1.6} />
        <p>
          Contact details for this site are pending the owner&apos;s confirmation. The phone,
          WhatsApp and office address are set in <code>lib/site-contact.js</code> and are
          deliberately left unfilled rather than guessed. Enquiries meanwhile:{' '}
          <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </div>
    )
  }
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <a href={waLink(SERVICE)} className="inline-flex items-center rounded-full bg-[#25d366] px-6 py-3.5 font-semibold text-white transition hover:bg-[#1fb855]">
        <MessageCircle className="mr-2 size-4" /> WhatsApp About Nikah Khawan Services
      </a>
      <a href={telLink} className={`inline-flex items-center rounded-full px-6 py-3.5 font-semibold transition ${dark ? 'bg-[#d7b878] text-[#142435] hover:bg-[#e8cf99]' : 'bg-[#142435] text-white hover:bg-[#20364a]'}`}>
        <Phone className="mr-2 size-4" /> Call {contact.phone}
      </a>
    </div>
  )
}

export default function NikahKhawanPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', name: meta.title, description: meta.description, url: URL },
      {
        '@type': 'LegalService',
        name: 'Nikah Khawan Services',
        serviceType: 'Nikah Khawan, Imam and Qazi services',
        areaServed: cities.rows.map(([city]) => ({ '@type': 'City', name: city })),
        provider: { '@type': 'Organization', name: 'Nikah House', url: 'https://www.nikahhouse.com' },
        description: meta.description,
      },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nikahhouse.com' },
        { '@type': 'ListItem', position: 2, name: 'Nikah Khawan Services', item: URL },
      ] },
      { '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
    ],
  }

  return (
    <div className="bg-[#fbfaf7] text-[#142435]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>
        {/* HERO — H1, H2, H3 run consecutively with no intervening paragraph (DNA heading pattern) */}
        <section className="relative isolate overflow-hidden bg-[#142435] px-6 pb-20 pt-40 lg:px-10 lg:pb-24 lg:pt-48">
          <Image src="/images/media/nikah-khawan-karachi-banner.webp" alt="Nikah Khawan completing the Nikahnama at the Nikah House office" fill priority sizes="100vw" className="object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#142435] via-[#142435]/90 to-[#142435]/40" />
          <div className="relative mx-auto max-w-7xl text-white">
            <nav aria-label="Breadcrumb" className="mb-10 flex gap-2 text-xs text-white/45">
              <Link href="/">Home</Link><span>/</span><span>Nikah Khawan Services</span>
            </nav>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b878]">{hero.eyebrow}</p>
            <h1 className="max-w-5xl font-serif text-4xl leading-[1.08] tracking-tight md:text-6xl">{hero.h1}</h1>
            <h2 className="mt-6 max-w-4xl font-serif text-2xl leading-snug text-[#d7b878] md:text-3xl">{hero.h2}</h2>
            <h3 className="mt-4 max-w-4xl text-base font-semibold leading-7 text-white/75 md:text-lg">{hero.h3}</h3>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/80">{hero.answer}</p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">{hero.offer}</p>

            <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:max-w-4xl">
              {hero.chips.map(([label, value]) => (
                <li key={label} className="flex gap-3 rounded-xl bg-white/[0.07] p-4 text-sm leading-6 text-white/80">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#d7b878]" />
                  <span><span className="font-semibold text-white">{label}:</span> {value}</span>
                </li>
              ))}
            </ul>

            {contactReady && (
              <p className="mt-8 flex items-start gap-2 text-sm leading-7 text-white/70">
                <MapPin className="mt-1 size-4 shrink-0 text-[#d7b878]" />
                <span>Karachi office: {contact.officeKarachi} · WhatsApp {contact.phone}</span>
              </p>
            )}
            <DualCta dark />
          </div>
        </section>

        {/* LEAD IMAGE (DNA D11, image 1 of 3) */}
        <section className="px-6 pt-16 lg:px-10">
          <figure className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-lg">
            <Image src="/images/media/nikah-khawan-imam-qazi-services.webp" alt="Nikah Khawan, Imam and Qazi services arranged through Nikah House" width={1200} height={800} sizes="(max-width: 1024px) 100vw, 1024px" className="h-auto w-full" />
            <figcaption className="bg-[#f7f3ec] px-5 py-3 text-sm text-[#5d6263]">An authorised Nikah Khawan completing the Nikahnama with witnesses present</figcaption>
          </figure>
        </section>

        {/* OFFICE / CONSULTATION STRIP */}
        <section className="px-6 py-16 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-2xl bg-[#d7d0c4] md:grid-cols-3">
            {[
              ['Cities Served', 'Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad and Hyderabad'],
              ['Core Requirements', 'Free consent, legal capacity, accurate identity particulars and witnesses'],
              ['What You Receive', 'A completed Nikahnama and a clear route to Union Council registration'],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#f7f3ec] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ad8750]">{label}</p>
                <p className="mt-3 leading-7 text-[#5d6263]">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT A NIKAH KHAWAN DOES */}
        <section className="px-6 pb-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.85fr_1.15fr]">
            <div><p className={EYEBROW}>The Role</p><h2 className={`mt-4 ${H2}`}>{whatItIs.h2}</h2></div>
            <div className="space-y-6 text-base leading-8 text-[#5d6263]">
              {whatItIs.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        {/* CITIES */}
        <section className="bg-[#f7f3ec] px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className={EYEBROW}>Coverage</p>
            <h2 className={`mt-4 max-w-4xl ${H2}`}>{cities.h2}</h2>
            <p className="mt-6 max-w-3xl leading-8 text-[#5d6263]">{cities.intro}</p>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
                <thead><tr className="border-b-2 border-[#ad8750]/40">
                  {['City', 'Province', 'How the Nikah Khawan service runs there'].map(h => <th key={h} className="pb-3 pr-6 font-semibold uppercase tracking-wider text-[#ad8750]">{h}</th>)}
                </tr></thead>
                <tbody>{cities.rows.map(([city, province, detail]) => (
                  <tr key={city} className="border-b border-[#d7d0c4] align-top">
                    <td className="py-4 pr-6 font-serif text-lg text-[#142435]">{city}</td>
                    <td className="py-4 pr-6 text-[#5d6263]">{province}</td>
                    <td className="py-4 leading-7 text-[#5d6263]">{detail}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
            <p className="mt-7 max-w-3xl rounded-xl border border-[#ad8750]/30 bg-white/60 p-5 text-sm leading-7 text-[#5d6263]">{cities.note}</p>
          </div>
        </section>

        {/* FEES */}
        <section className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className={EYEBROW}>Fees</p>
            <h2 className={`mt-4 max-w-4xl ${H2}`}>{fees.h2}</h2>
            <p className="mt-6 max-w-3xl leading-8 text-[#5d6263]">{fees.intro}</p>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
                <thead><tr className="border-b-2 border-[#ad8750]/40">
                  {fees.table.head.map(h => <th key={h} className="pb-3 pr-6 font-semibold uppercase tracking-wider text-[#ad8750]">{h}</th>)}
                </tr></thead>
                <tbody>{fees.table.rows.map(([a, b, c]) => (
                  <tr key={a} className="border-b border-[#d7d0c4] align-top">
                    <td className="py-4 pr-6 font-serif text-lg text-[#142435]">{a}</td>
                    <td className="py-4 pr-6 leading-7 text-[#5d6263]">{b}</td>
                    <td className="py-4 leading-7 text-[#5d6263]">{c}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
            <p className="mt-7 max-w-3xl leading-8 text-[#5d6263]">{fees.note}</p>
            <DualCta />
          </div>
        </section>

        {/* DOCUMENTS */}
        <section className="bg-[#142435] px-6 py-20 text-white lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b878]">Documents</p>
              <h2 className={`mt-4 ${H2}`}>{documents.h2}</h2>
              <p className="mt-6 leading-8 text-white/70">{documents.intro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {documents.items.map(item => (
                <div key={item} className="flex gap-3 border-b border-white/15 py-4 text-sm leading-6 text-white/80">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#d7b878]" />{item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIAL CIRCUMSTANCES */}
        <section className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className={EYEBROW}>Special Circumstances</p>
            <h2 className={`mt-4 max-w-4xl ${H2}`}>{special.h2}</h2>
            <p className="mt-6 max-w-3xl leading-8 text-[#5d6263]">{special.intro}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {special.items.map(([title, text]) => (
                <article key={title} className="rounded-2xl border border-[#d7d0c4] bg-[#f7f3ec] p-6">
                  <h3 className="font-serif text-xl text-[#142435]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5d6263]">{text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex max-w-4xl items-start gap-3 rounded-xl border border-[#b4472f]/30 bg-[#fdf2ef] p-6">
              <AlertTriangle className="mt-0.5 size-5 shrink-0 text-[#b4472f]" strokeWidth={1.6} />
              <p className="text-sm leading-7 text-[#5d6263]">{special.warning}</p>
            </div>
          </div>
        </section>

        {/* IMAGE 3 OF 3 (DNA D11) */}
        <section className="px-6 pb-20 lg:px-10">
          <figure className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-lg">
            <Image src="/images/media/nikah-khawan-complete-services-banner.webp" alt="Complete Nikah Khawan service including Nikahnama and Union Council registration" width={1200} height={800} sizes="(max-width: 1024px) 100vw, 1024px" className="h-auto w-full" />
            <figcaption className="bg-[#f7f3ec] px-5 py-3 text-sm text-[#5d6263]">The Nikahnama prepared for registration with the Union Council serving the couple&apos;s area</figcaption>
          </figure>
        </section>

        {/* COMPARISON */}
        <section className="bg-[#f7f3ec] px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className={EYEBROW}>Comparison</p>
            <h2 className={`mt-4 max-w-4xl ${H2}`}>{comparison.h2}</h2>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
                <thead><tr className="border-b-2 border-[#ad8750]/40">
                  {comparison.head.map((h, i) => <th key={i} className="pb-3 pr-6 font-semibold uppercase tracking-wider text-[#ad8750]">{h}</th>)}
                </tr></thead>
                <tbody>{comparison.rows.map(([label, a, b]) => (
                  <tr key={label} className="border-b border-[#d7d0c4] align-top">
                    <td className="py-4 pr-6 font-semibold text-[#142435]">{label}</td>
                    <td className="py-4 pr-6 leading-7 text-[#5d6263]">{a}</td>
                    <td className="py-4 leading-7 text-[#5d6263]">{b}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TIPS + ADVANTAGES */}
        <section className="px-6 py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
            <div>
              <p className={EYEBROW}>Practical Guidance</p>
              <h2 className={`mt-4 ${H2}`}>{tips.h2}</h2>
              <ul className="mt-8 space-y-4">
                {tips.items.map(t => (
                  <li key={t} className="flex gap-3 text-sm leading-7 text-[#5d6263]">
                    <Check className="mt-1 size-4 shrink-0 text-[#ad8750]" />{t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={EYEBROW}>Advantages</p>
              <h2 className={`mt-4 ${H2}`}>{advantages.h2}</h2>
              <div className="mt-8 space-y-6">
                {advantages.items.map(([title, text]) => (
                  <article key={title} className="border-l-2 border-[#d7b878] pl-5">
                    <h3 className="font-serif text-xl text-[#142435]">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#5d6263]">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NOT A MARRIAGE BUREAU */}
        <section className="px-6 pb-20 lg:px-10">
          <div className="mx-auto max-w-4xl rounded-2xl border border-[#d7d0c4] bg-[#f7f3ec] p-8 lg:p-10">
            <h2 className="font-serif text-3xl leading-tight text-[#142435]">{notBureau.h2}</h2>
            <div className="mt-5 space-y-4 leading-8 text-[#5d6263]">
              {notBureau.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        {/* ADVOCATES */}
        <section className="px-6 pb-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className={EYEBROW}>Supervision</p>
            <h2 className={`mt-4 max-w-4xl ${H2}`}>{team.h2}</h2>
            <p className="mt-6 max-w-3xl leading-8 text-[#5d6263]">{team.intro}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {team.members.map(([name, title, city, note]) => (
                <article key={name} className="rounded-2xl border border-[#d7d0c4] bg-white/70 p-6">
                  <h3 className="font-serif text-xl text-[#142435]">{name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#ad8750]">{title}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#5d6263]">{city}</p>
                  <p className="mt-3 text-sm leading-7 text-[#5d6263]">{note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs — collapsed, answers present in the initial HTML (DNA 2.07) */}
        <section className="bg-[#f7f3ec] px-6 py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className={EYEBROW}>Frequently Asked Questions</p>
              <h2 className={`mt-4 ${H2}`}>Questions About Nikah Khawan Services</h2>
            </div>
            <div className="divide-y divide-[#d7d0c4] border-y border-[#d7d0c4]">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl">
                    <span>{question}</span>
                    <ChevronDown className="size-5 shrink-0 text-[#ad8750] transition group-open:rotate-180" />
                  </summary>
                  <p className="max-w-3xl pt-4 pr-8 leading-7 text-[#666b69]">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="bg-[#d7b878] px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#536060]">Arrange Your Nikah</p>
            <h2 className={`mt-4 max-w-4xl ${H2}`}>Book A Nikah Khawan With The Nikahnama And Registration Handled Together</h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#42352a]">
              Tell us the city, the marital status of both parties and whether you need the
              marriage registered and certified. We will confirm what the {KEYPHRASE} service
              covers for your case and quote a fixed fee before any work begins.
            </p>
            <DualCta />
          </div>
        </section>

        {/* CREDIT BLOCK (DNA, mandatory on every page) */}
        <section className="px-6 py-12 lg:px-10">
          <div className="mx-auto max-w-7xl border-t border-[#d7d0c4] pt-8 text-sm text-[#5d6263]">
            <p><span className="font-semibold text-[#142435]">Reviewed by:</span> {credit.reviewedBy}</p>
            <p className="mt-1"><span className="font-semibold text-[#142435]">Published by:</span> {credit.publishedBy}</p>
            <p className="mt-1"><span className="font-semibold text-[#142435]">Last updated:</span> {credit.lastUpdated}</p>
            <p className="mt-4 max-w-4xl leading-7">
              This page explains how a {KEYPHRASE} service is arranged in general terms. It is not
              advice on any particular marriage, and the requirements that apply depend on the city
              of the ceremony and the circumstances of both parties.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
