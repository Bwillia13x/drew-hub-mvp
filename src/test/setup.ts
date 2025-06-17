import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import React from 'react'

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => {
    return React.createElement('a', { href, ...props }, children)
  },
}))

// Mock Clerk
vi.mock('@clerk/nextjs', () => ({
  auth: () => ({ userId: 'test-user-id' }),
  ClerkProvider: ({ children }: { children: React.ReactNode }) => children,
  useUser: () => ({
    user: { id: 'test-user-id', emailAddresses: [{ emailAddress: 'test@example.com' }] },
    isLoaded: true,
  }),
}))

// Mock environment variables
process.env.NEXT_PUBLIC_BASE_URL = 'http://localhost:3000'
