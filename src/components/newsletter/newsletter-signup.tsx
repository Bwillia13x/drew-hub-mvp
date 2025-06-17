'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Email is required')
      return
    }

    setStatus('loading')
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thanks for subscribing! Check your email for a welcome message.')
        setEmail('')
        setName('')
      } else {
        setStatus('error')
        setMessage(data.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <Card className="p-6 bg-green-50 border-green-200">
        <div className="flex items-center gap-3">
          <CheckCircle className="h-6 w-6 text-green-600" />
          <div>
            <h3 className="font-semibold text-green-900">Successfully subscribed!</h3>
            <p className="text-sm text-green-700">{message}</p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="h-6 w-6 text-blue-600" />
        <div>
          <h3 className="font-semibold text-gray-900">Subscribe to Newsletter</h3>
          <p className="text-sm text-gray-600">
            Get the latest blog posts and project updates delivered to your inbox.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === 'loading'}
          />
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
          />
        </div>
        
        {status === 'error' && (
          <div className="flex items-center gap-2 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" />
            {message}
          </div>
        )}

        <Button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full sm:w-auto"
        >
          {status === 'loading' ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Subscribing...
            </>
          ) : (
            'Subscribe'
          )}
        </Button>
      </form>

      <p className="text-xs text-gray-500 mt-3">
        No spam, unsubscribe at any time. We respect your privacy.
      </p>
    </Card>
  )
}

// Inline newsletter signup (for blog posts, etc.)
export function InlineNewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Email is required')
      return
    }

    setStatus('loading')
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thanks for subscribing!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error ?? 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-green-600">
        <CheckCircle className="h-5 w-5" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading'}
        className="flex-1"
      />
      <Button 
        type="submit" 
        disabled={status === 'loading'}
        size="sm"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </Button>
      {status === 'error' && (
        <div className="text-xs text-red-600 mt-1">{message}</div>
      )}
    </form>
  )
}
