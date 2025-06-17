import { Feed } from 'feed'

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://drewhub.com'
const SITE_NAME = 'Drew Hub'
const SITE_DESCRIPTION = 'A modern blog and portfolio showcasing web development projects and insights'

// Type definitions
interface Tag {
  name: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  slug: string;
  publishedAt: Date | null;
  tags: Tag[];
}

export async function generateRSSFeed(): Promise<string> {
  const feed = new Feed({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    id: SITE_URL,
    link: SITE_URL,
    language: 'en',
    image: `${SITE_URL}/logo.png`,
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Drew Hub`,
    updated: new Date(),
    generator: 'Drew Hub RSS Generator',
    feedLinks: {
      rss2: `${SITE_URL}/feed.xml`,
      json: `${SITE_URL}/feed.json`,
      atom: `${SITE_URL}/atom.xml`,
    },
    author: {
      name: 'Drew',
      email: 'contact@drewhub.com',
      link: SITE_URL,
    },
  })

  try {
    // Use dynamic import to avoid build-time database dependency
    const { db } = await import('@/lib/db')
    
    const posts = await db.post.findMany({
      where: {
        published: true,
        publishedAt: {
          not: null,
        },
      },
      orderBy: {
        publishedAt: 'desc',
      },
      take: 20, // Limit to latest 20 posts
      include: {
        tags: true,
      },
    })

    posts.forEach((post: Post) => {
      if (post.publishedAt) {
        feed.addItem({
          title: post.title,
          id: `${SITE_URL}/blog/${post.slug}`,
          link: `${SITE_URL}/blog/${post.slug}`,
          description: post.excerpt ?? '',
          content: post.content,
          author: [
            {
              name: 'Drew',
              email: 'contact@drewhub.com',
              link: SITE_URL,
            },
          ],
          date: post.publishedAt,
          category: post.tags.map((tag: Tag) => ({ name: tag.name })),
        })
      }
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
  }

  return feed.rss2()
}

export async function generateAtomFeed(): Promise<string> {
  const feed = await createBaseFeed()
  return feed.atom1()
}

export async function generateJSONFeed(): Promise<string> {
  const feed = await createBaseFeed()
  return feed.json1()
}

async function createBaseFeed() {
  const feed = new Feed({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    id: SITE_URL,
    link: SITE_URL,
    language: 'en',
    image: `${SITE_URL}/logo.png`,
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Drew Hub`,
    updated: new Date(),
    generator: 'Drew Hub Feed Generator',
    feedLinks: {
      rss2: `${SITE_URL}/feed.xml`,
      json: `${SITE_URL}/feed.json`,
      atom: `${SITE_URL}/atom.xml`,
    },
    author: {
      name: 'Drew',
      email: 'contact@drewhub.com',
      link: SITE_URL,
    },
  })

  try {
    // Use dynamic import to avoid build-time database dependency
    const { db } = await import('@/lib/db')
    
    const posts = await db.post.findMany({
      where: {
        published: true,
        publishedAt: {
          not: null,
        },
      },
      orderBy: {
        publishedAt: 'desc',
      },
      take: 20,
      include: {
        tags: true,
      },
    })

    posts.forEach((post: Post) => {
      if (post.publishedAt) {
        feed.addItem({
          title: post.title,
          id: `${SITE_URL}/blog/${post.slug}`,
          link: `${SITE_URL}/blog/${post.slug}`,
          description: post.excerpt ?? '',
          content: post.content,
          author: [
            {
              name: 'Drew',
              email: 'contact@drewhub.com',
              link: SITE_URL,
            },
          ],
          date: post.publishedAt,
          category: post.tags.map((tag: Tag) => ({ name: tag.name })),
        })
      }
    })
  } catch (error) {
    console.error('Error generating feed:', error)
  }

  return feed
}
