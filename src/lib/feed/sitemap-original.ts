import { db } from '@/lib/db'

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://drewhub.com'

interface SitemapUrl {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

// Type definitions for database entities
interface Post {
  slug: string;
  updatedAt: Date;
  publishedAt: Date | null;
}

interface Tag {
  slug: string;
  name: string;
  updatedAt: Date;
}

interface Project {
  slug: string;
  updatedAt: Date;
}

export async function generateSitemap(): Promise<string> {
  const urls: SitemapUrl[] = []

  // Static pages
  const staticPages = [
    {
      url: '',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: '/blog',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: '/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/product',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  urls.push(...staticPages)

  try {
    // Dynamic blog posts
    const posts = await db.post.findMany({
      where: {
        published: true,
      },
      select: {
        slug: true,
        updatedAt: true,
        publishedAt: true,
      },
      orderBy: {
        publishedAt: 'desc',
      },
    })

    const postUrls = posts.map((post: Post) => ({
      url: `/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    urls.push(...postUrls)

    // Get unique tags
    const tags = await db.tag.findMany({
      select: {
        name: true,
      },
    })

    const tagUrls = tags.map((tag: Tag) => ({
      url: `/blog/tags/${encodeURIComponent(tag.name.toLowerCase())}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    }))

    urls.push(...tagUrls)

    // Dynamic projects
    const projects = await db.project.findMany({
      select: {
        slug: true,
        updatedAt: true,
      },
      orderBy: {
        order: 'asc',
      },
    })

    const projectUrls = projects.map((project: Project) => ({
      url: `/projects/${project.slug}`,
      lastModified: project.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    urls.push(...projectUrls)
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ url, lastModified, changeFrequency, priority }) => `
  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${lastModified.toISOString()}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`

  return sitemap
}

export async function generateRobotsTxt(): Promise<string> {
  return `User-agent: *
Allow: /
Disallow: /dashboard/
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

Sitemap: ${SITE_URL}/sitemap.xml
`
}
