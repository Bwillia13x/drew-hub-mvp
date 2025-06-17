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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString()
  }
];

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const post = mockPosts.find(p => p.id === id || p.slug === id);

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // For MVP, just return success without actual updating
    const post = mockPosts.find(p => p.id === id);
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      ...post,
      updatedAt: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error updating post:', error)
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // For MVP, just return success without actual deletion
    const post = mockPosts.find(p => p.id === id);
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: 'Post deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    )
  }
}
