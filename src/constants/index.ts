/**
 * Application Constants
 * 
 * This file contains all constants used throughout the application.
 * Centralizing constants makes them easy to update and maintain.
 */

// ============================================================================
// EVENT INFORMATION
// ============================================================================

/**
 * Event dates and time configuration
 */
export const EVENT_CONFIG = {
  // Event Dates
  START_DATE: "2026-09-22T08:00:00",
  END_DATE: "2026-09-26T18:00:00",
  
  // Display Formats
  DISPLAY_DATES: "Tues 22nd - Sat 26th September 2026",
  DISPLAY_DATES_SHORT: "Tues 22nd - Sat 26th Sept 2026",
  DISPLAY_TIME: "8:00 AM Daily",
  
  // Event Duration
  DURATION_DAYS: 5,
  DURATION_TEXT: "5 Days of Innovation & Networking",
  
  // Year
  YEAR: 2026,
} as const;

/**
 * Event venue information
 */
export const VENUE_CONFIG = {
  NAME: "Police College, Ikeja",
  CITY: "Lagos State",
  COUNTRY: "Nigeria",
  FULL_ADDRESS: "Police College, Ikeja, Lagos State, Nigeria",
  
  // Map Coordinates (for Google Maps)
  COORDINATES: {
    lat: 6.4705859,
    lng: 3.2752847,
  },
  
  // Google Maps Embed URL
  MAPS_EMBED_URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3477896848787!2d3.2752847!3d6.4705859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%20International%20Trade%20Fair%20Complex!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng",
  
  // Google Maps Directions URL
  MAPS_DIRECTIONS_URL: "https://www.google.com/maps/dir//Police+College+Ikeja+Lagos",
} as const;

// ============================================================================
// CONTACT INFORMATION
// ============================================================================

/**
 * Contact information for the event
 */
export const CONTACT_INFO = {
  // Email Addresses
  EMAILS: {
    PRIMARY: "info@ekointernationaltrade.com",
    SECONDARY: "contact@momentumtrading.ng",
    SUPPORT: "support@ekointernationaltrade.com",
  },
  
  // Phone Numbers
  PHONES: {
    PRIMARY: "+234 703 913 8773",
    SECONDARY: "+234 806 313 0771",
    TERTIARY: "+234 803 597 4401",
  },
  
  // Social Media (placeholders - update with real URLs)
  SOCIAL: {
    FACEBOOK: "https://facebook.com/ekotrade",
    TWITTER: "https://twitter.com/ekotrade",
    INSTAGRAM: "https://instagram.com/ekotrade",
    LINKEDIN: "https://linkedin.com/company/ekotrade",
  },
  
  // Organization
  ORGANIZER: "Momentum Trading Enterprises",
  EVENT_NAME: "EKO International Trade Expo",
} as const;

// ============================================================================
// BRAND COLORS
// ============================================================================

/**
 * EKO brand color palette
 * These colors are also defined in /src/styles/theme.css as CSS variables
 */
export const BRAND_COLORS = {
  GREEN: "#10b981", // Primary brand color
  ORANGE: "#f97316",
  BLUE: "#3b82f6",
  CYAN: "#06b6d4",
  YELLOW: "#eab308",
  RED: "#ef4444",
  LIGHT_GREEN: "#84cc16",
} as const;

// ============================================================================
// NAVIGATION ROUTES
// ============================================================================

/**
 * Application routes
 * Used for consistent navigation throughout the app
 */
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  COUNTDOWN: "/countdown",
  SCHEDULE: "/schedule",
  SPONSORS: "/sponsors",
  REGISTER: "/register",
  CONTACT: "/contact",
  DOWNLOADS: "/downloads",
  FAQ: "/faq",
  GALLERY: "/gallery",
  TEAM: "/team",
  LOGIN: "/login",
  SIGNUP: "/signup",
  NOT_FOUND: "*",
} as const;

/**
 * Navigation menu items
 * Used in Layout.tsx for navigation menu
 */
export const NAV_ITEMS = [
  { path: ROUTES.HOME, label: "Home" },
  { path: ROUTES.ABOUT, label: "About" },
  { path: ROUTES.COUNTDOWN, label: "Countdown" },
  { path: ROUTES.SCHEDULE, label: "Schedule" },
  { path: ROUTES.SPONSORS, label: "Sponsors" },
  { path: ROUTES.REGISTER, label: "Register" },
  { path: ROUTES.CONTACT, label: "Contact" },
  { path: ROUTES.DOWNLOADS, label: "Downloads" },
] as const;

// ============================================================================
// FORM CONFIGURATION
// ============================================================================

/**
 * Form validation rules
 */
export const FORM_VALIDATION = {
  // Email validation regex
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  
  // Phone validation regex (Nigerian format)
  PHONE_REGEX: /^(\+234|0)[0-9]{10}$/,
  
  // Password minimum length
  PASSWORD_MIN_LENGTH: 8,
  
  // Name minimum/maximum length
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  
  // Message minimum/maximum length
  MESSAGE_MIN_LENGTH: 10,
  MESSAGE_MAX_LENGTH: 1000,
} as const;

