# Technical Blueprint: Modern Portfolio Application

## 1. Application Overview

### 1.1 Purpose
A modern, AI-enhanced portfolio website designed to showcase professional work, services, and projects while offering an innovative profile generation feature.

### 1.2 Core Technologies
- **Frontend Framework:** Next.js 13.5+ with App Router
- **Language:** TypeScript 5.2.2
- **Styling:** Tailwind CSS 3.3.0
- **UI Components:** shadcn/ui
- **State Management:** React Hooks
- **Form Handling:** React Hook Form + Zod
- **Animation:** Custom Dot Shader Animation System

## 2. Architecture

### 2.1 Directory Structure
```
src/
├── actions/        # Server actions for forms and AI
├── ai/            # AI integration and flows
├── app/           # Next.js app router pages
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks
└── lib/           # Utilities and configurations
```

### 2.2 Key Components
- **Layout System:** Responsive design with dynamic header and footer
- **Form Components:** Type-safe forms with validation
- **Interactive Elements:** Dot shader animation, carousels, and modals
- **AI Integration:** Profile generation system with advanced parsing

## 3. Features & Implementation

### 3.1 AI Profile Generation
- CV parsing and analysis
- Intelligent data extraction
- Professional profile synthesis
- Multi-format support (PDF, DOCX)

### 3.2 Interactive UI
- Responsive navigation system
- Dynamic background animation
- Smooth transitions and effects
- Accessibility-first approach

## 4. Design System

### 4.1 Color Palette
- **Background:** Deep Navy Blue (hsl(225, 21%, 12%))
- **Primary/Accent:** Electric Blue (hsl(184, 100%, 74%))
- **Secondary:** Dark Navy (hsl(225, 21%, 20%))
- **Text/Foreground:** Cool White (hsl(210, 40%, 98%))
- **Card Background:** Lighter Navy (hsl(225, 21%, 15%))
- **Muted Text:** Cool Grey (hsl(210, 40%, 60%))
- **Interactive Elements:**
  - Dot Animation: Light Blue (hsla(206, 87%, 53%, 0.5))
  - Dot Interaction: Bright Blue (hsla(206, 87%, 65%, 0.8))
- **Custom Effects:** Dynamic shader patterns with variable opacity

### 4.2 Typography
- Primary: 'Source Code Pro'
- Weights: 400 (regular), 500 (medium), 600 (semibold)
- Line heights: 1.5 (body), 1.2 (headings)

### 4.3 Component Library
- Buttons: Primary, secondary, ghost variants
- Cards: Project, service, and feature displays
- Forms: Input fields, textareas, dropdowns
- Navigation: Header, footer, mobile menu

## 5. Security & Performance

### 5.1 Security Measures
- Environment variable management
- Form validation and sanitization
- API route protection
- Rate limiting implementation

### 5.2 Performance Targets
- Core Web Vitals optimization
- Asset optimization
- Lazy loading strategies
- Route prefetching

## 6. Development Guidelines

### 6.1 Setup Requirements
- Node.js 18.0+
- Package manager (npm/yarn/pnpm)
- Environment configuration
- IDE setup (VS Code recommended)

### 6.2 Future Enhancements
- [ ] Enhanced AI capabilities
- [ ] Dynamic project filtering
- [ ] Dark/Light theme toggle
- [ ] Advanced analytics integration