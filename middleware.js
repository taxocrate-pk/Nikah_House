import { NextResponse } from 'next/server'

// Hacked-WordPress spam and old WordPress system URLs: answer 410 Gone so Google drops them fast.
const SPAM = /(xbet|mostbet|casino|kazino|kripto|crypto|xo-so|tai-xiu|b52club|hitclub|iwin|rikvip|go88|roulette|sp5der|hoodie|bukmeker|aviator|youtube|billionaire|discover-who|kazanc|rusya|tyyar|chess|%d0|%d1|%c9|%c3)/i
const WP = /^\/(wp-content|wp-includes|wp-json|wp-admin|feed|category|tag|author)(\/|$)|\/feed\/?$/

export function middleware(req) {
  const p = req.nextUrl.pathname
  const raw = req.url
  if (WP.test(p) || SPAM.test(p) || SPAM.test(raw) || /[^\x00-\x7F]/.test(decodeURIComponent(p)) || req.nextUrl.searchParams.has('jkit-ajax-request')) {
    return new NextResponse('Gone', { status: 410, headers: { 'X-Robots-Tag': 'noindex' } })
  }
  return NextResponse.next()
}

export const config = { matcher: ['/((?!_next|images|favicon|.*\\.(?:webp|png|jpg|svg|ico|css|js)$).*)'] }
