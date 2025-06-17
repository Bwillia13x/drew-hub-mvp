# Copilot Instructions for Drew Hub

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a comprehensive Next.js 14 application called "Drew Hub" with the following architecture:

## Project Structure
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v3.5 with slate-900 background, emerald-500 accents
- **Fonts**: Inter for body text, Retro-Pixel (VT323) for headings
- **UI Components**: shadcn/ui components throughout

## Key Features
1. **Blog Engine**: MDX support via next-mdx-remote + contentlayer
2. **CMS Dashboard**: Clerk authentication with full CRUD operations
3. **SaaS Landing Page**: Professional product page with pricing
4. **Search**: Algolia search modal with ⌘K shortcut
5. **Database**: PlanetScale + Prisma for data management

## Development Guidelines
- Use TypeScript strict mode for all files
- Follow Next.js 14 App Router patterns
- Implement responsive design with mobile-first approach
- Use emerald-500 for accent colors and slate-900 for background
- Include proper error handling and loading states
- Write comprehensive tests using Vitest + Testing Library

## Color Scheme
- Primary Background: slate-900
- Accent Color: emerald-500
- Text: Use Tailwind's text colors for proper contrast
- Use "glow-effect" class for special highlighting

## Component Patterns
- Use shadcn/ui components as base
- Implement proper TypeScript interfaces
- Include proper accessibility attributes
- Follow React best practices for hooks and state management

When generating code, prioritize maintainability, performance, and user experience.
