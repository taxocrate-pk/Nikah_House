export const onlineNikahCountries = {
  'united-kingdom': { name: 'United Kingdom', adjective: 'UK', focus: 'civil recognition, spouse or partner applications, and document evidence expected by UK authorities' },
  'united-states': { name: 'United States', adjective: 'US', focus: 'state-law recognition questions, immigration evidence, certified records and consistent identity details' },
  canada: { name: 'Canada', adjective: 'Canadian', focus: 'provincial records, immigration use, translations and proof of a properly completed marriage' },
  europe: { name: 'Europe', adjective: 'European', focus: 'the rules of the particular European country, civil-status registration, translation and authentication' },
  australia: { name: 'Australia', adjective: 'Australian', focus: 'foreign-marriage recognition, immigration evidence and documents suitable for Australian use' },
  'uae-middle-east': { name: 'UAE & Middle East', adjective: 'UAE and Middle Eastern', focus: 'embassy or consular requirements, Arabic translation, attestation and local civil-status use' },
  pakistan: { name: 'Pakistan', adjective: 'Pakistani', focus: 'Nikahnama preparation, Union Council registration and the computerised marriage certificate process' },
  karachi: { name: 'Karachi', adjective: 'Karachi', focus: 'remote Nikah coordination, accurate identity particulars and the relevant registration route in Sindh' },
  lahore: { name: 'Lahore', adjective: 'Lahore', focus: 'remote Nikah coordination, witness planning and the relevant registration route in Punjab' },
  islamabad: { name: 'Islamabad', adjective: 'Islamabad', focus: 'identity review, consent, remote participation and later document use in Islamabad Capital Territory' },
  rawalpindi: { name: 'Rawalpindi', adjective: 'Rawalpindi', focus: 'remote Nikah coordination with Rawalpindi-specific registration and documentation requirements' },
  faisalabad: { name: 'Faisalabad', adjective: 'Faisalabad', focus: 'remote Nikah arrangements, accurate Nikahnama particulars and the local registration route' },
  hyderabad: { name: 'Hyderabad', adjective: 'Hyderabad', focus: 'remote Nikah coordination, Sindh-specific documentation and registration planning for Hyderabad couples' },
  'west-bengal': { name: 'West Bengal', adjective: 'West Bengal', focus: 'cross-border identity, consent, religious ceremony planning and document-use requirements for couples connected with West Bengal, India' },
}

export const courtMarriageCities = {
  karachi: { name: 'Karachi', province: 'Sindh', focus: 'confidential coordination, correct Nikahnama particulars and registration through the competent local authority' },
  lahore: { name: 'Lahore', province: 'Punjab', focus: 'free consent, lawyer-assisted documentation, Nikah arrangements and the relevant local registration route' },
  islamabad: { name: 'Islamabad', province: 'Islamabad Capital Territory', focus: 'identity review, consent, Nikah documentation and registration with the competent authority in Islamabad' },
  rawalpindi: { name: 'Rawalpindi', province: 'Punjab', focus: 'a city-specific process distinct from Islamabad, with the appropriate Rawalpindi documentation and registration route' },
  faisalabad: { name: 'Faisalabad', province: 'Punjab', focus: 'local coordination through our partner-office network, accurate documentation and official registration' },
  hyderabad: { name: 'Hyderabad', province: 'Sindh', focus: 'free-consent marriage coordination, accurate Nikahnama particulars and registration through the competent Hyderabad authority' },
}

export const onlineMarriageLocations = {
  karachi: { name: 'Karachi', country: 'Pakistan', focus: 'online marriage planning, identity review, Nikah documentation and the Sindh registration route' },
  lahore: { name: 'Lahore', country: 'Pakistan', focus: 'online marriage planning, consent, witnesses, documentation and the Punjab registration route' },
  islamabad: { name: 'Islamabad', country: 'Pakistan', focus: 'online marriage coordination, identity consistency and document-use requirements in Islamabad' },
  rawalpindi: { name: 'Rawalpindi', country: 'Pakistan', focus: 'online marriage coordination with Rawalpindi-specific registration and certificate planning' },
  faisalabad: { name: 'Faisalabad', country: 'Pakistan', focus: 'online marriage coordination, Nikahnama accuracy and the relevant Faisalabad registration route' },
  hyderabad: { name: 'Hyderabad', country: 'Pakistan', focus: 'online marriage coordination, Sindh-specific registration planning and document accuracy for Hyderabad couples' },
  'west-bengal': { name: 'West Bengal', country: 'India', focus: 'cross-border online marriage planning, religious ceremony requirements and later civil-document use for couples connected with West Bengal' },
}

export const onlineNikahSlugs = Object.keys(onlineNikahCountries)
export const courtMarriageSlugs = Object.keys(courtMarriageCities)
export const onlineMarriageSlugs = Object.keys(onlineMarriageLocations)

export function getOnlineNikahPage(slug) {
  const place = onlineNikahCountries[slug]
  if (!place) return null
  return {
    type: 'online',
    slug,
    place,
    title: `Online Nikah for Couples in ${place.name} | Nikah House`,
    description: `Arrange an Online Nikah for couples connected with ${place.name}, with consent, witnesses, Nikahnama and document-use requirements reviewed carefully.`,
    eyebrow: `Online Nikah · ${place.name}`,
    heading: `Online Nikah Services For Couples In ${place.name}`,
    intro: `Nikah House coordinates Online Nikah services for couples living in or connected with ${place.name}. The service addresses the Islamic ceremony, identity and consent, witnesses, representation where appropriate, Nikahnama preparation and the separate steps required for civil or official use.`,
    areaServed: place.name,
  }
}

export function getCourtMarriagePage(slug) {
  const place = courtMarriageCities[slug]
  if (!place) return null
  return {
    type: 'court',
    slug,
    place,
    title: `Court Marriage in ${place.name} | Nikah House`,
    description: `Lawyer-assisted Court Marriage services in ${place.name}, Pakistan, covering free consent, Nikah, witnesses, documentation and registration.`,
    eyebrow: `Court Marriage · ${place.name}`,
    heading: `Court Marriage In ${place.name} With Complete Documentation`,
    intro: `Nikah House provides Court Marriage services in ${place.name}, Pakistan, for adult couples marrying through free consent. We coordinate the Nikah, witnesses, Nikahnama particulars, supporting documentation and the route to official registration with the competent Pakistani authority.`,
    areaServed: `${place.name}, Pakistan`,
  }
}

export function getOnlineMarriagePage(slug) {
  const place = onlineMarriageLocations[slug]
  if (!place) return null
  return {
    type: 'online-marriage',
    slug,
    place,
    title: `Online Marriage in ${place.name} | Nikah House`,
    description: `Online Marriage guidance for couples connected with ${place.name}, covering identity, consent, Nikah arrangements, documentation and later official use.`,
    eyebrow: `Online Marriage · ${place.name}`,
    heading: `Online Marriage Services In ${place.name}`,
    intro: `Nikah House provides a dedicated Online Marriage service page for couples connected with ${place.name}. We separate the religious Nikah process from civil registration, certificate requirements and later use of the marriage record, so each stage is planned according to the couple's circumstances.`,
    areaServed: `${place.name}, ${place.country}`,
  }
}
