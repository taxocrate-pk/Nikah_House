// Real Nikah House photographs (WebP) — one distinct image per page.
const M = '/images/media/'
const online = {
  'United Kingdom': ['online-nikah-overseas-groom-video', 'Online Nikah by video link with a groom in the United Kingdom'],
  'United States': ['online-nikah-ceremony-video-link', 'Online Nikah ceremony conducted over a video link'],
  Canada: ['online-nikah-video-call-office-karachi', 'Online Nikah video call held at the Nikah House office'],
  Europe: ['online-nikah-overseas-pakistanis-banner', 'Online Nikah service for overseas Pakistanis in Europe'],
  Australia: ['online-nikah-made-easy-banner', 'Online Nikah made easy for couples in Australia'],
  'UAE & Middle East': ['online-nikah-service-in-pakistan-banner', 'Online Nikah service for couples in the UAE and Middle East'],
  Pakistan: ['online-nikah-service-in-pakistan-banner', 'Online Nikah service in Pakistan'],
  Karachi: ['nikah-khawan-karachi-banner', 'Nikah Khawan services in Karachi'],
  Lahore: ['bride-online-nikah-office', 'Bride attending an Online Nikah at the office in Lahore'],
  Islamabad: ['online-nikah-video-call-office-karachi', 'Online Nikah video call for an Islamabad couple'],
  Rawalpindi: ['online-nikah-ceremony-video-link', 'Online Nikah by video link for a Rawalpindi couple'],
  Faisalabad: ['nikah-khawan-imam-qazi-services', 'Nikah Khawan, Imam and Qazi services for Faisalabad'],
  Hyderabad: ['online-nikah-overseas-groom-video', 'Online Nikah with an overseas groom for a Hyderabad bride'],
}
const court = {
  Karachi: ['court-marriage-in-pakistan-banner', 'Court Marriage in Karachi — Nikah House services'],
  Lahore: ['bride-signing-nikah-nama', 'Bride signing the Nikah Nama during a Court Marriage in Lahore'],
  Islamabad: ['signing-nikah-nama-close-up', 'Nikah Nama being signed during a Court Marriage in Islamabad'],
  Rawalpindi: ['mehndi-hands-nikah-nama', 'Bride completing the Nikah Nama in Rawalpindi'],
  Faisalabad: ['framed-nikah-nama', 'Registered Nikah Nama after a Court Marriage in Faisalabad'],
  Hyderabad: ['court-marriage-services-banner', 'Court Marriage services in Hyderabad'],
}
const marriage = {
  Karachi: ['online-shadi-service-office', 'Online Shadi service at the Nikah House office in Karachi'],
  Lahore: ['bride-groom-hands-mehndi', 'Bride and groom hands at an online marriage in Lahore'],
  Islamabad: ['online-nikah-ceremony-video-link', 'Online marriage by video link for Islamabad'],
  Rawalpindi: ['bride-online-nikah-office', 'Bride at an online marriage for Rawalpindi'],
  Faisalabad: ['nikah-khawan-complete-services-banner', 'Complete Nikah Khawan services for Faisalabad'],
  Hyderabad: ['online-nikah-made-easy-banner', 'Online marriage made easy for Hyderabad'],
}
export function pageImage(kind, name) {
  const t = (kind === 'online' ? online : kind === 'court' ? court : marriage)[name] || ['online-nikah-service-in-pakistan-banner', `${name} Nikah service`]
  return { src: `${M}${t[0]}.webp`, alt: t[1] }
}
