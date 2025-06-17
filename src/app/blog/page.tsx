import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// This would typically fetch from your database
async function getBlogPosts() {
  // Mock data for now
  return [
    {
      id: '1',
      slug: 'nextjs-14-getting-started',
      title: 'Getting Started with Next.js 14',
      description: 'Learn how to build modern web applications with the latest features in Next.js 14, including the new App Router and server components.',
      publishedAt: new Date('2024-03-15'),
      tags: ['Next.js', 'React', 'TypeScript'],
      views: 1250,
      readingTime: 5,
    },
    {
      id: '2', 
      slug: 'typescript-best-practices',
      title: 'TypeScript Best Practices for 2024',
      description: 'Discover essential TypeScript patterns and practices for better code quality, maintainability, and developer experience.',
      publishedAt: new Date('2024-03-10'),
      tags: ['TypeScript', 'Best Practices', 'Development'],
      views: 890,
      readingTime: 7,
    },
    {
      id: '3',
      slug: 'scalable-apis-nodejs',
      title: 'Building Scalable APIs with Node.js',
      description: 'Best practices for designing and implementing scalable REST APIs using Node.js, Express, and modern database technologies.',
      publishedAt: new Date('2024-03-05'),
      tags: ['Node.js', 'API', 'Backend'],
      views: 670,
      readingTime: 12,
    }
  ];
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="container py-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-retro text-4xl tracking-tight lg:text-5xl text-emerald-500">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Thoughts on web development, technology, and everything in between.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
            <CardHeader>
              <div className="space-y-2">
                <CardTitle className="group-hover:text-emerald-500 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <time dateTime={post.publishedAt.toISOString()}>
                  {formatDate(post.publishedAt)}
                </time>
                <span>{post.readingTime} min read</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
