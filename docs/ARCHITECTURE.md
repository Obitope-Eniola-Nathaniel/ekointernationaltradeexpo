# Architecture Guide

This document provides a detailed overview of the application architecture, design patterns, and technical decisions.

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Frontend Architecture](#frontend-architecture)
3. [Component Architecture](#component-architecture)
4. [State Management](#state-management)
5. [Routing Strategy](#routing-strategy)
6. [Data Flow](#data-flow)
7. [Performance Optimizations](#performance-optimizations)
8. [Security Considerations](#security-considerations)

---

## System Architecture

### Overall System Design

```
┌────────────────────────────────────────────────────┐
│                    Client Browser                   │
└────────────────────────────────────────────────────┘
                        ↓
┌────────────────────────────────────────────────────┐
│              React SPA (Single Page App)            │
│  ┌──────────────────────────────────────────────┐  │
│  │           React Router (Client Side)         │  │
│  └──────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────┐  │
│  │        React Components + Tailwind CSS       │  │
│  └──────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────┐  │
│  │      Custom Hooks + Utility Functions        │  │
│  └──────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────┐  │
│  │         Constants + Type Definitions         │  │
│  └──────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────┘
                        ↓
┌────────────────────────────────────────────────────┐
│             Future: Backend API (Optional)          │
│  - Authentication Service                           │
│  - Registration API                                 │
│  - Contact Form Handler                             │
│  - Download Management                              │
└────────────────────────────────────────────────────┘
```

### Architecture Layers

#### 1. Presentation Layer (UI Components)
- **Location**: `/src/app/components/` and `/src/app/pages/`
- **Responsibility**: Rendering UI, handling user interactions
- **Technologies**: React, Tailwind CSS, Motion

#### 2. Application Layer (Business Logic)
- **Location**: `/src/hooks/`
- **Responsibility**: Reusable logic, state management
- **Technologies**: Custom React hooks

#### 3. Utility Layer (Helper Functions)
- **Location**: `/src/utils/`
- **Responsibility**: Common operations, data transformation
- **Technologies**: Pure JavaScript/TypeScript functions

#### 4. Configuration Layer (Constants & Types)
- **Location**: `/src/constants/` and `/src/types/`
- **Responsibility**: Application configuration, type safety
- **Technologies**: TypeScript

---

## Frontend Architecture

### Component-Based Architecture

The application follows a **component-based architecture** where UI is broken down into reusable, independent components.

#### Component Hierarchy Example

```
App
├── Layout
│   ├── Header
│   │   ├── Logo
│   │   └── Navigation
│   │       └── NavLink (×N)
│   ├── Main Content
│   │   └── Page Component
│   │       ├── Hero Section
│   │       ├── Feature Section
│   │       │   └── Feature Card (×N)
│   │       └── CTA Section
│   └── Footer
│       ├── Footer Links
│       └── Social Icons
```

### Component Categories

#### 1. Page Components (`/src/app/pages/`)
- Top-level route components
- Compose smaller components
- Examples: `Home.tsx`, `About.tsx`, `Contact.tsx`

#### 2. Layout Components (`/src/app/components/`)
- Structural components
- Used across multiple pages
- Examples: `Layout.tsx`, `ScrollToTop.tsx`

#### 3. UI Components (`/src/app/components/ui/`)
- Generic, reusable components
- Based on Radix UI primitives
- Examples: `button.tsx`, `input.tsx`, `dialog.tsx`

#### 4. Feature Components
- Domain-specific components
- Used within pages
- Examples: Event countdown, Registration form

---

## Component Architecture

### Design Patterns

#### 1. Composition Pattern

```tsx
// Bad: Monolithic component
function EventCard({ title, date, location, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{location}</p>
      <p>{price}</p>
      <button>Register</button>
    </div>
  );
}

// Good: Composable components
function EventCard({ children }) {
  return <div className="event-card">{children}</div>;
}

EventCard.Title = ({ children }) => <h2>{children}</h2>;
EventCard.Date = ({ children }) => <p>{children}</p>;
EventCard.Actions = ({ children }) => <div>{children}</div>;

// Usage
<EventCard>
  <EventCard.Title>EKO Expo 2026</EventCard.Title>
  <EventCard.Date>Sept 22-26, 2026</EventCard.Date>
  <EventCard.Actions>
    <Button>Register</Button>
  </EventCard.Actions>
</EventCard>
```

#### 2. Custom Hook Pattern

```tsx
// Encapsulate complex logic in hooks
function useCountdown(targetDate: number) {
  const [timeLeft, setTimeLeft] = useState({...});
  
  useEffect(() => {
    // Countdown logic
  }, [targetDate]);
  
  return timeLeft;
}

// Use in components
function CountdownTimer() {
  const timeLeft = useCountdown(eventDate);
  return <div>{timeLeft.days} days remaining</div>;
}
```

#### 3. Render Props Pattern

```tsx
function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Fetch logic...
  
  return children({ data, loading });
}

// Usage
<DataFetcher url="/api/events">
  {({ data, loading }) => (
    loading ? <Spinner /> : <EventList events={data} />
  )}
</DataFetcher>
```

### Props and Type Safety

All components use TypeScript interfaces for props:

```tsx
// Define prop types
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

// Use in component
export function Button({ 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  children,
  disabled = false 
}: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} btn-${size}`}
    >
      {children}
    </button>
  );
}
```

---

## State Management

### Current Approach: Local State + Context

The application uses **React's built-in state management**:

1. **Local State** (`useState`): Component-specific state
2. **Context API** (optional future use): Shared state across components
3. **Custom Hooks**: Reusable stateful logic

### State Management Examples

#### Local State
```tsx
function RegistrationForm() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    email: '',
  });
  
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
}
```

#### Custom Hook for Shared Logic
```tsx
// Hook encapsulates form validation logic
function useFormValidation() {
  const [errors, setErrors] = useState({});
  
  const validateEmail = (email: string) => { /* ... */ };
  const validatePhone = (phone: string) => { /* ... */ };
  
  return { errors, validateEmail, validatePhone };
}

// Use in multiple forms
function ContactForm() {
  const { errors, validateEmail } = useFormValidation();
}
```

### Future: Context for Global State (If Needed)

```tsx
// Example: User authentication context
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// Usage
function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
```

---

## Routing Strategy

### React Router v7 Data Mode

The application uses **React Router v7** with the Data Router pattern.

#### Route Configuration

```tsx
// /src/app/routes.tsx
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "countdown", Component: Countdown },
      { path: "schedule", Component: Schedule },
      { path: "sponsors", Component: Sponsors },
      { path: "register", Component: Register },
      { path: "contact", Component: Contact },
      { path: "downloads", Component: Downloads },
      { path: "*", Component: NotFound },
    ],
  },
]);
```

#### App Entry Point

```tsx
// /src/app/App.tsx
import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return <RouterProvider router={router} />;
}
```

### Navigation

#### Programmatic Navigation
```tsx
import { useNavigate } from "react-router";

