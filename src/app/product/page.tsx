import Link from 'next/link';
import { Check, ArrowRight, Zap, Shield, Rocket, Users, Globe, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ProductPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="space-y-10 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Badge variant="emerald" className="mb-4">
            🚀 Ship Faster
          </Badge>
          <h1 className="font-retro text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-emerald-500">
            Build. Ship. Scale.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            The complete development toolkit for modern web applications. 
            From idea to production in record time with our comprehensive platform.
          </p>
          <div className="flex gap-4 mt-8">
            <Button size="lg" className="glow-effect">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-retro text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-emerald-500">
            Everything You Need
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Powerful features designed for modern development teams who want to ship fast without compromising quality.
          </p>
        </div>
        
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card className="relative overflow-hidden group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-emerald-500" />
                <CardTitle>Lightning Fast</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Optimized build processes and edge deployment ensure your applications load in milliseconds worldwide.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-emerald-500" />
                <CardTitle>Secure by Default</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Enterprise-grade security with automatic SSL, DDoS protection, and compliance-ready infrastructure.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-emerald-500" />
                <CardTitle>Global Scale</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Deploy to 100+ regions worldwide with automatic scaling based on traffic and performance needs.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-emerald-500" />
                <CardTitle>Team Collaboration</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Built-in collaboration tools, real-time editing, and seamless integration with your favorite tools.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-emerald-500" />
                <CardTitle>Zero Downtime</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Automatic failover, health checks, and instant rollbacks ensure your applications stay online 24/7.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Rocket className="h-6 w-6 text-emerald-500" />
                <CardTitle>One-Click Deploy</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Deploy from GitHub, GitLab, or Bitbucket with automatic builds, previews, and production deployments.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-retro text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-emerald-500">
            Simple Pricing
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Start free and scale as you grow. No hidden fees, no vendor lock-in.
          </p>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Starter Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Perfect for side projects and small applications</CardDescription>
              <div className="text-3xl font-bold">$0<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent>
              <Button className="w-full mb-6">Get Started</Button>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  3 projects
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  100GB bandwidth
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Community support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  SSL certificates
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Pro Plan */}
          <Card className="relative border-emerald-500">
            <Badge className="absolute -top-2 left-1/2 -translate-x-1/2" variant="emerald">
              Most Popular
            </Badge>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>For growing teams and production applications</CardDescription>
              <div className="text-3xl font-bold">$29<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent>
              <Button className="w-full mb-6 glow-effect">Start Free Trial</Button>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Unlimited projects
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  1TB bandwidth
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Advanced analytics
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Team collaboration
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Enterprise Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large organizations with custom needs</CardDescription>
              <div className="text-3xl font-bold">Custom</div>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full mb-6">Contact Sales</Button>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Everything in Pro
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Unlimited bandwidth
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  24/7 phone support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Custom integrations
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  SLA guarantee
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-retro text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-emerald-500">
            Ready to Ship?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Join thousands of developers who have already accelerated their development process.
          </p>
          <div className="flex gap-4 mt-8">
            <Button size="lg" className="glow-effect">
              Start Building Today <Rocket className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">Read the Docs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
