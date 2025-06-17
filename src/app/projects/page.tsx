import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// This would typically fetch from your database
async function getProjects() {
  return [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, product management, cart functionality, and payment processing.',
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      repo: 'https://github.com/drewpayment/ecommerce-platform',
      live: 'https://ecommerce-demo.drewhub.dev',
      featured: true,
    },
    {
      id: '2',
      title: 'Task Management SaaS',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
      stack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      repo: 'https://github.com/drewpayment/task-manager',
      live: 'https://tasks.drewhub.dev',
      featured: true,
    },
    {
      id: '3',
      title: 'Weather Analytics Dashboard',
      description: 'Real-time weather dashboard with historical data analysis, interactive charts, and location-based weather forecasting using external APIs.',
      stack: ['Vue.js', 'Chart.js', 'Weather API', 'Vuetify'],
      repo: 'https://github.com/drewpayment/weather-dashboard',
      live: 'https://weather.drewhub.dev',
      featured: false,
    },
    {
      id: '4',
      title: 'AI Content Generator',
      description: 'An AI-powered content generation tool that helps content creators generate blog posts, social media content, and marketing copy using OpenAI GPT.',
      stack: ['Next.js', 'OpenAI API', 'Prisma', 'Supabase'],
      repo: 'https://github.com/drewpayment/ai-content-generator',
      featured: false,
    }
  ];
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="container py-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-retro text-4xl tracking-tight lg:text-5xl text-emerald-500">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A showcase of my recent work and personal projects.
          </p>
        </div>
      </div>
      <hr className="my-8" />

      {/* Featured Projects */}
      <section className="mb-12">
        <h2 className="font-retro text-2xl mb-6 text-emerald-500">Featured Projects</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    {project.repo && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                          <GitHubLogoIcon className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {project.live && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="font-retro text-2xl mb-6 text-emerald-500">Other Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="group-hover:text-emerald-500 transition-colors text-lg">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-1">
                    {project.repo && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                          <GitHubLogoIcon className="h-3 w-3" />
                        </Link>
                      </Button>
                    )}
                    {project.live && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
