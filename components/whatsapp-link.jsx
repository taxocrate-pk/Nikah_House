'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const WHATSAPP_NUMBER = '923161119655'
export const WHATSAPP_DISPLAY = '+92 316 111 9655'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

function pageLabel(pathname) {
  if (!pathname || pathname === '/') return 'Home page'
  const words = pathname.split('/').filter(Boolean).map((s) => s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()))
  return words.join(' – ') + ' page'
}

// WhatsApp link that tells the office which Nikah House page the enquiry came from.
export default function WhatsAppLink({ children, className, ...rest }) {
  const pathname = usePathname()
  const [title, setTitle] = useState('')
  useEffect(() => { setTitle((document.title || '').split('|')[0].trim()) }, [pathname])
  const label = pageLabel(pathname)
  const text = `Assalam o Alaikum, I am interested in your service at Nikah House – ${label}${title ? ` (${title})` : ''}: https://www.nikahhouse.com${pathname || '/'}`
  const href = `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>{children}</a>
}
