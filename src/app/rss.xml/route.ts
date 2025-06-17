import { NextResponse } from 'next/server'
import { generateRSSFeed } from '@/lib/feed/rss'

export async function GET() {
  try {
    const feed = await generateRSSFeed()
    
    return new NextResponse(feed, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    return NextResponse.json(
      { error: 'Failed to generate RSS feed' },
      { status: 500 }
    )
  }
}
