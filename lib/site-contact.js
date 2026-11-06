// Nikah House contact details.
//
// OWNER ACTION REQUIRED before this page goes to production.
//
// The network allocates phone numbers per OFFICE, not per site, and no number
// has been confirmed for nikahhouse.com. Nothing is guessed here on purpose: a
// wrong number on a live page loses enquiries silently.
//
// The sibling site nikah.services trades under Right Law Associates and uses
// 0333 1127834 with the Gulistan-e-Jauhar office, so that is the likeliest
// answer — but it is NOT confirmed for this site and must not be assumed.
//
// Replace the PENDING values below with the confirmed ones. The page renders a
// visible notice instead of a contact strip while any of them is still PENDING,
// so an unconfirmed detail can never be mistaken for a real one.
//
// Address policy: building and area only. No unit, shop or chamber numbers —
// the exact location goes to the client after they call.

export const PENDING = 'PENDING-OWNER-CONFIRMATION'

export const contact = {
  // e.g. '0333 1127834'
  phone: PENDING,
  // International form for the tel: link, e.g. '+923331127834'
  phoneIntl: PENDING,
  // Digits only for the wa.me link, e.g. '923331127834'
  whatsapp: PENDING,
  // Building and area only, e.g. 'Mezzanine Floor, Muneer Mobile Mall, Block 17, Gulistan-e-Jauhar, Karachi'
  officeKarachi: PENDING,
  email: 'hello@nikahhouse.com',
}

export const contactReady = Object.values(contact).every(v => v !== PENDING)

/** WhatsApp link with the service named in the pre-filled message, per DNA D1. */
export function waLink(service) {
  const text = encodeURIComponent(
    `Assalam-o-Alaikum. I would like to enquire about ${service} through Nikah House.`
  )
  return `https://wa.me/${contact.whatsapp}?text=${text}`
}

export const telLink = `tel:${contact.phoneIntl}`
