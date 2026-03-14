/**
 * Type Definitions for EKO International Trade Expo
 * 
 * This file contains all TypeScript interfaces and types used throughout the application.
 * Centralizing types helps maintain consistency and enables better type checking.
 */

// ============================================================================
// FORM TYPES
// ============================================================================

/**
 * Registration form data structure
 * Used in: Register.tsx
 */
export interface RegistrationFormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Professional Information
  company?: string;
  position?: string;
  industry: string;
  
  // Attendance Details
  attendanceType: "exhibitor" | "visitor" | "speaker" | "sponsor";
  
  // Optional Fields
  website?: string;
  interests?: string[];
  
  // Privacy & Consent
  agreeToTerms: boolean;
  subscribeNewsletter?: boolean;
}

/**
 * Contact form data structure
 * Used in: Contact.tsx
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Login form data structure
 * Used in: Login.tsx
 */
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * Sign up form data structure
 * Used in: SignUp.tsx
 */
export interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  agreeToTerms: boolean;
}

// ============================================================================
// EVENT TYPES
// ============================================================================

/**
 * Event schedule item structure
 * Used in: Schedule.tsx
 */
export interface ScheduleItem {
  time: string;
  title: string;
  type: "keynote" | "panel" | "workshop" | "networking" | "exhibition" | "ceremony";
  icon: React.ComponentType<{ className?: string }>;
  speaker?: string;
  description?: string;
  location?: string;
}

/**
 * Event day structure containing all schedule items
 * Used in: Schedule.tsx
 */
export interface EventDay {
  date: string;
  day: string;
  theme: string;
  schedule: ScheduleItem[];
}

/**
 * Countdown timer structure
 * Used in: Countdown.tsx, Home.tsx
 */
export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// ============================================================================
// CONTENT TYPES
// ============================================================================

/**
 * FAQ item structure
 * Used in: FAQ.tsx
 */
export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * FAQ category structure
 * Used in: FAQ.tsx
 */
export interface FAQCategory {
  category: string;
  questions: FAQItem[];
}

/**
 * Sponsor tier structure
 * Used in: Sponsors.tsx
 */
export interface SponsorTier {
  tier: string;
  color: string;
  sponsors: {
    name: string;
    logo: string;
    description?: string;
    website?: string;
  }[];
}

/**
 * Team member structure
 * Used in: Team.tsx
 */
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
}

/**
 * Gallery image structure
 * Used in: Gallery.tsx
 */
export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  category?: string;
}

/**
 * Download item structure
 * Used in: Downloads.tsx
 */
export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileType: "pdf" | "doc" | "zip" | "image";
  fileSize: string;
  downloadUrl: string;
  category: string;
  uploadDate: string;
}

// ============================================================================
// CONTACT TYPES
// ============================================================================

/**
 * Contact information card structure
 * Used in: Contact.tsx
 */
export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  details: string[];
  color: string;
}

// ============================================================================
// NAVIGATION TYPES
// ============================================================================

/**
 * Navigation link structure
 * Used in: Layout.tsx
 */
export interface NavLink {
  path: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Generic API response structure
 * Used for future API integrations
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
  };
  timestamp: string;
}

/**
 * Generic pagination structure
 * Used for future paginated data
 */
export interface PaginatedResponse<T> {
  items: T[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

/**
 * Loading state structure
 * Used for async operations
 */
export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}
