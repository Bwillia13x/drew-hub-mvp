import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Edit, Trash2, Eye, GripVertical, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Mock data - in production, fetch from database
const projects = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe for payment processing.',
    image: '/api/placeholder/400/300',
    status: 'completed',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
    order: 1,
    createdAt: '2024-01-01',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: '/api/placeholder/400/300',
    status: 'in-progress',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com/example/taskapp',
    liveUrl: null,
    featured: false,
    order: 2,
    createdAt: '2024-01-10',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with forecasts, maps, and detailed weather analytics.',
    image: '/api/placeholder/400/300',
    status: 'completed',
    technologies: ['Vue.js', 'Tailwind CSS', 'OpenWeather API'],
    githubUrl: 'https://github.com/example/weather',
    liveUrl: 'https://weather-dashboard-demo.vercel.app',
    featured: true,
    order: 3,
    createdAt: '2023-12-15',
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my work and skills.',
    image: '/api/placeholder/400/300',
    status: 'planning',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS'],
    githubUrl: null,
    liveUrl: null,
    featured: false,
    order: 4,
    createdAt: '2024-01-15',
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case 'completed':
      return <Badge variant="default" className="bg-green-100 text-green-800">Completed</Badge>
    case 'in-progress':
      return <Badge variant="default" className="bg-blue-100 text-blue-800">In Progress</Badge>
    case 'planning':
      return <Badge variant="secondary">Planning</Badge>
    case 'on-hold':
      return <Badge variant="default" className="bg-yellow-100 text-yellow-800">On Hold</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-1">Manage your portfolio projects</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/projects/new">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Link>
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            {/* Drag Handle */}
            <div className="p-2 bg-gray-50 border-b flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <GripVertical className="h-4 w-4 mr-2 cursor-move" />
                Order: {project.order}
              </div>
              {project.featured && (
                <Badge variant="default" className="bg-purple-100 text-purple-800">
                  Featured
                </Badge>
              )}
            </div>

            {/* Project Image */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                  {project.title}
                </h3>
                {getStatusBadge(project.status)}
              </div>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>

              {/* Links */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <Link href={project.githubUrl} target="_blank">
                        GitHub
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live
                      </Link>
                    </Button>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                  >
                    <Link href={`/projects/${project.id}`}>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                  >
                    <Link href={`/dashboard/projects/${project.id}/edit`}>
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
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <Card className="p-12 text-center">
          <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Plus className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
          <p className="text-gray-600 mb-4">Start building your portfolio by adding your first project.</p>
          <Button asChild>
            <Link href="/dashboard/projects/new">
              Add your first project
            </Link>
          </Button>
        </Card>
      )}

      {/* Drag and Drop Instructions */}
      <Card className="p-4 bg-blue-50 border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Tip:</strong> Use the drag handle (⋮⋮) to reorder projects. Featured projects will appear first on your portfolio page.
        </p>
      </Card>
    </div>
  )
}
