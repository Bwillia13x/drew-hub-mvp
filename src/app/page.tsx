import Link from 'next/link';
import { ArrowRight, Code, Rocket, Zap, Star, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="space-y-10 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Badge variant="emerald" className="mb-4">
            ✨ Full Stack Developer
          </Badge>
          <h1 className="font-retro text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-emerald-500 animate-glow">
            Drew Hub
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Building modern web applications with{' '}
            <span className="text-emerald-500 font-semibold">Next.js</span>,{' '}
            <span className="text-emerald-500 font-semibold">React</span>, and cutting-edge technologies.
            Join me on the journey of creating amazing digital experiences.
          </p>
          <div className="flex gap-4 mt-8">
            <Button asChild size="lg" className="glow-effect">
              <Link href="/blog">
                Read Blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-emerald-500" />
              <span>50+ Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-emerald-500" />
              <span>20+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-emerald-500" />
              <span>10k+ Readers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-retro text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-emerald-500">
            What I Do
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Passionate about creating exceptional digital experiences through clean code, 
            innovative solutions, and continuous learning.
          </p>
        </div>
        
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card className="relative overflow-hidden group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code className="h-6 w-6 text-emerald-500" />
                <CardTitle>Full Stack Development</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Building robust web applications with React, Next.js, Node.js, and modern databases.
                From concept to deployment, I handle the entire development lifecycle.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Rocket className="h-6 w-6 text-emerald-500" />
                <CardTitle>Technical Writing</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Sharing knowledge through in-depth tutorials, best practices, and insights 
                on modern web development technologies and methodologies.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-emerald-500" />
                <CardTitle>Performance Optimization</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Optimizing applications for speed, accessibility, and user experience. 
                Making the web faster, one optimization at a time.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-retro text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-emerald-500">
            Ready to Build?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore my latest projects, read my thoughts on web development, 
            or check out my SaaS product that helps developers ship faster.
          </p>
          <div className="flex gap-4 mt-8">
            <Button asChild variant="glow" size="lg">
              <Link href="/product">
                View Product <Rocket className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
