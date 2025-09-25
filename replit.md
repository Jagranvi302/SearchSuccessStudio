# Portfolio Website

## Overview

This is a professional portfolio website for Rashid Maqbool, an SEO Specialist and Digital Marketing Expert. The application is built as a full-stack TypeScript project with a React frontend and Express backend, showcasing professional services, skills, and experience in a modern, clean design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Theme System**: Custom theme provider supporting light/dark modes
- **State Management**: TanStack Query for server state and React hooks for local state

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **TypeScript**: Full TypeScript implementation with ESM modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **API Design**: RESTful API structure with /api prefix routing

### Design System
- **Component Library**: Custom implementation of Shadcn/ui components
- **Typography**: Inter and Poppins fonts from Google Fonts
- **Color Scheme**: Professional blue accent (#215 80% 55%) with neutral grays
- **Layout**: 12-column responsive grid with consistent spacing units
- **Visual Hierarchy**: Clear typography scale and spacing system

### SEO Architecture
- **Server-Side Rendering**: Structured data with JSON-LD schema markup
- **Meta Management**: Dynamic meta tags and Open Graph support
- **Sitemap Generation**: Automated sitemap.xml and robots.txt generation
- **Performance**: Optimized images, Core Web Vitals focus
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

### Development Tools
- **Package Manager**: npm with lockfile version 3
- **TypeScript Config**: Strict mode with path mapping for clean imports
- **Build Process**: Vite for frontend, esbuild for backend bundling
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Build Tools**: Vite, esbuild, tsx for development
- **TypeScript**: Full TypeScript implementation with strict configuration

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Comprehensive component primitives for accessibility
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets (Simple Icons for social media)

### Database and Backend
- **PostgreSQL**: Primary database (configured via Drizzle but may be added later)
- **Drizzle ORM**: Type-safe database queries and migrations
- **Neon Database**: Serverless PostgreSQL provider
- **Express.js**: Web framework for API routes

### Form and Data Management
- **React Hook Form**: Form handling with validation
- **Hookform Resolvers**: Integration with validation libraries
- **TanStack Query**: Server state management and caching
- **Zod**: Schema validation (integrated with Drizzle)

### Email and Communication
- **SendGrid**: Email service for contact form submissions
- **Date-fns**: Date manipulation and formatting utilities

### Development and Monitoring
- **Replit Integration**: Development environment specific plugins
- **Runtime Error Overlay**: Development error handling
- **Cartographer**: Replit-specific development tooling

### Performance and SEO
- **Font Optimization**: Google Fonts preconnect and optimization
- **Image Optimization**: Structured asset management
- **Web Vitals**: Performance monitoring and optimization
- **Schema Markup**: JSON-LD structured data for search engines