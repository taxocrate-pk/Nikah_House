'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, ChevronDown, ChevronRight, Menu, X } from 'lucide-react'

const nikahHouseLogo = '/images/brand/nikah-house-mark.png'

const onlineNikahLocations = [
  ['Karachi', '/online-nikah/karachi'],
  ['Lahore', '/online-nikah/lahore'],
  ['Islamabad', '/online-nikah/islamabad'],
  ['Rawalpindi', '/online-nikah/rawalpindi'],
  ['Faisalabad', '/online-nikah/faisalabad'],
  ['Hyderabad', '/online-nikah/hyderabad'],
  ['Pakistan', '/online-nikah/pakistan'],
  ['United Kingdom', '/online-nikah/united-kingdom'],
  ['United States', '/online-nikah/united-states'],
  ['Canada', '/online-nikah/canada'],
  ['Europe', '/online-nikah/europe'],
  ['Australia', '/online-nikah/australia'],
  ['UAE & Middle East', '/online-nikah/uae-middle-east'],
]

const courtMarriageCities = [
  ['Karachi', '/court-marriage/karachi'],
  ['Lahore', '/court-marriage/lahore'],
  ['Islamabad', '/court-marriage/islamabad'],
  ['Rawalpindi', '/court-marriage/rawalpindi'],
  ['Faisalabad', '/court-marriage/faisalabad'],
  ['Hyderabad', '/court-marriage/hyderabad'],
]

const onlineMarriageLocations = [
  ['Karachi', '/online-marriage/karachi'],
  ['Lahore', '/online-marriage/lahore'],
  ['Islamabad', '/online-marriage/islamabad'],
  ['Rawalpindi', '/online-marriage/rawalpindi'],
  ['Faisalabad', '/online-marriage/faisalabad'],
  ['Hyderabad', '/online-marriage/hyderabad'],
]

const serviceMenu = [
  ['Court Marriage', '/court-marriage/karachi', courtMarriageCities],
  ['Online Nikah', '/online-nikah/pakistan', onlineNikahLocations],
  ['Online Marriage', '/online-marriage/karachi', onlineMarriageLocations],
]

export function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-3" aria-label="Nikah House home">
      <img
        src={nikahHouseLogo}
        alt=""
        width="56"
        height="56"
        className="h-12 w-12 object-contain sm:h-14 sm:w-14"
      />
      <span className="font-serif text-xl font-semibold tracking-wide text-white sm:text-2xl">Nikah House</span>
    </Link>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-white/75 lg:flex" aria-label="Main navigation">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <div className="group/services relative py-2">
            <Link href="/#services" className="flex items-center gap-1.5 transition hover:text-white">
              Our Services <ChevronDown className="size-3.5 transition group-hover/services:rotate-180" />
            </Link>
            <div className="invisible absolute left-0 top-full w-72 translate-y-2 rounded-xl border border-white/10 bg-[#142435] p-2 opacity-0 shadow-2xl transition group-hover/services:visible group-hover/services:translate-y-0 group-hover/services:opacity-100">
              {serviceMenu.map(([label, href, items]) => (
                <div key={label} className="group/item relative">
                  <Link href={href} className="flex items-center justify-between rounded-lg px-4 py-3 hover:bg-white/10 hover:text-[#d7b878]">
                    {label} <ChevronRight className="size-4" />
                  </Link>
                  <div className="invisible absolute left-full top-0 ml-2 max-h-[70vh] w-64 overflow-y-auto rounded-xl border border-white/10 bg-[#142435] p-2 opacity-0 shadow-2xl transition group-hover/item:visible group-hover/item:opacity-100">
                    {items.map(([name, itemHref]) => (
                      <Link key={itemHref} href={itemHref} className="block rounded-lg px-4 py-3 text-xs text-white/65 hover:bg-white/10 hover:text-[#d7b878]">
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link href="/blog" className="transition hover:text-white">Blog</Link>
          <Link href="/about" className="transition hover:text-white">About</Link>
          <Link href="/contact" className="transition hover:text-white">Contact Us</Link>
        </nav>
        <Link href="/contact" className="hidden rounded-full bg-[#d7b878] px-5 py-3 text-sm font-semibold text-[#142435] transition hover:bg-[#e8cf99] lg:inline-flex">
          Discuss Your Nikah <ArrowRight className="ml-2 size-4" />
        </Link>
        <button type="button" onClick={() => setOpen(!open)} className="rounded-full border border-white/20 p-2 text-white lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="mx-4 max-h-[78vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#142435] p-5 shadow-2xl lg:hidden">
          <nav className="flex flex-col gap-4 text-sm text-white/80" aria-label="Mobile navigation">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <details>
              <summary className="flex cursor-pointer list-none items-center gap-1.5 text-white">
                Our Services <ChevronDown className="size-3.5" />
              </summary>
              <div className="mt-4 space-y-4 border-l border-white/10 pl-4">
                {serviceMenu.map(([label, , items]) => (
                  <details key={label}>
                    <summary className="flex cursor-pointer list-none items-center gap-1.5 text-white/75">
                      {label} <ChevronDown className="size-3.5" />
                    </summary>
                    <div className="mt-3 flex flex-col gap-3 border-l border-white/10 pl-4">
                      {items.map(([name, href]) => (
                        <Link key={href} href={href} onClick={() => setOpen(false)} className="text-xs text-white/55">{name}</Link>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </details>
            <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-[#d7b878] px-4 py-3 text-center font-semibold text-[#142435]">Discuss Your Nikah</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#101d2a] px-6 py-14 text-white lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div><Logo /><p className="mt-6 max-w-xs text-sm leading-7 text-white/55">Professional Nikah, Online Nikah, Online Marriage and marriage-documentation services for couples in Pakistan and overseas.</p></div>
        <div><h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7b878]">Services</h3><div className="mt-5 flex flex-col gap-3 text-sm text-white/60"><Link href="/online-nikah/pakistan">Online Nikah</Link><Link href="/online-marriage/karachi">Online Marriage</Link><Link href="/court-marriage/karachi">Court Marriage</Link><Link href="/#services">All Services</Link></div></div>
        <div><h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7b878]">Pakistan Offices</h3><div className="mt-5 flex flex-col gap-3 text-sm text-white/60">{courtMarriageCities.map(([city, href]) => <Link key={href} href={href}>{city}</Link>)}</div></div>
        <div><h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7b878]">Important To Know</h3><p className="mt-5 text-sm leading-7 text-white/55">Islamic Nikah, civil registration and overseas recognition are distinct matters. Requirements vary by jurisdiction and circumstances. This website is not a substitute for case-specific legal advice.</p></div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Nikah House. All rights reserved.</span><span>Confidential discussions · Case-specific service</span></div>
    </footer>
  )
}
