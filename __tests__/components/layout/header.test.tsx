import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Header } from '@/components/layout/header'

describe('Header Component', () => {
  it('renders the site logo', () => {
    const { getByText } = render(<Header />)
    const logo = getByText('Drew Hub')
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    const { getByRole } = render(<Header />)
    
    expect(getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(getByRole('link', { name: /projects/i })).toBeInTheDocument()
    expect(getByRole('link', { name: /product/i })).toBeInTheDocument()
    expect(getByRole('link', { name: /about/i })).toBeInTheDocument()
  })

  it('renders search button', () => {
    const { getByText } = render(<Header />)
    const searchButton = getByText('Search...')
    expect(searchButton).toBeInTheDocument()
  })

  it('renders dashboard link', () => {
    const { getByRole } = render(<Header />)
    const dashboardLink = getByRole('link', { name: /dashboard/i })
    expect(dashboardLink).toBeInTheDocument()
  })

  it('has mobile menu toggle', () => {
    const { getByRole } = render(<Header />)
    const menuToggle = getByRole('button', { name: /toggle menu/i })
    expect(menuToggle).toBeInTheDocument()
  })
})
