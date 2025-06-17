import { NextRequest, NextResponse } from 'next/server'

// Mock data for MVP deployment
const mockPosts = [
  {
    id: '1',
    slug: 'getting-started-with-nextjs-14',
    title: 'Getting Started with Next.js 14',
    content: 'Content about Next.js 14...',
    excerpt: 'Learn the basics of Next.js 14 and its new features.',
    tags: ['nextjs', 'react', 'javascript'],
    status: 'PUBLISHED',
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString()
  },
  {
    id: '2',
    slug: 'building-saas-with-typescript-prisma',
    title: 'Building SaaS with TypeScript and Prisma',
    content: 'Content about building SaaS applications...',
    excerpt: 'A comprehensive guide to building SaaS applications with modern tools.',
    tags: ['typescript', 'prisma', 'saas'],
    status: 'PUBLISHED',
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString()
  },
  {
    id: '3',
    slug: 'future-of-web-development-2024',
    title: 'The Future of Web Development in 2024',
    content: 'Content about web development trends...',
    excerpt: 'Exploring the latest trends and technologies shaping web development.',
    tags: ['webdev', 'trends', '2024'],
    status: 'PUBLISHED',
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString()
  }
];

export async function GET() {
  try {
    const posts = mockPosts.filter(post => post.published);
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, content, excerpt, slug, published, tags } = body

    // For MVP, just return a mock response
    const newPost = {
      id: String(mockPosts.length + 1),
      slug: slug || title.toLowerCase().replace(/\s+/g, '-'),
      title,
      content,
      excerpt,
      tags: Array.isArray(tags) ? tags : [],
      status: published ? 'PUBLISHED' : 'DRAFT',
      published: published ?? false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: published ? new Date().toISOString() : new Date().toISOString()
    }

    // Add to mock data (this won't persist between requests in MVP)
    mockPosts.push(newPost)

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
