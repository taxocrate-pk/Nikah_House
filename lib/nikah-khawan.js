// Nikah Khawan money page — content data.
//
// Primary key phrase: "Nikah Khawan" (used whole, per DNA 2.07D rule D7).
// Keyword evidence: Google Search Console queries for sc-domain:nikahhouse.com,
// 28 days to 4 Nov 2026 — "nikah khawan" position 20, "qazi nikah khawan"
// position 7, "nikah khawan near me" position 11, "nikkah khawan" position 37,
// "nikah registrar near me" position 5. Google Keyword Planner was not
// available, so live GSC query data was used in its place.
//
// This page replaces the destination of the old WordPress URL
// /nikah-khawan-imam-qazi-services-in-karachi-rawalpindi-islamabad-lahore-peshawar
// which held position 9.0 with 77 impressions before it was redirected to
// /online-nikah/karachi, a page that does not target this phrase.
//
// COVERAGE NOTE: the old URL named Peshawar. The firm has no office in Khyber
// Pakhtunkhwa, so Peshawar is deliberately NOT claimed anywhere on this page.
//
// AGE NOTE: no minimum-age figure is stated on this page. Capacity is described
// in general terms instead, because a specific age is a P0 legal-accuracy item
// that needs provision-by-provision verification per province before publishing.

export const KEYPHRASE = 'Nikah Khawan'

export const meta = {
  title: 'Nikah Khawan Services in Karachi, Lahore, Islamabad and Rawalpindi | Nikah House',
  description:
    'Nikah Khawan services for Nikah, Nikahnama particulars and Union Council registration in Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad and Hyderabad, arranged under advocate supervision.',
  slug: 'nikah-khawan',
}

export const hero = {
  eyebrow: 'Nikah Khawan · Imam · Qazi',
  h1: 'Nikah Khawan Services In Karachi, Lahore, Islamabad And Rawalpindi For Nikah, Nikahnama And Registration',
  h2: 'Advocate-Supervised Nikah Khawan, Imam And Qazi Arrangements Across Our Pakistani Offices',
  h3: 'Nikah Registrar Coordination, Witness Arrangement And Accurate Nikahnama Particulars In Every City We Serve',
  // Money-page rule: the first paragraph opens with the exact primary key phrase.
  answer:
    'Nikah Khawan arrangements begin with three things. The first step is to identify who will solemnise the Nikah, which Union Council will later register it, and whose identity and marital-status documents must match the Nikahnama exactly. Only then can the date, the witnesses, the Haq Mehr and the registration route be settled responsibly.',
  offer:
    'We offer a complete Nikah Khawan service: an authorised Nikah Khawan attends at our office or an agreed venue, the Nikahnama is completed in the prescribed form, and the record is prepared for registration with the Union Council that serves your area.',
  chips: [
    ['Fee basis', 'Fixed service fee per Nikah, quoted before we begin'],
    ['Who it is for', 'Adult couples marrying by free consent, in Pakistan or joining from abroad'],
    ['What is included', 'Nikah Khawan attendance, Nikahnama completion, witness guidance, registration route'],
    ['Government fees', 'Union Council registration charges are payable separately, at the official rate'],
  ],
}

export const whatItIs = {
  h2: 'What A Nikah Khawan Does, And Where The Nikah Registrar Differs',
  body: [
    'A Nikah Khawan is the person who solemnises the Nikah: he puts the offer and the acceptance to the parties, confirms that each consents freely, records the agreed Haq Mehr and completes the Nikahnama in the presence of witnesses. In ordinary speech the same person is often called the Imam or the Qazi, and for most couples the three words describe one role.',
    'The Nikah Registrar is a different office. Under section 5 of the Muslim Family Laws Ordinance 1961, the Union Council grants a licence to a person to register marriages solemnised under Muslim law, and that licensee is the Nikah Registrar. Where the Nikah Khawan attending your ceremony also holds that licence, one person covers both roles. Where he does not, the Nikahnama must still reach the licensed Nikah Registrar for the marriage to be entered on the register.',
    'This distinction is the single most common source of difficulty we see. A Nikah can be religiously complete and still unregistered, because solemnising and registering are separate acts. Non-registration does not undo the Nikah itself, but it leaves you without the registered record that NADRA, passport offices, banks, embassies and foreign authorities ask for later. So the first question to ask any Nikah Khawan is not when he is free, but who will register the marriage afterwards.',
  ],
}

