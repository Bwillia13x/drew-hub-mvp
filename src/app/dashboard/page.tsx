import { Card } from '@/components/ui/card'
import { FileText, FolderOpen, Users, TrendingUp } from 'lucide-react'

// Mock data - in production, fetch from database
const stats = [
  {
    title: 'Total Posts',
    value: '12',
    change: '+2 this month',
    icon: FileText,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Total Projects',
    value: '8',
    change: '+1 this month',
    icon: FolderOpen,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Page Views',
    value: '2,847',
    change: '+12% from last month',
    icon: TrendingUp,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Newsletter Subscribers',
    value: '149',
    change: '+7 this week',
    icon: Users,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
]

const recentPosts = [
  {
    title: 'Building Modern Web Applications with Next.js 14',
    date: '2024-01-15',
    status: 'Published',
    views: 342,
  },
  {
    title: 'The Future of TypeScript in 2024',
    date: '2024-01-10',
    status: 'Published',
    views: 289,
  },
  {
    title: 'Mastering React Server Components',
    date: '2024-01-08',
    status: 'Draft',
    views: 0,
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Posts */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.title} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 line-clamp-1">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    post.status === 'Published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {post.status}
                  </span>
                  <span className="text-xs text-gray-500">{post.views} views</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-sm font-medium text-gray-900">Create New Post</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <FolderOpen className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-sm font-medium text-gray-900">Add New Project</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-sm font-medium text-gray-900">View Analytics</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}