/**
 * Form field labels and placeholders
 */
export const FORM_LABELS = {
  FIRST_NAME: "First Name",
  LAST_NAME: "Last Name",
  EMAIL: "Email Address",
  PHONE: "Phone Number",
  COMPANY: "Company Name",
  POSITION: "Position/Title",
  SUBJECT: "Subject",
  MESSAGE: "Message",
  PASSWORD: "Password",
  CONFIRM_PASSWORD: "Confirm Password",
} as const;

/**
 * Subject options for contact form
 */
export const CONTACT_SUBJECTS = [
  { value: "general", label: "General Inquiry" },
  { value: "exhibition", label: "Exhibition Booth" },
  { value: "sponsorship", label: "Sponsorship" },
  { value: "partnership", label: "Partnership" },
  { value: "media", label: "Media & Press" },
  { value: "other", label: "Other" },
] as const;

/**
 * Industry options for registration
 */
export const INDUSTRIES = [
  "Technology",
  "Manufacturing",
  "Agriculture",
  "Fashion & Beauty",
  "Food & Beverage",
  "Healthcare",
  "Education",
  "Financial Services",
  "Real Estate",
  "Entertainment",
  "Retail",
  "Other",
] as const;

/**
 * Attendance types for registration
 */
export const ATTENDANCE_TYPES = [
  { value: "exhibitor", label: "Exhibitor" },
  { value: "visitor", label: "Visitor" },
  { value: "speaker", label: "Speaker" },
  { value: "sponsor", label: "Sponsor" },
] as const;

// ============================================================================
// API CONFIGURATION
// ============================================================================

/**
 * API endpoints configuration
 * Update these when backend is ready
 */
export const API_ENDPOINTS = {
  // Base URL - Update with your actual API URL
  BASE_URL: process.env.VITE_API_BASE_URL || "https://api.ekointernationaltrade.com",
  
  // Authentication endpoints
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    LOGOUT: "/auth/logout",
    VERIFY_EMAIL: "/auth/verify-email",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },
  
  // Registration endpoints
  REGISTRATION: {
    CREATE: "/registration/create",
    UPDATE: "/registration/update",
    GET: "/registration/get",
  },
  
  // Contact endpoints
  CONTACT: {
    SUBMIT: "/contact/submit",
  },
  
  // Downloads endpoints
  DOWNLOADS: {
    LIST: "/downloads/list",
    GET: "/downloads/get",
  },
} as const;

// ============================================================================
// ANIMATION CONFIGURATION
// ============================================================================

/**
 * Motion/Framer Motion animation variants
 */
export const ANIMATION_VARIANTS = {
  // Fade in from bottom
  FADE_UP: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  
  // Fade in from top
  FADE_DOWN: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  
  // Fade in from left
  FADE_LEFT: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  
  // Fade in from right
  FADE_RIGHT: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  
  // Scale in
  SCALE_IN: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
} as const;

/**
 * Animation timing configurations
 */
export const ANIMATION_CONFIG = {
  // Standard transition duration
  DURATION: 0.5,
  
  // Stagger delay for list items
  STAGGER_DELAY: 0.1,
  
  // Scroll reveal threshold
  SCROLL_THRESHOLD: 0.1,
} as const;

// ============================================================================
// MISCELLANEOUS
// ============================================================================

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  AUTH_TOKEN: "eko_auth_token",
  USER_DATA: "eko_user_data",
  THEME: "eko_theme",
  LANGUAGE: "eko_language",
} as const;

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  GENERIC: "An error occurred. Please try again.",
  NETWORK: "Network error. Please check your connection.",
  VALIDATION: "Please check your input and try again.",
  UNAUTHORIZED: "Please log in to continue.",
  NOT_FOUND: "The requested resource was not found.",
  SERVER: "Server error. Please try again later.",
} as const;

/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
  REGISTRATION: "Registration successful! Check your email for confirmation.",
  CONTACT: "Message sent successfully! We'll get back to you soon.",
  LOGIN: "Login successful! Welcome back.",
  SIGNUP: "Account created successfully! Please verify your email.",
} as const;

/**
 * File upload configuration
 */
export const FILE_UPLOAD = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ["image/jpeg", "image/png", "image/gif", "application/pdf"],
  ALLOWED_EXTENSIONS: [".jpg", ".jpeg", ".png", ".gif", ".pdf"],
} as const;

/**
 * Pagination defaults
 */
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
} as const;

/**
 * Application metadata
 */
export const APP_META = {
  TITLE: "EKO International Trade Expo 2026",
  DESCRIPTION: "West Africa's premier trade and investment expo connecting businesses, entrepreneurs, and investors across diverse industries.",
  KEYWORDS: "trade expo, Lagos, Nigeria, business, investment, networking, exhibition",
  URL: "https://ekointernationaltrade.com",
  OG_IMAGE: "/og-image.png", // Add your OG image
} as const;
