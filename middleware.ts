import { NextResponse, type NextRequest } from 'next/server'

// Simplified middleware for MVP - no authentication required
export function middleware(request: NextRequest) {
  // For MVP, we'll allow all routes without authentication
  // In production, you would implement proper authentication here
  
  // Add CORS headers for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const response = NextResponse.next()
    
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
