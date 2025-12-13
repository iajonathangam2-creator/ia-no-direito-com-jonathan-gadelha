# Replit.md

## Overview

This is a professional legal tech "Linktree-style" hub application built for Jonathan Gadelha, a specialist in AI applied to law. The application serves as a single-page link aggregator that directs visitors to various legal AI platforms, courses, and a YouTube channel. The design follows a clean, centered layout inspired by Linktree/Beacons with a professional legal tech aesthetic.

The primary purpose is to provide a central hub for:
- Electoral law AI agents platform
- Labor law AI agents platform
- Electoral/party accounting support
- Public attorney platform
- YouTube channel with legal AI content
- Contact via WhatsApp

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **Component Library**: shadcn/ui (New York style) with Radix UI primitives
- **Build Tool**: Vite with React plugin

The frontend follows a mobile-first, single-column centered layout with max-width 600px. Components are organized in a standard structure:
- `pages/` - Route-level components (home, not-found)
- `components/ui/` - Reusable shadcn/ui components
- `hooks/` - Custom React hooks
- `lib/` - Utility functions and query client configuration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **Development Server**: tsx for TypeScript execution
- **Production Build**: esbuild for server bundling, Vite for client

The server follows a simple structure:
- `server/index.ts` - Express app entry point with middleware
- `server/routes.ts` - API route registration
- `server/storage.ts` - Data storage interface (currently in-memory)
- `server/vite.ts` - Vite dev server integration
- `server/static.ts` - Static file serving for production

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts`
- **Current Implementation**: In-memory storage (`MemStorage` class)
- **Database Ready**: Configured for PostgreSQL via `DATABASE_URL` environment variable

The storage layer uses an interface pattern (`IStorage`) allowing easy swapping between in-memory and database implementations.

### Design System
- **Typography**: Inter and Poppins from Google Fonts
- **Color Palette**: 
  - Primary: Modern Purple (#6C63FF)
  - Background: Soft Grey (#F7F7F7)
  - Text: Dark Grey (#333333)
  - Cards: White with shadows
- **Theme**: Light mode with CSS custom properties for easy theming

## External Dependencies

### Third-Party Services
- **Google Fonts**: Inter and Poppins font families
- **WhatsApp**: Contact integration (phone: 81981252689)
- **External Platforms**: Links to various Manus.space hosted legal AI platforms
- **YouTube**: Channel integration for content

### Key NPM Packages
- **UI Components**: Full shadcn/ui component set with Radix UI primitives
- **Database**: Drizzle ORM, drizzle-zod, pg (PostgreSQL client)
- **Forms**: React Hook Form with Zod resolvers
- **Icons**: Lucide React, react-icons (WhatsApp icon)
- **Date Handling**: date-fns
- **Session Management**: express-session, connect-pg-simple

### Development Tools
- **Replit Plugins**: vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner
- **Type Checking**: TypeScript with strict mode
- **Database Migrations**: drizzle-kit