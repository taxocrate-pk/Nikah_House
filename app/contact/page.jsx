import InfoPage from '@/components/info-page'

export const metadata = { title: 'Contact Nikah House', description: 'Contact Nikah House to discuss Nikah, Online Nikah, Court Marriage and documentation requirements.' }

export default function ContactPage() {
  return <InfoPage eyebrow="Confidential Enquiries" title="Discuss Your Nikah Requirements" intro="Tell us where both parties are located, their nationality, preferred service, intended date and where the final documents will be used."><div className="grid gap-8 md:grid-cols-2"><div className="rounded-2xl border border-[#d7d0c4] bg-[#f7f3ec] p-8"><h2 className="font-serif text-3xl text-[#142435]">Email Enquiry</h2><p className="mt-4">Email: <a className="text-[#8b692f] underline" href="mailto:hello@nikahhouse.com">hello@nikahhouse.com</a></p><p className="mt-3">Please do not send original identity documents before the service scope and secure submission method are confirmed.</p></div><div className="rounded-2xl border border-[#d7d0c4] bg-[#f7f3ec] p-8"><h2 className="font-serif text-3xl text-[#142435]">Details To Include</h2><ul className="mt-4 list-disc space-y-2 pl-5"><li>Current country and city of each party</li><li>Nationality and present marital status</li><li>Preferred Nikah or Court Marriage service</li><li>Expected use of the marriage documents</li></ul></div></div></InfoPage>
}
