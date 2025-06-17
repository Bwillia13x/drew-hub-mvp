/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  exclude: ['/dashboard/*', '/api/*'],
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/api'],
      },
    ],
  },
}