function MyComponent() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/register");
  };
}
```

#### Link Navigation
```tsx
import { Link } from "react-router";

<Link to="/about">About Us</Link>
```

### Scroll Restoration

Automatic scroll to top on route change:

```tsx
// /src/app/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}
```

---

## Data Flow

### Unidirectional Data Flow

```
User Action → Event Handler → State Update → Re-render → UI Update
```

### Example: Form Submission Flow

```tsx
function RegistrationForm() {
  // 1. State initialization
  const [formData, setFormData] = useState({...});
  const [submitted, setSubmitted] = useState(false);
  
  // 2. Event handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 3. Validation
    if (validate(formData)) {
      // 4. State update (could be API call)
      setSubmitted(true);
    }
  };
  
  // 5. Render based on state
  if (submitted) {
    return <SuccessMessage />;
  }
  
  return <Form onSubmit={handleSubmit} />;
}
```

### Props Down, Events Up

```
        Parent Component
               ↓
        (Props passed down)
               ↓
        Child Component
               ↑
        (Events bubble up)
               ↑
        Parent Component
```

---

## Performance Optimizations

### 1. Code Splitting

React Router automatically code-splits routes:

```tsx
// Each route component is lazy-loaded
{ path: "about", Component: About }
```

### 2. Image Optimization

- Use `ImageWithFallback` component for images
- Lazy load images below the fold
- Optimize image sizes

### 3. Memoization

Use `useMemo` and `useCallback` for expensive computations:

```tsx
function ExpensiveComponent({ data }) {
  // Memoize expensive calculation
  const processedData = useMemo(() => {
    return expensiveOperation(data);
  }, [data]);
  
  // Memoize callback
  const handleClick = useCallback(() => {
    console.log(processedData);
  }, [processedData]);
}
```

### 4. Debouncing/Throttling

Use utility functions for performance:

```tsx
import { debounce } from '@/utils';

const debouncedSearch = debounce((query) => {
  performSearch(query);
}, 300);
```

---

## Security Considerations

### 1. Input Validation

All user inputs are validated:

```tsx
import { isValidEmail, isValidPhone } from '@/utils';

if (!isValidEmail(email)) {
  setError("Invalid email");
  return;
}
```

### 2. XSS Protection

React automatically escapes content:

```tsx
// Safe - React escapes this
<div>{userInput}</div>

// Unsafe - Avoid dangerouslySetInnerHTML
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```

### 3. Form Security

- CSRF protection (when API is added)
- Input sanitization
- Rate limiting (backend)

### 4. Environment Variables

Sensitive data in environment variables:

```tsx
// vite.config.ts
const API_URL = import.meta.env.VITE_API_URL;
```

---

## Best Practices

### 1. Component Organization

```tsx
// Imports
import { useState } from 'react';
import type { Props } from '@/types';

// Constants
const DEFAULT_VALUE = 'default';

// Component
export function MyComponent({ prop1, prop2 }: Props) {
  // Hooks
  const [state, setState] = useState('');
  
  // Event handlers
  const handleClick = () => {};
  
  // Render helpers
  const renderContent = () => {};
  
  // Return
  return <div>...</div>;
}
```

### 2. Naming Conventions

- **Components**: PascalCase (`MyComponent`)
- **Hooks**: camelCase with 'use' prefix (`useMyHook`)
- **Utils**: camelCase (`formatDate`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_URL`)
- **Types**: PascalCase (`UserData`)

### 3. File Organization

```
ComponentName/
  index.tsx          # Main component
  ComponentName.tsx  # Component implementation
  types.ts          # Component-specific types
  utils.ts          # Component-specific utils
  styles.css        # Component-specific styles (if needed)
```

---

## Future Enhancements

### Planned Improvements

1. **Backend Integration**
   - RESTful API for data persistence
   - Authentication service
   - Real-time updates with WebSockets

2. **Testing**
   - Unit tests with Vitest
   - Integration tests with React Testing Library
   - E2E tests with Playwright

3. **State Management**
   - Consider Zustand or Redux for complex state
   - Server state management with TanStack Query

4. **Performance**
   - Implement virtual scrolling for long lists
   - Add service worker for offline support
   - Optimize bundle size

5. **Accessibility**
   - Comprehensive ARIA labels
   - Keyboard navigation improvements
   - Screen reader optimization

---

**Last Updated**: March 13, 2026
**Version**: 1.0.0
