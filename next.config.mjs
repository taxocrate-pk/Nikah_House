/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/online-nikah', destination: '/online-nikah/pakistan', permanent: true },
      { source: '/online-nikah-service-in-pakistan', destination: '/online-nikah/pakistan', permanent: true },
      { source: '/online-nikah-online-marriage-in-islam-pakistan', destination: '/online-nikah/pakistan', permanent: true },
      { source: '/online-nikah-in-islam-a-guide-islamic-guidelines-for-online-nikah', destination: '/online-nikah/pakistan', permanent: true },
      { source: '/online-nikah-in-islam-understanding-the-islamic-way', destination: '/online-nikah/pakistan', permanent: true },
      { source: '/understanding-online-nikah-in-pakistan', destination: '/online-nikah/pakistan', permanent: true },
      { source: '/online-marriage-in-islam-online-marriage-online-nikah-in-pakistan', destination: '/online-marriage/karachi', permanent: true },
      { source: '/online-nikah-obtaining-nadra-certificate', destination: '/online-nikah/pakistan', permanent: true },
      { source: '/court-marriage-in-pakistan-benefits-of-court-marriage', destination: '/court-marriage/karachi', permanent: true },
      // Repointed 7 Nov 2026: this URL held position 9.0 with 77 impressions for the
      // Nikah Khawan cluster. /online-nikah/karachi does not target that phrase, so it
      // now goes to the dedicated page instead.
      { source: '/nikah-khawan-imam-qazi-services-in-karachi-rawalpindi-islamabad-lahore-peshawar', destination: '/nikah-khawan', permanent: true },
      { source: '/nikah-nama-in-pakistan-from-ritual-to-legal-document', destination: '/online-nikah/pakistan', permanent: true },
      { source: '/family-law-family-lawyers-experienced', destination: '/about', permanent: true },
      { source: '/court-marriage', destination: '/court-marriage/karachi', permanent: true },
      { source: '/online-marriage', destination: '/online-marriage/karachi', permanent: true },
    ];
  },
}

export default nextConfig
