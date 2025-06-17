import Link from 'next/link';
import { GitHubLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Mail } from 'lucide-react';
import { InlineNewsletterSignup } from '@/components/newsletter/newsletter-signup';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      {/* Newsletter Section */}
      <div className="border-b">
        <div className="container py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight">Stay updated</h3>
            <p className="mt-2 text-lg text-muted-foreground">
              Get the latest blog posts and project updates delivered to your inbox.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-full max-w-md">
                <InlineNewsletterSignup />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="text-xl font-bold text-emerald-500">
              Drew Hub
            </Link>
            <p className="text-sm text-muted-foreground">
              A modern blog and portfolio showcasing web development projects and insights.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-muted-foreground hover:text-foreground transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/rss.xml" className="text-muted-foreground hover:text-foreground transition-colors">
                  RSS Feed
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex items-center space-x-3">
              <Link
                href="https://github.com/drewpayment"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <GitHubLogoIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/drewpayment"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <TwitterLogoIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/in/drewpayment"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <LinkedInLogoIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:drew@drewhub.dev"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Drew Hub. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
