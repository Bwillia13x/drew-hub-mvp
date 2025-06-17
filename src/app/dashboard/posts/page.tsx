import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Edit, Trash2, Eye, Calendar } from 'lucide-react'
import Link from 'next/link'

// Mock data - in production, fetch from database
const posts = [
  {
    id: '1',
    title: 'Building Modern Web Applications with Next.js 14',
    slug: 'building-modern-web-applications-nextjs-14',
    excerpt: 'Learn how to build scalable web applications using the latest features in Next.js 14, including Server Components and improved App Router.',
    status: 'published',
    publishedAt: '2024-01-15',
    tags: ['Next.js', 'React', 'TypeScript'],
    readTime: '8 min read',
    views: 342,
  },
  {
    id: '2',
    title: 'The Future of TypeScript in 2024',
    slug: 'future-of-typescript-2024',
    excerpt: 'Exploring the latest TypeScript features and what to expect in the coming year for type-safe JavaScript development.',
    status: 'published',
    publishedAt: '2024-01-10',
    tags: ['TypeScript', 'JavaScript', 'Development'],
    readTime: '6 min read',
    views: 289,
  },
  {
    id: '3',
    title: 'Mastering React Server Components',
    slug: 'mastering-react-server-components',
    excerpt: 'A deep dive into React Server Components and how they revolutionize the way we build React applications.',
    status: 'draft',
    publishedAt: null,
    tags: ['React', 'Server Components', 'Performance'],
    readTime: '10 min read',
    views: 0,
  },
  {
    id: '4',
    title: 'Database Design Best Practices',
    slug: 'database-design-best-practices',
    excerpt: 'Essential principles for designing scalable and maintainable database schemas.',
    status: 'scheduled',
    publishedAt: '2024-01-20',
    tags: ['Database', 'SQL', 'Design'],
    readTime: '12 min read',
    views: 0,
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case 'published':
      return <Badge variant="default" className="bg-green-100 text-green-800">Published</Badge>
    case 'draft':
      return <Badge variant="secondary">Draft</Badge>
    case 'scheduled':
      return <Badge variant="default" className="bg-blue-100 text-blue-800">Scheduled</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function PostsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Posts</h1>
          <p className="text-gray-600 mt-1">Manage your blog posts and content</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/posts/new">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Link>
        </Button>
      </div>

      {/* Posts Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-900">Title</th>
                <th className="text-left p-4 font-semibold text-gray-900">Status</th>
                <th className="text-left p-4 font-semibold text-gray-900">Published</th>
                <th className="text-left p-4 font-semibold text-gray-900">Views</th>
                <th className="text-left p-4 font-semibold text-gray-900">Tags</th>
                <th className="text-right p-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4">
                    <div>
                      <h3 className="font-medium text-gray-900 line-clamp-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{post.readTime}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    {getStatusBadge(post.status)}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.publishedAt ?? 'Not published'}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Eye className="h-4 w-4 mr-1" />
                      {post.views.toLocaleString()}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                      >
                        <Link href={`/blog/${post.slug}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                      >
                        <Link href={`/dashboard/posts/${post.id}/edit`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Empty State (if no posts) */}
      {posts.length === 0 && (
        <Card className="p-12 text-center">
          <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Plus className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
          <p className="text-gray-600 mb-4">Get started by creating your first blog post.</p>
          <Button asChild>
            <Link href="/dashboard/posts/new">
              Create your first post
            </Link>
          </Button>
        </Card>
      )}
    </div>
  )
}