export const cities = {
  h2: 'Nikah Khawan Services In Each City We Serve',
  intro:
    'A Nikah Khawan must be arranged for the place where the ceremony happens, because that is where registration follows. The applicable procedure is the one that governs the Union Council serving that area, not the district either party comes from.',
  rows: [
    ['Karachi', 'Sindh', 'Nikah Khawan attendance at our Gulistan-e-Jauhar office or an agreed Karachi venue, with the Nikahnama prepared for the relevant Karachi Union Council.'],
    ['Lahore', 'Punjab', 'Nikah Khawan arranged through our Lahore office, with witness planning and Nikahnama particulars checked against the Punjab registration route.'],
    ['Islamabad', 'Islamabad Capital Territory', 'Nikah Khawan coordination for ICT, where the registering body differs from the adjoining Punjab districts and should not be assumed to be the same.'],
    ['Rawalpindi', 'Punjab', 'A separate city from Islamabad for registration purposes, with its own Union Council route — a point couples frequently get wrong.'],
    ['Faisalabad', 'Punjab', 'Nikah Khawan arrangements through our partner office, with Nikahnama accuracy and the local registration route handled on the same basis.'],
    ['Hyderabad', 'Sindh', 'Nikah Khawan coordination through our partner office, with Sindh documentation and the competent Hyderabad Union Council.'],
  ],
  note:
    'We do not hold an office in Khyber Pakhtunkhwa and do not offer a Nikah Khawan service there. Where a couple needs a ceremony outside the cities listed above, we say so plainly rather than take the booking.',
}

export const fees = {
  h2: 'Nikah Khawan Fees And What Each Service Level Includes',
  intro:
    'Every Nikah Khawan booking is quoted as a fixed service fee before any work begins. Union Council registration charges and NADRA certificate fees are government charges, payable separately at the official rate — we do not add a margin to them, and we do not describe them as part of our fee.',
  table: {
    head: ['Service', 'What the Nikah Khawan service covers', 'Government fees'],
    rows: [
      ['Nikah only', 'An authorised Nikah Khawan attends, puts offer and acceptance, confirms consent and Haq Mehr, and completes the Nikahnama with witnesses present.', 'None at this stage'],
      ['Nikah with registration', 'Everything above, plus preparation and submission of the Nikahnama to the licensed Nikah Registrar for entry on the Union Council register.', 'Union Council registration charge, payable separately'],
      ['Nikah with registration and certificate', 'Everything above, plus following the registered record through to the computerised marriage certificate.', 'Union Council and NADRA charges, payable separately'],
      ['Overseas party joining remotely', 'Nikah Khawan attendance with one party participating from abroad, where the planned procedure and any representation are settled in advance.', 'As above, plus any attestation or translation charges'],
    ],
  },
  note:
    'We quote in writing and we do not quote a Nikah Khawan fee before knowing the city, the marital status of both parties and whether registration and a certificate are needed. Anyone quoting a single flat Nikah Khawan figure without asking those questions is guessing.',
}

export const documents = {
  h2: 'Documents A Nikah Khawan Needs Before The Nikah',
  intro:
    'The Nikahnama is a prescribed form, and what the Nikah Khawan enters on it must match the documents behind it. Names, parentage, dates and marital status should read identically across every paper, because a mismatch surfaces years later at a passport office or an embassy, when it is far harder to correct.',
  items: [
    'CNIC of both parties, or passport where a party is a foreign national',
    'CNIC details of the witnesses who will attend',
    'Current marital status of each party, stated accurately',
    'Divorce certificate or the registered divorce deed, where a party is divorced',
    'Death certificate of the former spouse, where a party is widowed',
    'Wali details, where the Wali is to participate',
    'The Haq Mehr figure the parties have agreed, and whether it is prompt or deferred',
    'Any special authority, where one party is represented',
  ],
}

