import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="font-retro text-4xl tracking-tight lg:text-5xl text-emerald-500">
            About Drew
          </h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Developer passionate about building modern web applications
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Background</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                With over 5 years of experience in web development, I specialize in building 
                scalable applications using modern technologies like React, Next.js, and Node.js.
              </p>
              <p className="text-muted-foreground">
                I&apos;m passionate about clean code, performance optimization, and creating 
                exceptional user experiences that solve real-world problems.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Skills & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold">Frontend</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Vue.js</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="mb-2 font-semibold">Backend</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">Prisma</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="mb-2 font-semibold">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">Vercel</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">VS Code</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Current Focus</CardTitle>
            <CardDescription>What I&apos;m working on right now</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2 text-muted-foreground">
              <li>• Building scalable SaaS applications with Next.js 14 and React Server Components</li>
              <li>• Exploring AI integration in web applications using OpenAI and other LLMs</li>
              <li>• Writing technical content about modern web development practices</li>
              <li>• Contributing to open-source projects in the React ecosystem</li>
              <li>• Mentoring junior developers and sharing knowledge through blog posts</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Let&apos;s Connect</CardTitle>
            <CardDescription>Feel free to reach out if you&apos;d like to collaborate</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              I&apos;m always interested in discussing new projects, technical challenges, 
              or opportunities to collaborate. Whether you&apos;re looking for technical advice, 
              want to discuss a project, or just want to connect with fellow developers, 
              I&apos;d love to hear from you.
            </p>
            <p className="mt-4 text-muted-foreground">
              You can reach me through the contact form, social media links in the footer, 
              or by email directly.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
