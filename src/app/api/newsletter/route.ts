import { NextRequest, NextResponse } from 'next/server'

// Mock newsletter storage for MVP
const mockSubscribers: { email: string; name?: string; subscribedAt: string }[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    // Validate email
    if (!email?.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Check if already subscribed
    const existingSubscriber = mockSubscribers.find(sub => sub.email === email)

    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      )
    }

    // Add to mock storage
    const newSubscriber = {
      email,
      name: name ?? null,
      subscribedAt: new Date().toISOString()
    }

    mockSubscribers.push(newSubscriber)

    // For MVP, we'll just log success instead of sending emails
    console.log('Newsletter signup:', newSubscriber)

    return NextResponse.json(
      { 
        message: 'Successfully subscribed to newsletter!',
        subscriber: newSubscriber
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // For MVP, return count of subscribers
    return NextResponse.json({
      count: mockSubscribers.length,
      message: 'Newsletter stats retrieved successfully'
    })
  } catch (error) {
    console.error('Error fetching newsletter stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch newsletter stats' },
      { status: 500 }
    )
  }
}