export const special = {
  h2: 'Special Circumstances A Nikah Khawan Must Account For',
  intro:
    'Most difficulties are not about the ceremony itself. They come from a circumstance that should have been settled before the Nikah Khawan was ever booked, and that a Nikah Khawan on his own cannot resolve on the day.',
  items: [
    ['Second marriage', 'Where a husband is already married, the Muslim Family Laws Ordinance 1961 requires the permission of the Union Council Arbitration Council before a further marriage. This has to be addressed before the Nikah, not after.'],
    ['Divorced party', 'The registered divorce record and the completion of the iddat period both matter. Pakistani law contains no concept of halala, and any demand for it should be rejected outright.'],
    ['Widow or widower', 'The former spouse\'s death certificate is needed, and the iddat position should be confirmed before a date is fixed.'],
    ['Overseas party', 'One party joining from abroad changes the planning, not the principle. Consent must still be free, clear and properly witnessed, and the later use of the document abroad should be considered from the start.'],
    ['Foreign national', 'A Nikah can be registered in Pakistan where one party is Pakistani and the other a foreign national. Passport particulars and the spelling of names need particular care.'],
    ['Family opposition', 'Two consenting adults may marry lawfully. We keep the arrangement confidential, and where there is a genuine safety concern the appropriate document is an Affidavit of Free Will.'],
    ['Nikahnama correction', 'Where an existing Nikahnama carries a wrong name, date or particular, the correction route runs through the registering authority. A fresh Nikah is not the answer to a clerical error.'],
  ],
  warning:
    'One thing we will not do: some court-marriage advertisers offer to arrange a statement under section 164 of the Code of Criminal Procedure as part of a marriage package. That is a false inducement. A section 164 statement is recorded during an investigation, so it can only arise once an FIR exists. It has no place in arranging a Nikah.',
}

export const comparison = {
  h2: 'Nikah Khawan Or Nikah Registrar — Which One You Actually Need',
  head: ['', 'Nikah Khawan', 'Nikah Registrar'],
  rows: [
    ['Role', 'Solemnises the Nikah', 'Registers the marriage with the Union Council'],
    ['Authority', 'Performs the religious ceremony', 'Holds a licence granted by the Union Council under section 5, MFLO 1961'],
    ['What you receive', 'A completed Nikahnama', 'The marriage entered on the official register'],
    ['When involved', 'On the day of the Nikah', 'After the Nikahnama is completed'],
    ['Can one person do both?', 'Yes, where the same person also holds the Registrar\'s licence', 'Yes, in the same situation'],
    ['What happens without it', 'No Nikah has taken place', 'The Nikah stands, but no registered record exists'],
  ],
}

export const tips = {
  h2: 'Practical Points Before You Book A Nikah Khawan',
  items: [
    'Settle the city first. The Nikah Khawan and the Union Council both follow the place of the ceremony.',
    'Check every spelling against the CNIC before the day, not on it.',
    'Agree the Haq Mehr in advance, and whether it is prompt or deferred, so it is not negotiated in front of witnesses.',
    'Confirm your witnesses can attend and bring their own CNICs.',
    'Ask whether the Nikah Khawan attending also holds the Nikah Registrar licence. If not, ask who will register the marriage.',
    'Book the Nikah Khawan for the city where the ceremony will actually take place, not the city either family lives in.',
    'If the document will be used abroad, say so at the start — attestation and translation are easier to plan than to retrofit.',
    'Keep your own copy of the Nikahnama, and obtain the registered certificate rather than relying on the Nikahnama alone.',
  ],
}

export const advantages = {
  h2: 'Why Couples Use Our Nikah Khawan Service',
  items: [
    ['Advocate supervision', 'The arrangement is supervised by practising advocates, so a problem in marital status, identity or documentation is identified before the Nikah rather than afterwards.'],
    ['One accountable arrangement', 'The Nikah Khawan, the Nikahnama, the witnesses and the registration route are handled as one piece of work instead of three separate errands, and one office answers for all of it.'],
    ['Confidentiality by default', 'Enquiries and arrangements are kept confidential. We do not publish client details and we do not require you to attend a public office to begin.'],
    ['Honest scope', 'We say what a Nikahnama does and does not achieve. A registered marriage record is strong evidence; it is not an automatic approval from any immigration or civil authority.'],
  ],
}

export const notBureau = {
  h2: 'What This Service Is Not',
  body: [
    'We are not a marriage bureau. We do not find, introduce or recommend partners, and we do not hold a list of prospective brides or grooms. Our work begins once two people have decided to marry each other.',
    'We mention this plainly because a steady share of enquiries, particularly from the United Kingdom and the United States, arrive expecting a rishta service. A Nikah Khawan performs and records a marriage between parties who have already chosen one another, and that is the whole of what a Nikah Khawan is engaged to do.',
  ],
}

