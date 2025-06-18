# Drew Hub

[![CI/CD Pipeline](https://github.com/drewpayment/drew-hub/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/drewpayment/drew-hub/actions/workflows/ci-cd.yml)

A comprehensive Next.js 14 workspace featuring a modern blog engine, CMS dashboard, and SaaS landing page. Built with TypeScript, Tailwind CSS, and best practices for production-ready applications.

## Development Status
This project is currently under active development. You can find a detailed breakdown of completed features, ongoing work, and future plans in the [DEVELOPMENT_STATUS.md](DEVELOPMENT_STATUS.md) file.

## 🚀 Features

### ✨ Blog Engine
- **MDX Support**: Write content in Markdown with React components
- **Contentlayer**: Type-safe content management
- **Algolia Search**: Fast, full-text search across posts and projects
- **RSS/Atom Feeds**: Automated feed generation
- **Sitemap**: Auto-generated XML sitemap
- **Tag System**: Categorize and filter content

### 🎛️ CMS Dashboard
- **Clerk Authentication**: Secure user management
- **KPI Dashboard**: Analytics and insights
- **CRUD Operations**: Manage posts and projects
- **Drag & Drop**: Reorder projects with intuitive interface
- **Rich Editor**: Full-featured content editing
- **Image Management**: Upload and optimize media

### 💼 SaaS Landing Page
- **Modern Design**: Beautiful, responsive layouts
- **Feature Sections**: Highlight product capabilities
- **Pricing Tables**: Flexible pricing presentation
- **Call-to-Actions**: Convert visitors to customers
- **Newsletter Integration**: Capture leads with Resend

### 🎨 Design System
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: High-quality component library
- **Custom Theme**: Unique color palette and typography
- **Dark Mode**: Built-in theme switching
- **Responsive**: Mobile-first design approach

### ⚡ Performance & DevOps
- **Next.js 14**: Latest features and optimizations
- **TypeScript**: Full type safety
- **ESLint/Prettier**: Code quality and formatting
- **Vitest**: Fast unit testing
- **GitHub Actions**: Automated CI/CD pipeline
- **Vercel Deployment**: Optimized hosting
- **Lighthouse Audits**: Performance monitoring

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library
- **Contentlayer** - Content management
- **MDX** - Markdown with React components

### Backend
- **Prisma** - Database ORM
- **PlanetScale** - Serverless MySQL database
- **Clerk** - Authentication and user management
- **Resend** - Email delivery
- **Algolia** - Search infrastructure

### Tools & Services
- **Vitest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **GitHub Actions** - CI/CD pipeline
- **Vercel** - Deployment platform
- **Lighthouse** - Performance auditing

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Git
- PlanetScale account (or compatible MySQL database)
- Clerk account for authentication
- Resend account for email
- Algolia account for search

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/drew-hub.git
   cd drew-hub
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Database
   DATABASE_URL="mysql://username:password@host/database?sslaccept=strict"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
   CLERK_SECRET_KEY="sk_test_..."
   
   # Resend Email
   RESEND_API_KEY="re_..."
   
   # Algolia Search
   NEXT_PUBLIC_ALGOLIA_APP_ID="..."
   NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY="..."
   ALGOLIA_ADMIN_API_KEY="..."
   
   # Site Configuration
   NEXT_PUBLIC_BASE_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Development

### Available Scripts

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run format          # Format code with Prettier
npm run type-check      # TypeScript type checking

# Testing
npm run test            # Run tests with Vitest
npm run test:ui         # Run tests with UI

# Database
npm run db:generate     # Generate Prisma client
npm run db:push         # Push schema changes to database

# Content
npm run contentlayer    # Build content layer
```

### Project Structure

```
drew-hub/
├── .github/                # GitHub workflows and templates
│   └── workflows/
│       └── ci-cd.yml      # CI/CD pipeline
├── __tests__/             # Test files
├── content/               # MDX content files
│   ├── posts/
│   └── projects/
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── api/          # API routes
│   │   ├── blog/         # Blog pages
│   │   ├── dashboard/    # CMS dashboard
│   │   └── ...
│   ├── components/       # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── layout/       # Layout components
│   │   └── ...
│   ├── lib/              # Utility functions
│   │   ├── feed/         # RSS/Sitemap generation
│   │   └── ...
│   └── types/            # TypeScript type definitions
├── contentlayer.config.ts # Content layer configuration
├── middleware.ts         # Next.js middleware
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── vitest.config.ts      # Vitest configuration
└── ...
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database (PlanetScale)
DATABASE_URL="mysql://..."

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
CLERK_SECRET_KEY="sk_..."

# Email (Resend)
RESEND_API_KEY="re_..."

# Search (Algolia)
NEXT_PUBLIC_ALGOLIA_APP_ID="..."
NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY="..."
ALGOLIA_ADMIN_API_KEY="..."

# Site
NEXT_PUBLIC_BASE_URL="https://yourdomain.com"
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** automatically on push to main branch

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Contentlayer](https://contentlayer.dev/) - Content management
- [Clerk](https://clerk.com/) - Authentication platform
- [Vercel](https://vercel.com/) - Deployment platform

---

Built with ❤️ by [Drew](https://github.com/drewpayment)
