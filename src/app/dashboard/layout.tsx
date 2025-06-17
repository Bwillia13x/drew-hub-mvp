import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { 
  LayoutDashboard, 
  FileText, 
  FolderOpen, 
  Settings,
  User
} from 'lucide-react'

export default async function DashboardLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Posts', href: '/dashboard/posts', icon: FileText },
    { name: 'Projects', href: '/dashboard/projects', icon: FolderOpen },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm border-r">
          <div className="p-6">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Drew Hub
            </Link>
          </div>
          <nav className="mt-8 px-4">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <header className="bg-white shadow-sm border-b">
            <div className="px-8 py-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                <div className="flex items-center space-x-4">
                  <User className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            </div>
          </header>
          <main className="p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
