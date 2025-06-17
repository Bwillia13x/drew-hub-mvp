'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-retro text-2xl text-emerald-500 animate-glow">
              Drew Hub
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/blog"
              className="transition-colors hover:text-gray-100 text-gray-300"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="transition-colors hover:text-gray-100 text-gray-300"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-gray-100 text-gray-300"
            >
              About
            </Link>
            <Link
              href="/product"
              className="transition-colors hover:text-gray-100 text-gray-300"
            >
              Product
            </Link>
          </nav>
        </div>
        <Button
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search button removed for MVP */}
          </div>
          <nav className="flex items-center">
            <Button asChild variant="ghost" size="sm">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </nav>
        </div>
      </div>
      {isMenuOpen && (
        <div className="border-t border-gray-700 md:hidden">
          <nav className="flex flex-col space-y-3 p-4">
            <Link
              href="/blog"
              className="transition-colors hover:text-gray-100 text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/projects" 
              className="transition-colors hover:text-gray-100 text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-gray-100 text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/product"
              className="transition-colors hover:text-gray-100 text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/dashboard"
              className="transition-colors hover:text-gray-100 text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
