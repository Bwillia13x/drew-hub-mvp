'use client'

import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

interface SearchResult {
  objectID: string
  title: string
  excerpt: string
  slug: string
  tags: string[]
  type: 'post' | 'project'
  url: string
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: Readonly<SearchModalProps>) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Mock search function - replace with Algolia search
  const searchContent = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))

    // Mock results - replace with actual Algolia search
    const mockResults: SearchResult[] = [
      {
        objectID: '1',
        title: 'Building Modern Web Applications with Next.js 14',
        excerpt: 'Learn how to build scalable web applications using the latest features in Next.js 14...',
        slug: 'building-modern-web-applications-nextjs-14',
        tags: ['Next.js', 'React', 'TypeScript'],
        type: 'post' as const,
        url: '/blog/building-modern-web-applications-nextjs-14',
      },
      {
        objectID: '2',
        title: 'E-commerce Platform',
        excerpt: 'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe...',
        slug: 'ecommerce-platform',
        tags: ['Next.js', 'TypeScript', 'Stripe'],
        type: 'project' as const,
        url: '/projects/ecommerce-platform',
      },
    ].filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    setResults(mockResults)
    setIsLoading(false)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchContent(query)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed inset-x-4 top-[10%] mx-auto max-w-2xl">
        <Card className="w-full max-h-[70vh] overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center border-b border-gray-200 px-4 py-3">
            <Search className="h-5 w-5 text-gray-400 mr-3" />
            <Input
              placeholder="Search posts and projects..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-none focus:ring-0 text-lg"
              autoFocus
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="ml-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {isLoading && (
              <div className="p-8 text-center text-gray-500">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                Searching...
              </div>
            )}
            
            {!isLoading && results.length > 0 && (
              <div className="py-2">
                {results.map((result) => (
                  <Link
                    key={result.objectID}
                    href={result.url}
                    onClick={onClose}
                    className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-gray-900 line-clamp-1">
                            {result.title}
                          </h3>
                          <Badge 
                            variant={result.type === 'post' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {result.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                          {result.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {result.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            
            {!isLoading && results.length === 0 && query && (
              <div className="p-8 text-center text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p className="text-lg font-medium mb-2">No results found</p>
                <p className="text-sm">Try different keywords or check your spelling</p>
              </div>
            )}
            
            {!isLoading && !query && (
              <div className="p-8 text-center text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p className="text-lg font-medium mb-2">Search Drew Hub</p>
                <p className="text-sm">Find blog posts, projects, and more</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-4 py-3 text-xs text-gray-500 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>Press <kbd className="kbd">↑</kbd> <kbd className="kbd">↓</kbd> to navigate</span>
              <span>Press <kbd className="kbd">↵</kbd> to select</span>
            </div>
            <span>Press <kbd className="kbd">ESC</kbd> to close</span>
          </div>
        </Card>
      </div>
    </div>
  )
}

// Search Button Component
export function SearchButton() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setIsOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setIsOpen(true)}
        className="relative w-full max-w-sm text-left text-gray-500 bg-white hover:bg-gray-50"
      >
        <Search className="h-4 w-4 mr-2" />
        <span>Search...</span>
        <kbd className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
          ⌘K
        </kbd>
      </Button>
      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
