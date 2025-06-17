import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from '@/components/ui/button'

describe('Button Component', () => {
  it('renders with default variant', () => {
    const { getByRole } = render(<Button>Click me</Button>)
    const button = getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary')
  })

  it('renders with secondary variant', () => {
    const { getByRole } = render(<Button variant="secondary">Secondary</Button>)
    const button = getByRole('button', { name: /secondary/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-secondary')
  })

  it('renders with outline variant', () => {
    const { getByRole } = render(<Button variant="outline">Outline</Button>)
    const button = getByRole('button', { name: /outline/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('border')
  })

  it('renders with ghost variant', () => {
    const { getByRole } = render(<Button variant="ghost">Ghost</Button>)
    const button = getByRole('button', { name: /ghost/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('hover:bg-accent')
  })

  it('can be disabled', () => {
    const { getByRole } = render(<Button disabled>Disabled</Button>)
    const button = getByRole('button', { name: /disabled/i })
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-50')
  })
})