export const team = {
  h2: 'Advocates Who Supervise These Arrangements',
  intro:
    'Nikah Khawan bookings through Nikah House are supervised by named advocates rather than handled anonymously, so there is always a lawyer accountable for the arrangement and not only a Nikah Khawan on the day. The firm itself does not claim four decades of corporate history; the experience below is the personal professional experience of the people named.',
  members: [
    ['Mohsin Ali Shah', 'Consulting Lawyer (Corporate, Taxation, Family and Criminal), M.A., LL.B.', 'Karachi', 'Over forty years of personal professional practice, beginning in 1985. Reviews marital-status and documentation questions before a Nikah is arranged.'],
    ['Sobia Mohsin', 'Advocate', 'Karachi', 'Handles the family-law side of the practice, including the documentation questions that most often arise before a Nikah.'],
    ['Zaheer Ahmed Qazi', 'Advocate High Court', 'Karachi', 'Supervises Nikah and marriage-record matters for Karachi couples.'],
    ['Kashif Mumtaz', 'Advocate High Court', 'Islamabad and Rawalpindi', 'Supervises Nikah Khawan arrangements and registration questions for Islamabad and Rawalpindi.'],
    ['Muhammad Junaid Kahloon', 'Senior Advocate', 'Lahore', 'Supervises Nikah Khawan arrangements and Nikahnama particulars for Lahore.'],
    ['Rana Shafqat Rasool', 'Advocate High Court', 'Faisalabad', 'Partner-office advocate for Faisalabad Nikah and registration matters.'],
  ],
}

// DNA 2.07: exactly 10 FAQs where the body excluding FAQs runs to 1,200+ words.
export const faqs = [
  ['What does a Nikah Khawan do?',
   'A Nikah Khawan solemnises the Nikah. He puts the offer and the acceptance to the parties, satisfies himself that each is consenting freely, records the agreed Haq Mehr and completes the Nikahnama in the presence of witnesses. He is often called the Imam or the Qazi, and for most couples those words describe the same role.'],
  ['Is a Nikah Khawan the same as a Nikah Registrar?',
   'Not necessarily. The Nikah Khawan performs the ceremony; the Nikah Registrar is licensed by the Union Council under section 5 of the Muslim Family Laws Ordinance 1961 to register marriages. Where the same person holds that licence, one person covers both. Where he does not, the Nikahnama must still reach a licensed Nikah Registrar for the marriage to be registered.'],
  ['How much does a Nikah Khawan cost?',
   'We quote a fixed service fee once we know the city, the marital status of both parties and whether registration and a computerised certificate are required. Union Council and NADRA charges are government fees payable separately at the official rate. Any quote given without those questions being asked is a guess.'],
  ['Which cities do you arrange a Nikah Khawan in?',
   'Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad and Hyderabad. We hold no office in Khyber Pakhtunkhwa and do not offer the service there. Rawalpindi and Islamabad are treated separately, because they register through different authorities.'],
  ['What documents does the Nikah Khawan need?',
   'The CNIC of both parties, or a passport where a party is a foreign national; the CNIC details of the witnesses; an accurate statement of each party\'s current marital status; and, where relevant, the registered divorce record or the former spouse\'s death certificate. The agreed Haq Mehr should be settled before the day.'],
  ['Is the Nikahnama the same as a marriage certificate?',
   'No. The Nikahnama is the primary marriage record completed at the ceremony. Registration with the Union Council and the computerised marriage certificate issued afterwards are separate documentary stages. Many couples hold a Nikahnama and discover years later that the marriage was never registered.'],
  ['Does a Nikah become invalid if it is never registered?',
   'Non-registration does not undo the Nikah itself. It does leave you without the registered record that NADRA, passport offices, banks, embassies and foreign authorities commonly require, and the Ordinance provides a penalty for failing to register. The practical consequences fall on the couple.'],
  ['Can a Nikah Khawan conduct the Nikah if one party is abroad?',
   'This can be planned, and we arrange it regularly. Consent must still be free, clear and properly witnessed, and the participation method and any representation should be settled before the ceremony rather than improvised on the day. Where the document will be used abroad, attestation and translation are planned at the same time.'],
  ['Do you help find a bride or groom?',
   'No. We are not a marriage bureau and we do not find, introduce or recommend partners. Our work begins once two people have decided to marry each other.'],
  ['A name on our existing Nikahnama is wrong. Do we need a fresh Nikah?',
   'No. A wrong name, date or particular on a Nikahnama is corrected through the registering authority, and the route depends on what is wrong and when it was recorded. A second Nikah is not the remedy for a clerical error, and treating it as one creates a worse problem than the mistake.'],
]

export const credit = {
  reviewedBy: 'Mohsin Ali Shah, Consulting Lawyer (M.A., LL.B.)',
  publishedBy: 'Nikah House',
  lastUpdated: '7 November 2026',
}
