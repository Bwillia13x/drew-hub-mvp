import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const post = await db.post.findUnique({
      where: {
        id: id,
      },
      include: {
        tags: true,
      },
    })

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
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { title, content, excerpt, slug, published, tags } = body

    // Check if post exists and user owns it
    const existingPost = await db.post.findUnique({
      where: { id: id },
    })

    if (!existingPost) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    if (existingPost.authorId !== userId) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      )
    }

    // Update post
    const updatedPost = await db.post.update({
      where: { id: id },
      data: {
        title,
        content,
        excerpt,
        slug,
        published: published ?? existingPost.published,
        publishedAt: published && !existingPost.published ? new Date() : existingPost.publishedAt,
        updatedAt: new Date(),
        tags: {
          set: [], // Clear existing tags
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

    return NextResponse.json(updatedPost)
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
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Check if post exists and user owns it
    const existingPost = await db.post.findUnique({
      where: { id: id },
    })

    if (!existingPost) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    if (existingPost.authorId !== userId) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      )
    }

    // Delete post
    await db.post.delete({
      where: { id: id },
    })

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
