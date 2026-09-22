import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Footer, Header } from './site-shell'

export default function InfoPage({ eyebrow, title, intro, children }) {
  return (
    <div className="bg-[#fbfaf7] text-[#142435]">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#142435] px-6 pb-20 pt-40 text-white lg:px-10 lg:pb-28 lg:pt-48">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(215,184,120,0.18),transparent_30%)]" />
          <div className="relative mx-auto max-w-5xl"><Link href="/" className="text-xs text-white/45">Home / {title}</Link><p className="mb-6 mt-10 text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b878]">{eyebrow}</p><h1 className="font-serif text-5xl leading-[1.04] tracking-tight md:text-7xl">{title}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">{intro}</p></div>
        </section>
        <section className="px-6 py-24 lg:px-10"><div className="mx-auto max-w-5xl space-y-10 text-base leading-8 text-[#5d6263]">{children}</div></section>
        <section className="bg-[#d7b878] px-6 py-16 lg:px-10"><div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-7 md:flex-row md:items-center"><h2 className="max-w-2xl font-serif text-4xl leading-tight">Discuss Your Nikah Or Marriage Documentation Requirements</h2><Link href="/contact" className="inline-flex items-center rounded-full bg-[#142435] px-6 py-4 font-semibold text-white">Contact Us <ArrowRight className="ml-2 size-4" /></Link></div></section>
      </main>
      <Footer />
    </div>
  )
}
