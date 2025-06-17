const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'

interface SitemapUrl {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

// Mock data for MVP sitemap generation
const mockPosts = [
  {
    slug: 'getting-started-with-nextjs-14',
    updatedAt: new Date(),
    publishedAt: new Date()
  },
  {
    slug: 'building-saas-with-typescript-prisma',
    updatedAt: new Date(),
    publishedAt: new Date()
  },
  {
    slug: 'future-of-web-development-2024',
    updatedAt: new Date(),
    publishedAt: new Date()
  }
];

const mockProjects = [
  {
    slug: 'ai-powered-content-generator',
    updatedAt: new Date()
  },
  {
    slug: 'drew-hub-saas-platform',
    updatedAt: new Date()
  },
  {
    slug: 'ecommerce-dashboard-analytics',
    updatedAt: new Date()
  }
];

const mockTags = [
  {
    slug: 'nextjs',
    name: 'Next.js',
    updatedAt: new Date()
  },
  {
    slug: 'react',
    name: 'React',
    updatedAt: new Date()
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    updatedAt: new Date()
  }
];

export async function generateSitemap(): Promise<string> {
  const urls: SitemapUrl[] = []

  // Static pages
  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    { url: '/projects', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/product', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  staticPages.forEach(page => {
    urls.push({
      url: `${SITE_URL}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })
  })

  // Blog posts
  mockPosts.forEach(post => {
    urls.push({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Projects
  mockProjects.forEach(project => {
    urls.push({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified: project.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  // Tag pages
  mockTags.forEach(tag => {
    urls.push({
      url: `${SITE_URL}/blog/tags/${tag.slug}`,
      lastModified: tag.updatedAt,
      changeFrequency: 'weekly',
      priority: 0.5,
    })
  })

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ url, lastModified, changeFrequency, priority }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastModified.toISOString()}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return sitemap
}

// Generate robots.txt content
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`
}

// Type for Next.js sitemap generation
export interface MetadataRoute {
  url: string
  lastModified?: string | Date
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export async function generateSitemapRoutes(): Promise<MetadataRoute[]> {
  const routes: MetadataRoute[] = []

  // Static pages
  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    { url: '/projects', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/product', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  staticPages.forEach(page => {
    routes.push({
      url: `${SITE_URL}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })
  })

  // Blog posts
  mockPosts.forEach(post => {
    routes.push({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Projects
  mockProjects.forEach(project => {
    routes.push({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified: project.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  return routes
}
