import { NextResponse } from 'next/server'
import { generateRobotsTxt } from '@/lib/feed/sitemap'

export async function GET() {
  try {
    const robots = await generateRobotsTxt()
    
    return new NextResponse(robots, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    })
  } catch (error) {
    console.error('Error generating robots.txt:', error)
    return NextResponse.json(
      { error: 'Failed to generate robots.txt' },
      { status: 500 }
    )
  }
}
