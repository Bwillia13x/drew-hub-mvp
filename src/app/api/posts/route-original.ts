import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const posts = await db.post.findMany({
      where: {
        published: true,
      },
      orderBy: {
        publishedAt: 'desc',
      },
      include: {
        tags: true,
      },
    })

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
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { title, content, excerpt, slug, published, tags } = body

    // Validate required fields
    if (!title || !content || !slug) {
      return NextResponse.json(
        { error: 'Title, content, and slug are required' },
        { status: 400 }
      )
    }

    // Create post with tags
    const post = await db.post.create({
      data: {
        title,
        content,
        excerpt,
        slug,
        published: published ?? false,
        authorId: userId,
        publishedAt: published ? new Date() : null,
        tags: {
          connectOrCreate: tags?.map((tag: string) => ({
            where: { name: tag },
            create: { name: tag },
          })) ?? [],
        },
      },
      include: {
        tags: true,
      },
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
