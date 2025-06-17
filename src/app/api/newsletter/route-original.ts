import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { resend } from '@/lib/resend'

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
    const existingSubscriber = await db.subscriber.findUnique({
      where: { email },
    })

    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      )
    }

    // Add to database
    const subscriber = await db.subscriber.create({
      data: {
        email,
        name: name ?? null,
        subscribed: true,
        subscribedAt: new Date(),
      },
    })

    // Send welcome email
    try {
      await resend.emails.send({
        from: 'Drew Hub <noreply@drewhub.com>',
        to: email,
        subject: 'Welcome to Drew Hub Newsletter!',
        html: `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
            <h1 style="color: #2563eb; margin-bottom: 20px;">Welcome to Drew Hub!</h1>
            <p style="margin-bottom: 16px;">Hi${name ? ` ${name}` : ''},</p>
            <p style="margin-bottom: 16px;">
              Thank you for subscribing to my newsletter! You'll receive updates about new blog posts, 
              projects, and insights about web development and technology.
            </p>
            <p style="margin-bottom: 16px;">
              Stay tuned for valuable content and tutorials that will help you grow as a developer.
            </p>
            <p style="margin-bottom: 16px;">
              Best regards,<br>
              Drew
            </p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="font-size: 12px; color: #6b7280;">
              You can unsubscribe at any time by clicking 
              <a href="${process.env.NEXT_PUBLIC_BASE_URL}/unsubscribe?token=${subscriber.id}" 
                 style="color: #2563eb;">here</a>.
            </p>
          </div>
        `,
      })
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError)
      // Don't fail the subscription if email fails
    }

    return NextResponse.json(
      { 
        message: 'Successfully subscribed to newsletter!',
        subscriber: {
          email: subscriber.email,
          name: subscriber.name,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Return subscriber count for public stats
    const count = await db.subscriber.count({
      where: {
        subscribed: true,
      },
    })

    return NextResponse.json({ count })
  } catch (error) {
    console.error('Error fetching subscriber count:', error)
    return NextResponse.json(
      { error: 'Failed to fetch subscriber count' },
      { status: 500 }
    )
  }
}
