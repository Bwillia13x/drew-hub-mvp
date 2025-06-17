'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SearchButton } from '@/components/search/search-modal';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
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
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Projects
            </Link>
            <Link
              href="/product"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Product
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
          </nav>
        </div>

        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <SearchButton />
          </div>
          <nav className="flex items-center">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                Dashboard
              </Button>
            </Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute left-0 top-14 w-full border-b bg-background md:hidden">
            <nav className="container flex flex-col space-y-3 py-4">
              <Link
                href="/blog"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/projects"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/product"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
