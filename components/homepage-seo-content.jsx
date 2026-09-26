import Link from 'next/link'
import { Check } from 'lucide-react'

export default function HomepageSeoContent() {
  return <>
    <section className="bg-[#fbfaf7] px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#ad8750]">Online Nikah services</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#142435] md:text-5xl">Online Nikah in Pakistan and for Overseas Couples</h2>
          <p className="mt-5 text-lg leading-8 text-[#5d6263]">Online Nikah can be useful when the bride, groom, family members or witnesses are in different cities or countries. The important point is not simply joining a video call; the arrangement should be planned around consent, identity, witnesses, the Nikah Khawan, the Nikah Nama and the registration steps that may follow.</p>
        </div>
        <div className="space-y-6 text-[#5d6263]">
          <p className="leading-8">Nikah House helps couples understand the difference between the Islamic ceremony and the civil or documentary process connected with it. For some couples, the Nikah may be coordinated while one party is in Pakistan and the other is abroad. For others, both parties may be overseas but require documents that will later be used in Pakistan or before a foreign authority. These situations should be reviewed individually because the practical requirements can differ according to location, nationality, marital status and the purpose for which the marriage documents will be used.</p>
          <p className="leading-8">Before an online Nikah is arranged, the parties should know who will participate, how identity will be confirmed, who the witnesses will be, whether a Wali is applicable to their circumstances, what Haq Mehr has been agreed and how the Nikah Nama will be completed. Where registration or a marriage certificate is also required, those steps should be considered from the beginning rather than treated as an afterthought.</p>
          <p className="leading-8">Our approach is therefore document-led and case-specific. We do not describe every online Nikah as identical, and we do not assume that a document accepted in one place will automatically satisfy another authority. Couples can discuss their circumstances first and then proceed with a clearer understanding of the ceremony, paperwork and follow-up requirements.</p>
          <div className="flex flex-wrap gap-3 pt-2 text-sm font-semibold">
            <Link href="/online-nikah/pakistan" className="rounded-full border border-[#d7d0c4] px-4 py-2.5 text-[#142435] transition hover:border-[#ad8750]">Online Nikah in Pakistan</Link>
            <Link href="/online-nikah/united-kingdom" className="rounded-full border border-[#d7d0c4] px-4 py-2.5 text-[#142435] transition hover:border-[#ad8750]">Online Nikah in the UK</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#f7f3ec] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#ad8750]">Nikah Nama and registration</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#142435] md:text-5xl">Nikah Nama, Marriage Registration and Certificate Support</h2>
          <p className="mt-5 text-lg leading-8 text-[#5d6263]">A properly planned Nikah should also take account of the documents that may be needed afterwards. The Nikah Nama records important details of the marriage, while registration and certificate requirements depend on the relevant local authority and the intended use of the record.</p>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <article className="border-t border-[#d7b878] pt-6">
            <h3 className="font-serif text-2xl text-[#142435]">Nikah Nama Preparation</h3>
            <p className="mt-4 leading-8 text-[#666b69]">Names, CNIC or passport particulars, marital status, witnesses, Wali information where applicable and the agreed Haq Mehr should be handled carefully. Small inconsistencies in personal details can create unnecessary complications later, particularly when documents are required for immigration, family records or use overseas.</p>
          </article>
          <article className="border-t border-[#d7b878] pt-6">
            <h3 className="font-serif text-2xl text-[#142435]">Marriage Registration</h3>
            <p className="mt-4 leading-8 text-[#666b69]">The Islamic Nikah ceremony and civil registration are related but distinct. Where registration is required, the relevant local process should be followed with the correct documentation. Nikah House helps couples understand what stage they are at and what documents may still be required after the ceremony.</p>
          </article>
          <article className="border-t border-[#d7b878] pt-6">
            <h3 className="font-serif text-2xl text-[#142435]">Marriage Certificate Guidance</h3>
            <p className="mt-4 leading-8 text-[#666b69]">A couple may need a registered marriage record or certificate for a visa, family registration, immigration, sponsorship or another official purpose. The receiving authority may have its own requirements, so documents should be checked against the intended use rather than assumed to be universally interchangeable.</p>
          </article>
        </div>
        <div className="mt-12 grid gap-4 text-[#424b4c] sm:grid-cols-2 lg:grid-cols-3">
          {['Identity particulars checked before preparation', 'Haq Mehr details recorded clearly', 'Witness details reviewed', 'Prior-marriage documents considered where relevant', 'Registration steps explained for the relevant case', 'Overseas use considered before documents are finalised'].map((item) => <div key={item} className="flex gap-3 border-t border-[#d7d0c4] pt-4 text-sm leading-6"><Check className="mt-1 size-4 shrink-0 text-[#ad8750]" />{item}</div>)}
        </div>
      </div>
    </section>

    <section className="bg-[#fbfaf7] px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#ad8750]">Pakistan and overseas coverage</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#142435] md:text-5xl">Nikah Services for Families in Pakistan and Abroad</h2>
          <p className="mt-5 text-lg leading-8 text-[#5d6263]">Couples increasingly need a Nikah arrangement that works across cities, time zones and different documentary systems. Nikah House coordinates the practical side while keeping the religious ceremony and documentary requirements clearly separated.</p>
        </div>
        <div className="space-y-6 text-[#5d6263]">
          <p className="leading-8">Within Pakistan, our court-marriage related Nikah coordination is focused on Karachi, Lahore, Islamabad, Rawalpindi and Faisalabad. The exact process can vary by city and by the circumstances of the couple, so local requirements should be checked before promises are made about timing, registration or supporting documents.</p>
          <p className="leading-8">For overseas Pakistanis and international couples, online Nikah coordination is available more broadly. A case may involve a Pakistani citizen abroad, a foreign national, a couple living in different countries or a family that needs Pakistani marriage documents for later use overseas. Nationality, previous marital status and the destination country can all affect what supporting documents may be needed.</p>
          <p className="leading-8">Where a foreign authority, embassy, immigration department or civil registry will later review the marriage record, its requirements should be checked independently. Nikah House can help organise the Nikah and explain the Pakistani documentation path, but recognition outside Pakistan ultimately depends on the law and administrative rules of the receiving jurisdiction.</p>
          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            <Link href="/court-marriage/karachi" className="border-t border-[#d7d0c4] py-4 font-serif text-xl text-[#142435] transition hover:border-[#ad8750]">Court Marriage in Karachi</Link>
            <Link href="/court-marriage/lahore" className="border-t border-[#d7d0c4] py-4 font-serif text-xl text-[#142435] transition hover:border-[#ad8750]">Court Marriage in Lahore</Link>
            <Link href="/court-marriage/islamabad" className="border-t border-[#d7d0c4] py-4 font-serif text-xl text-[#142435] transition hover:border-[#ad8750]">Court Marriage in Islamabad</Link>
            <Link href="/court-marriage/rawalpindi" className="border-t border-[#d7d0c4] py-4 font-serif text-xl text-[#142435] transition hover:border-[#ad8750]">Court Marriage in Rawalpindi</Link>
          </div>
        </div>
      </div>
    </section>
  </>
}
