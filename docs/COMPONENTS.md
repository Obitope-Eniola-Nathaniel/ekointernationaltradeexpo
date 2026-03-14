# Component Documentation

This document provides detailed documentation for all components in the application.

## Table of Contents

1. [Page Components](#page-components)
2. [Layout Components](#layout-components)
3. [UI Components](#ui-components)
4. [Custom Hooks](#custom-hooks)
5. [Component Guidelines](#component-guidelines)

---

## Page Components

### Home (`/src/app/pages/Home.tsx`)

**Purpose**: Main landing page of the website

**Features**:
- Hero section with event information
- Countdown timer to event
- Event highlights and features
- Call-to-action buttons
- Why attend section
- Expo experience showcase

**Props**: None (route component)

**State**:
- `timeLeft`: Countdown timer state

**Example Usage**:
```tsx
// Used in routes.tsx
{ index: true, Component: Home }
```

---

### About (`/src/app/pages/About.tsx`)

**Purpose**: Information about the expo

**Features**:
- Event overview
- Animated statistics counter
- Why attend the expo
- Event highlights
- Past event information (if applicable)

**Props**: None

**State**:
- Animated counter states for statistics

---

### Countdown (`/src/app/pages/Countdown.tsx`)

**Purpose**: Dedicated countdown page to the event

**Features**:
- Live countdown timer (days, hours, minutes, seconds)
- Event details cards
- What to expect section
- Venue information

**Props**: None

**State**:
- `timeLeft`: Uses `useCountdown` hook

**Dependencies**:
- `useCountdown` custom hook
- `EVENT_CONFIG` from constants

---

### Schedule (`/src/app/pages/Schedule.tsx`)

**Purpose**: Display full event schedule

**Features**:
- Day-by-day schedule
- Session types (keynote, panel, workshop, etc.)
- Time slots
- Speaker information
- Filterable by day

**Data Structure**:
```tsx
interface ScheduleItem {
  time: string;
  title: string;
  type: "keynote" | "panel" | "workshop" | "networking" | "exhibition";
  speaker?: string;
  description?: string;
}
```

---

### Sponsors (`/src/app/pages/Sponsors.tsx`)

**Purpose**: Showcase event sponsors

**Features**:
- Sponsor tiers (Platinum, Gold, Silver, Bronze)
- Sponsor logos
- Sponsor information
- Become a sponsor CTA

**Data Structure**:
```tsx
interface SponsorTier {
  tier: string;
  color: string;
  sponsors: {
    name: string;
    logo: string;
    website?: string;
  }[];
}
```

---

### Register (`/src/app/pages/Register.tsx`)

**Purpose**: Event registration form

**Features**:
- Multi-step form (if applicable)
- Form validation
- Different registration types (exhibitor, visitor, sponsor)
- Success/error states

**Form Fields**:
- Personal information (name, email, phone)
- Company information
- Attendance type
- Industry selection
- Terms and conditions

**Validation**:
- Email format
- Phone number format
- Required fields
- Custom validation rules

---

### Contact (`/src/app/pages/Contact.tsx`)

**Purpose**: Contact form and information

**Features**:
- Contact form
- Contact information cards
- Google Maps embed
- Form submission handling
- Success/error states

**Form Structure**:
```tsx
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
```

---

### Downloads (`/src/app/pages/Downloads.tsx`)

**Purpose**: Downloadable resources

**Features**:
- Document categories
- File type indicators
- File size display
- Download buttons
- Search/filter functionality

**Data Structure**:
```tsx
interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileType: "pdf" | "doc" | "zip";
  fileSize: string;
  downloadUrl: string;
  category: string;
}
```

---

### FAQ (`/src/app/pages/FAQ.tsx`)

**Purpose**: Frequently asked questions

**Features**:
- Accordion-style Q&A
- Categories for questions
- Search functionality
- Smooth animations

**Data Structure**:
```tsx
interface FAQCategory {
  category: string;
  questions: {
    question: string;
    answer: string;
  }[];
}
```

---

### Gallery (`/src/app/pages/Gallery.tsx`)

**Purpose**: Photo gallery from past events

**Features**:
- Masonry grid layout
- Image lightbox
- Category filtering
- Lazy loading

---

### NotFound (`/src/app/pages/NotFound.tsx`)

**Purpose**: 404 error page

**Features**:
- User-friendly error message
- Navigation links
- Search functionality (optional)
- Branding consistent with site

---

## Layout Components

### Layout (`/src/app/components/Layout.tsx`)

**Purpose**: Main layout wrapper for all pages

**Structure**:
```tsx
<Layout>
  <Header>
    <Logo />
    <Navigation />
  </Header>
  
  <main>
    <Outlet /> {/* Page content goes here */}
  </main>
  
  <Footer>
    <FooterLinks />
    <SocialMedia />
  </Footer>
</Layout>
```

**Features**:
- Responsive navigation
- Mobile menu
- Sticky header (optional)
- Footer with links
- Scroll to top button

**Props**: None (uses React Router's Outlet)

---

### ScrollToTop (`/src/app/components/ScrollToTop.tsx`)

**Purpose**: Restore scroll position on route change

**Usage**:
```tsx
// In routes.tsx or App.tsx
<ScrollToTop />
<Outlet />
```

**Functionality**:
- Scrolls to top on route change
- No visual component
- Uses React Router's useLocation

---

## UI Components

The `/src/app/components/ui/` directory contains reusable UI components built on Radix UI primitives.

### Button (`button.tsx`)

**Purpose**: Reusable button component

**Variants**:
- `default`: Primary button
- `destructive`: Danger/delete actions
- `outline`: Outlined button
- `secondary`: Secondary actions
- `ghost`: Minimal button
- `link`: Link-style button

**Sizes**:
- `default`: Standard size
- `sm`: Small button
- `lg`: Large button
- `icon`: Icon-only button

**Usage**:
```tsx
import { Button } from '@/components/ui/button';

<Button variant="default" size="lg">
  Click Me
</Button>
```

---

### Input (`input.tsx`)

**Purpose**: Text input component

**Props**:
- `type`: Input type (text, email, password, etc.)
- `placeholder`: Placeholder text
- `value`: Controlled value
- `onChange`: Change handler
- `disabled`: Disabled state
- `error`: Error state

**Usage**:
```tsx
import { Input } from '@/components/ui/input';

<Input 
  type="email" 
  placeholder="Enter email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

---

### Card (`card.tsx`)

**Purpose**: Content card container

**Sub-components**:
- `Card`: Main container
- `CardHeader`: Header section
- `CardTitle`: Title
- `CardDescription`: Description
- `CardContent`: Main content
- `CardFooter`: Footer section

**Usage**:
```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

### Dialog (`dialog.tsx`)

**Purpose**: Modal dialog component

**Usage**:
```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        Dialog description
      </DialogDescription>
    </DialogHeader>
    {/* Dialog content */}
  </DialogContent>
</Dialog>
```

---

### Accordion (`accordion.tsx`)

**Purpose**: Collapsible content sections

**Usage**:
```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question 1</AccordionTrigger>
    <AccordionContent>
      Answer 1
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

---

### Alert (`alert.tsx`)

**Purpose**: Alert/notification component

**Variants**:
- `default`: Informational alert
- `destructive`: Error/warning alert

**Usage**:
```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong
  </AlertDescription>
</Alert>
```

---

## Custom Hooks

### useCountdown

**Purpose**: Countdown timer functionality

**Location**: `/src/hooks/useCountdown.ts`

**Parameters**:
- `targetDate`: number (timestamp in milliseconds)

**Returns**:
```tsx
{
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
```

**Usage**:
```tsx
import { useCountdown } from '@/hooks';
import { EVENT_CONFIG } from '@/constants';

function CountdownTimer() {
  const targetDate = new Date(EVENT_CONFIG.START_DATE).getTime();
  const timeLeft = useCountdown(targetDate);
  
  return (
    <div>
      <span>{timeLeft.days} days</span>
      <span>{timeLeft.hours} hours</span>
      <span>{timeLeft.minutes} minutes</span>
      <span>{timeLeft.seconds} seconds</span>
    </div>
  );
}
```

---

### useFormValidation

**Purpose**: Form validation logic

**Location**: `/src/hooks/useFormValidation.ts`

**Returns**:
```tsx
{
  errors: Record<string, string>;
  validateEmail: (email: string) => boolean;
  validatePhone: (phone: string) => boolean;
  validatePassword: (password: string) => boolean;
  validatePasswordConfirmation: (password: string, confirm: string) => boolean;
  validateRequired: (value: string, fieldName: string) => boolean;
  validateLength: (value: string, fieldName: string, min: number, max: number) => boolean;
  clearErrors: () => void;
  clearError: (fieldName: string) => void;
}
```

**Usage**:
```tsx
import { useFormValidation } from '@/hooks';

function ContactForm() {
  const { errors, validateEmail, validateRequired } = useFormValidation();
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateRequired(email, 'email')) return;
    if (!validateEmail(email)) return;
    
    // Submit form
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <Input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <span className="error">{errors.email}</span>}
    </form>
  );
}
```

---

### useScrollAnimation

**Purpose**: Scroll-triggered animations

**Location**: `/src/hooks/useScrollAnimation.ts`

**Parameters**:
```tsx
{
  threshold?: number;      // 0-1, default 0.1
  triggerOnce?: boolean;   // default true
}
```

**Returns**:
```tsx
{
  ref: React.RefObject<HTMLDivElement>;
  inView: boolean;
}
```

**Usage**:
```tsx
import { useScrollAnimation } from '@/hooks';

function AnimatedSection() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div 
      ref={ref}
      className={inView ? 'fade-in' : 'opacity-0'}
    >
      Content fades in when scrolled into view
    </div>
  );
}
```

---

## Component Guidelines

### 1. Component File Structure

```tsx
// Imports
import { useState } from 'react';
import type { ComponentProps } from '@/types';
import { Button } from '@/components/ui/button';

// Type definitions
interface MyComponentProps {
  title: string;
  onSubmit?: () => void;
}

// Component
export function MyComponent({ title, onSubmit }: MyComponentProps) {
  // 1. Hooks
  const [state, setState] = useState('');
  
  // 2. Event handlers
  const handleClick = () => {
    setState('clicked');
    onSubmit?.();
  };
  
  // 3. Render helpers (if needed)
  const renderContent = () => {
    return <div>{state}</div>;
  };
  
  // 4. Return JSX
  return (
    <div>
      <h1>{title}</h1>
      {renderContent()}
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
}
```

### 2. Props Best Practices

- Always use TypeScript interfaces
- Provide default values when appropriate
- Use optional chaining for optional props
- Document complex props

```tsx
interface Props {
  // Required props
  title: string;
  
  // Optional props with defaults
  variant?: 'primary' | 'secondary';
  
  // Optional callbacks
  onClick?: () => void;
  
  // Children
  children?: React.ReactNode;
}

function Component({ 
  title, 
  variant = 'primary',
  onClick,
  children 
}: Props) {
  // Component logic
}
```

### 3. State Management

- Use `useState` for component state
- Use custom hooks for reusable logic
- Keep state as close to usage as possible
- Lift state up when needed by multiple components

### 4. Event Handlers

- Prefix with `handle`: `handleClick`, `handleSubmit`
- Keep handlers simple, extract complex logic
- Use TypeScript event types

```tsx
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  // Handle click
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};
```

### 5. Conditional Rendering

```tsx
// Early return for loading/error states
if (loading) return <Spinner />;
if (error) return <Error message={error} />;

// Ternary for simple conditions
{isLoggedIn ? <Dashboard /> : <Login />}

// Logical AND for single condition
{hasData && <DataDisplay data={data} />}
```

### 6. Styling

- Use Tailwind CSS classes
- Avoid inline styles unless dynamic
- Use CSS variables from theme.css
- Follow consistent spacing/sizing

```tsx
// Good
<div className="p-4 bg-gray-50 rounded-lg">

// Avoid (unless dynamic)
<div style={{ padding: '16px', background: '#f9fafb' }}>
```

### 7. Accessibility

- Use semantic HTML
- Provide ARIA labels when needed
- Ensure keyboard navigation
- Test with screen readers

```tsx
<button 
  aria-label="Close dialog"
  onClick={handleClose}
>
  <X className="h-4 w-4" />
  <span className="sr-only">Close</span>
</button>
```

---

**Last Updated**: March 13, 2026
**Version**: 1.0.0
