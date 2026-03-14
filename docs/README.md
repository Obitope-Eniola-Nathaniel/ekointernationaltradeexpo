# EKO International Trade Expo 2026 - Website Documentation

Welcome to the comprehensive documentation for the EKO International Trade Expo website. This documentation is designed to help developers of all levels understand, maintain, and extend the codebase.

## 📚 Table of Contents

1. [Getting Started](#getting-started)
2. [Project Overview](#project-overview)
3. [Architecture](#architecture)
4. [Folder Structure](#folder-structure)
5. [Technology Stack](#technology-stack)
6. [Key Concepts](#key-concepts)
7. [Development Workflow](#development-workflow)
8. [Deployment](#deployment)
9. [Troubleshooting](#troubleshooting)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **pnpm** (v8 or higher) - Install via `npm install -g pnpm`
- **Git** - [Download here](https://git-scm.com/)
- A code editor (VS Code recommended)

### Initial Setup

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd eko-trade-expo
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start development server**:
   ```bash
   pnpm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173` (default Vite port)

### Building for Production

```bash
pnpm run build
```

The production build will be created in the `dist/` folder.

---

## 📖 Project Overview

### What is EKO International Trade Expo?

The EKO International Trade Expo is West Africa's premier trade and investment exposition, connecting businesses, entrepreneurs, and investors across diverse industries. The event takes place from **Tuesday, September 22 - Saturday, September 26, 2026** at the Police College, Ikeja, Lagos State, Nigeria.

### Website Purpose

This website serves as the official digital platform for:
- Event information and registration
- Sponsor showcase
- Schedule and agenda
- Contact and support
- Downloads and resources
- Countdown to the event

### Target Audience

- **Exhibitors**: Businesses showcasing products/services
- **Visitors**: Potential buyers and networking participants
- **Sponsors**: Companies supporting the event
- **Media**: Press and content creators
- **General Public**: Anyone interested in the expo

---

## 🏗️ Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    User Interface Layer                 │
│         (React Components + Tailwind CSS)               │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                   Application Layer                      │
│    (Custom Hooks, State Management, Routing)            │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                    Utility Layer                         │
│      (Validators, Formatters, Helpers)                  │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                   Constants & Types                      │
│        (Configuration, Type Definitions)                 │
└─────────────────────────────────────────────────────────┘
```

### Design Patterns Used

1. **Component Composition**: Reusable UI components
2. **Custom Hooks**: Encapsulated logic (countdown, validation, animations)
3. **Separation of Concerns**: Clear separation between UI, logic, and data
4. **Type Safety**: TypeScript for type checking
5. **Single Source of Truth**: Constants for configuration

---

## 📁 Folder Structure

```
eko-trade-expo/
│
├── docs/                          # 📖 Documentation
│   ├── README.md                  # Main documentation (this file)
│   ├── ARCHITECTURE.md            # Detailed architecture guide
│   ├── COMPONENTS.md              # Component documentation
│   ├── API.md                     # API integration guide
│   └── DEPLOYMENT.md              # Deployment instructions
│
├── email-templates/               # 📧 Email templates
│   ├── README.md                  # Email templates guide
│   ├── welcome-registration.html  # Registration confirmation
│   ├── email-verification.html    # Email verification
│   ├── forgot-password.html       # Password reset
│   ├── login-notification.html    # Login alerts
│   └── password-changed-confirmation.html
│
├── src/                           # 💻 Source code
│   ├── app/                       # Main application
│   │   ├── components/            # React components
│   │   │   ├── ui/                # Reusable UI components
│   │   │   ├── figma/             # Figma-imported components
│   │   │   ├── Layout.tsx         # Main layout wrapper
│   │   │   └── ScrollToTop.tsx    # Scroll restoration
│   │   │
│   │   ├── pages/                 # Page components
│   │   │   ├── Home.tsx           # Homepage
│   │   │   ├── About.tsx          # About page
│   │   │   ├── Countdown.tsx      # Countdown page
│   │   │   ├── Schedule.tsx       # Event schedule
│   │   │   ├── Sponsors.tsx       # Sponsors page
│   │   │   ├── Register.tsx       # Registration form
│   │   │   ├── Contact.tsx        # Contact page
│   │   │   ├── Downloads.tsx      # Downloads page
│   │   │   ├── FAQ.tsx            # FAQ page
│   │   │   ├── Gallery.tsx        # Photo gallery
│   │   │   ├── Team.tsx           # Team page
│   │   │   ├── Login.tsx          # Login page
│   │   │   ├── SignUp.tsx         # Sign up page
│   │   │   └── NotFound.tsx       # 404 page
│   │   │
│   │   ├── App.tsx                # Root component
│   │   └── routes.tsx             # Route configuration
│   │
│   ├── constants/                 # 🔧 Configuration constants
│   │   └── index.ts               # All app constants
│   │
│   ├── hooks/                     # 🪝 Custom React hooks
│   │   ├── useCountdown.ts        # Countdown timer hook
│   │   ├── useFormValidation.ts   # Form validation hook
│   │   ├── useScrollAnimation.ts  # Scroll animation hook
│   │   └── index.ts               # Hooks exports
│   │
│   ├── types/                     # 📘 TypeScript types
│   │   └── index.ts               # Type definitions
│   │
│   ├── utils/                     # 🛠️ Utility functions
│   │   ├── formatters.ts          # Data formatting functions
│   │   ├── validators.ts          # Validation functions
│   │   ├── helpers.ts             # Helper functions
│   │   └── index.ts               # Utils exports
│   │
│   ├── styles/                    # 🎨 Stylesheets
│   │   ├── index.css              # Main styles
│   │   ├── tailwind.css           # Tailwind imports
│   │   ├── theme.css              # Theme & CSS variables
│   │   └── fonts.css              # Font imports
│   │
│   └── imports/                   # 📦 Imported assets
│       ├── pasted_text/           # Markdown content
│       └── (figma assets)         # Images and SVGs
│
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
├── vite.config.ts                 # Vite config
├── postcss.config.mjs             # PostCSS config
└── README.md                      # Project README
```

### Key Directories Explained

#### `/src/app/pages/`
Contains all page-level components. Each file represents a route in the application.

#### `/src/app/components/ui/`
Reusable UI components built with Radix UI and styled with Tailwind CSS. These are generic components that can be used across the application.

#### `/src/constants/`
Centralized configuration and constants. This is the **single source of truth** for:
- Event dates and times
- Contact information
- API endpoints
- Form options
- Validation rules

#### `/src/hooks/`
Custom React hooks for reusable logic:
- `useCountdown`: Countdown timer functionality
- `useFormValidation`: Form validation logic
- `useScrollAnimation`: Scroll-triggered animations

#### `/src/types/`
TypeScript type definitions and interfaces for type safety throughout the application.

#### `/src/utils/`
Utility functions organized by purpose:
- `formatters.ts`: Format data for display (dates, currency, phone numbers, etc.)
- `validators.ts`: Validate user input (email, phone, passwords, etc.)
- `helpers.ts`: General helper functions (debounce, copy to clipboard, etc.)

---

## 🛠️ Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI library |
| **TypeScript** | Latest | Type safety |
| **Vite** | 6.3.5 | Build tool |
| **React Router** | 7.13.0 | Routing |
| **Tailwind CSS** | 4.1.12 | Styling |

### UI Components & Libraries

| Library | Purpose |
|---------|---------|
| **Radix UI** | Accessible component primitives |
| **Lucide React** | Icon library |
| **Motion** | Animations |
| **Recharts** | Charts and graphs |
| **Sonner** | Toast notifications |
| **React Hook Form** | Form handling |

### Development Tools

| Tool | Purpose |
|------|---------|
| **pnpm** | Package manager |
| **ESLint** | Code linting |
| **PostCSS** | CSS processing |

---

## 💡 Key Concepts

### 1. Component Composition

Components are built using composition for maximum reusability:

```tsx
// Bad: Monolithic component
function HomePage() {
  return (
    <div>
      {/* All code in one component */}
    </div>
  );
}

// Good: Composed components
function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <CallToAction />
    </div>
  );
}
```

### 2. Custom Hooks

Logic is extracted into custom hooks for reusability:

```tsx
// Instead of duplicating countdown logic
function useCountdown(targetDate: number) {
  const [timeLeft, setTimeLeft] = useState({...});
  // ... countdown logic
  return timeLeft;
}

// Use in any component
function Countdown() {
  const timeLeft = useCountdown(eventDate);
  return <div>{timeLeft.days} days</div>;
}
```

### 3. Constants as Single Source of Truth

All configuration lives in `/src/constants/`:

```tsx
// Bad: Hard-coded values
<p>Event: September 22-26, 2026</p>
<p>Venue: Police College, Ikeja</p>

// Good: Using constants
import { EVENT_CONFIG, VENUE_CONFIG } from '@/constants';

<p>Event: {EVENT_CONFIG.DISPLAY_DATES}</p>
<p>Venue: {VENUE_CONFIG.FULL_ADDRESS}</p>
```

### 4. Type Safety

TypeScript ensures type safety:

```tsx
import type { ContactFormData } from '@/types';

function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  // TypeScript will catch any type errors
}
```

### 5. Utility Functions

Common operations are abstracted into utilities:

```tsx
import { formatDate, isValidEmail } from '@/utils';

const displayDate = formatDate(new Date(), 'long');
const emailValid = isValidEmail('user@example.com');
```

---

## 👨‍💻 Development Workflow

### Adding a New Page

1. **Create page component** in `/src/app/pages/`:
   ```tsx
   // /src/app/pages/NewPage.tsx
   export function NewPage() {
     return <div>New Page Content</div>;
   }
   ```

2. **Add route** in `/src/app/routes.tsx`:
   ```tsx
   import { NewPage } from "./pages/NewPage";
   
   { path: "/new-page", Component: NewPage }
   ```

3. **Add to navigation** (if needed) in `/src/constants/index.ts`:
   ```tsx
   export const NAV_ITEMS = [
     // ... existing items
     { path: "/new-page", label: "New Page" },
   ];
   ```

### Creating a Reusable Component

1. **Create component** in `/src/app/components/`:
   ```tsx
   // /src/app/components/MyComponent.tsx
   interface MyComponentProps {
     title: string;
     description?: string;
   }
   
   export function MyComponent({ title, description }: MyComponentProps) {
     return (
       <div>
         <h2>{title}</h2>
         {description && <p>{description}</p>}
       </div>
     );
   }
   ```

2. **Use the component**:
   ```tsx
   import { MyComponent } from './components/MyComponent';
   
   <MyComponent title="Hello" description="World" />
   ```

### Adding a Custom Hook

1. **Create hook** in `/src/hooks/`:
   ```tsx
   // /src/hooks/useMyHook.ts
   export function useMyHook(param: string) {
     const [state, setState] = useState('');
     // ... hook logic
     return state;
   }
   ```

2. **Export from index**:
   ```tsx
   // /src/hooks/index.ts
   export { useMyHook } from './useMyHook';
   ```

3. **Use in components**:
   ```tsx
   import { useMyHook } from '@/hooks';
   
   const value = useMyHook('param');
   ```

### Working with Forms

1. **Define form type** in `/src/types/index.ts`:
   ```tsx
   export interface MyFormData {
     field1: string;
     field2: number;
   }
   ```

2. **Create form component**:
   ```tsx
   import type { MyFormData } from '@/types';
   import { useState } from 'react';
   
   function MyForm() {
     const [formData, setFormData] = useState<MyFormData>({
       field1: '',
       field2: 0,
     });
     
     const handleSubmit = (e: React.FormEvent) => {
       e.preventDefault();
       // Handle submission
     };
     
     return <form onSubmit={handleSubmit}>...</form>;
   }
   ```

### Adding Constants

Update `/src/constants/index.ts`:

```tsx
export const MY_NEW_CONSTANT = {
  VALUE1: "value",
  VALUE2: 123,
} as const;
```

---

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for various platforms:

- Vercel
- Netlify
- AWS S3 + CloudFront
- Traditional hosting

Quick deployment with Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 🐛 Troubleshooting

### Common Issues

#### Build Errors

**Issue**: Module not found errors
```
Error: Cannot find module '@/types'
```

**Solution**: Check TypeScript path aliases in `tsconfig.json`

#### Styling Issues

**Issue**: Tailwind classes not working

**Solution**: 
1. Check if styles are imported in `/src/styles/index.css`
2. Verify Tailwind is configured in `vite.config.ts`

#### Image Loading Issues

**Issue**: Images not displaying

**Solution**:
- For Figma assets: Use `figma:asset/filename.png`
- For user images: Use `ImageWithFallback` component

#### Type Errors

**Issue**: TypeScript type errors

**Solution**:
1. Check type definitions in `/src/types/index.ts`
2. Ensure proper imports
3. Run `tsc --noEmit` to check types

### Getting Help

1. Check this documentation
2. Review component documentation in [COMPONENTS.md](./COMPONENTS.md)
3. Check the [Architecture Guide](./ARCHITECTURE.md)
4. Contact the development team

---

## 📞 Support

For questions or issues:

- **Email**: dev@ekointernationaltrade.com
- **Documentation**: `/docs` folder
- **Issue Tracker**: [Link to issues]

---

## 🔄 Next Steps

1. Read [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed architecture
2. Read [COMPONENTS.md](./COMPONENTS.md) for component documentation
3. Read [API.md](./API.md) for API integration
4. Read [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment guide

---

**Last Updated**: March 13, 2026
**Version**: 1.0.0
**Maintained by**: EKO Expo Development Team
