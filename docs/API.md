# API Integration Guide

This document provides guidelines for integrating the frontend with a backend API.

## Table of Contents

1. [API Architecture](#api-architecture)
2. [Environment Configuration](#environment-configuration)
3. [API Service Layer](#api-service-layer)
4. [Authentication](#authentication)
5. [Error Handling](#error-handling)
6. [API Endpoints](#api-endpoints)
7. [Example Implementations](#example-implementations)

---

## API Architecture

### Current State

The application is currently **frontend-only** with mock data and simulated form submissions. All API endpoints are prepared but not yet connected.

### Future API Integration

```
Frontend (React) ←→ API Service Layer ←→ Backend API ←→ Database
```

### API Configuration Location

All API endpoints are pre-configured in `/src/constants/index.ts`:

```tsx
export const API_ENDPOINTS = {
  BASE_URL: process.env.VITE_API_BASE_URL || "https://api.ekointernationaltrade.com",
  
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    LOGOUT: "/auth/logout",
    VERIFY_EMAIL: "/auth/verify-email",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },
  
  REGISTRATION: {
    CREATE: "/registration/create",
    UPDATE: "/registration/update",
    GET: "/registration/get",
  },
  
  CONTACT: {
    SUBMIT: "/contact/submit",
  },
  
  DOWNLOADS: {
    LIST: "/downloads/list",
    GET: "/downloads/get",
  },
};
```

---

## Environment Configuration

### Setup Environment Variables

Create a `.env` file in the project root:

```env
# API Configuration
VITE_API_BASE_URL=https://api.ekointernationaltrade.com
VITE_API_TIMEOUT=30000

# Authentication
VITE_AUTH_TOKEN_KEY=eko_auth_token

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_LIVE_CHAT=false

# External Services
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Environment-Specific Files

```
.env                 # Default (development)
.env.development     # Development overrides
.env.production      # Production configuration
.env.staging         # Staging configuration
```

### Accessing Environment Variables

```tsx
const API_URL = import.meta.env.VITE_API_BASE_URL;
const isProduction = import.meta.env.PROD;
const isDevelopment = import.meta.env.DEV;
```

---

## API Service Layer

### Create API Service (`/src/services/api.ts`)

```tsx
/**
 * API Service
 * 
 * Centralized API communication layer.
 * All API calls should go through this service.
 */

import { API_ENDPOINTS } from '@/constants';

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  token?: string;
}

class ApiService {
  private baseURL: string;
  private timeout: number;

  constructor() {
    this.baseURL = API_ENDPOINTS.BASE_URL;
    this.timeout = 30000; // 30 seconds
  }

  /**
   * Make HTTP request
   */
  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const { method = 'GET', headers = {}, body, token } = options;

    // Prepare headers
    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...headers,
    };

    // Add authentication token if provided
    if (token) {
      requestHeaders['Authorization'] = `Bearer ${token}`;
    }

    // Prepare request config
    const config: RequestInit = {
      method,
      headers: requestHeaders,
    };

    // Add body for non-GET requests
    if (body && method !== 'GET') {
      config.body = JSON.stringify(body);
    }

    try {
      // Make request with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...config,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Handle response
      if (!response.ok) {
        throw await this.handleError(response);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timeout');
        }
      }
      throw error;
    }
  }

  /**
   * Handle API errors
   */
  private async handleError(response: Response): Promise<Error> {
    let errorMessage = 'An error occurred';

    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      errorMessage = response.statusText || errorMessage;
    }

    return new Error(errorMessage);
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, token?: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET', token });
  }

  /**
   * POST request
   */
  async post<T>(endpoint: string, body: any, token?: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'POST', body, token });
  }

  /**
   * PUT request
   */
  async put<T>(endpoint: string, body: any, token?: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'PUT', body, token });
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string, token?: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE', token });
  }

  /**
   * PATCH request
   */
  async patch<T>(endpoint: string, body: any, token?: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'PATCH', body, token });
  }
}

// Export singleton instance
export const apiService = new ApiService();
```

---

## Authentication

### Auth Service (`/src/services/auth.ts`)

```tsx
import { apiService } from './api';
import { API_ENDPOINTS, STORAGE_KEYS } from '@/constants';
import type { LoginFormData, SignUpFormData } from '@/types';

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

class AuthService {
  /**
   * Login user
   */
  async login(credentials: LoginFormData): Promise<AuthResponse> {
    const response = await apiService.post<AuthResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials
    );

    // Store token
    if (response.token) {
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, response.token);
      localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(response.user));
    }

    return response;
  }

  /**
   * Sign up user
   */
  async signup(userData: SignUpFormData): Promise<AuthResponse> {
    const response = await apiService.post<AuthResponse>(
      API_ENDPOINTS.AUTH.SIGNUP,
      userData
    );

    return response;
  }

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    const token = this.getToken();

    if (token) {
      await apiService.post(API_ENDPOINTS.AUTH.LOGOUT, {}, token);
    }

    // Clear local storage
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
  }

  /**
   * Get stored token
   */
  getToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  }

  /**
   * Get stored user data
   */
  getUser(): any | null {
    const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    return userData ? JSON.parse(userData) : null;
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  /**
   * Verify email
   */
  async verifyEmail(token: string): Promise<void> {
    await apiService.post(API_ENDPOINTS.AUTH.VERIFY_EMAIL, { token });
  }

  /**
   * Request password reset
   */
  async forgotPassword(email: string): Promise<void> {
    await apiService.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
  }

  /**
   * Reset password
   */
  async resetPassword(token: string, newPassword: string): Promise<void> {
    await apiService.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, {
      token,
      newPassword,
    });
  }
}

export const authService = new AuthService();
```

---

## Error Handling

### Global Error Handler

```tsx
// /src/utils/errorHandler.ts

import { ERROR_MESSAGES } from '@/constants';

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function handleApiError(error: unknown): string {
  if (error instanceof ApiError) {
    // Handle specific error codes
    switch (error.statusCode) {
      case 400:
        return error.message || ERROR_MESSAGES.VALIDATION;
      case 401:
        return ERROR_MESSAGES.UNAUTHORIZED;
      case 404:
        return ERROR_MESSAGES.NOT_FOUND;
      case 500:
        return ERROR_MESSAGES.SERVER;
      default:
        return error.message || ERROR_MESSAGES.GENERIC;
    }
  }

  if (error instanceof Error) {
    if (error.message.includes('Network')) {
      return ERROR_MESSAGES.NETWORK;
    }
    return error.message;
  }

  return ERROR_MESSAGES.GENERIC;
}
```

---

## API Endpoints

### Registration API

#### Create Registration

```
POST /registration/create

Request Body:
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+2347039138773",
  "company": "Example Corp",
  "position": "CEO",
  "industry": "Technology",
  "attendanceType": "exhibitor"
}

Response:
{
  "success": true,
  "data": {
    "id": "reg_123456",
    "status": "pending",
    "confirmationCode": "EKO-2026-123456"
  },
  "message": "Registration successful"
}
```

#### Get Registration

```
GET /registration/get/:id

Headers:
Authorization: Bearer <token>

Response:
{
  "success": true,
  "data": {
    "id": "reg_123456",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "status": "confirmed"
  }
}
```

### Contact API

#### Submit Contact Form

```
POST /contact/submit

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "general",
  "message": "Hello, I have a question..."
}

Response:
{
  "success": true,
  "message": "Message sent successfully",
  "ticketId": "TICKET-123456"
}
```

### Downloads API

#### List Downloads

```
GET /downloads/list?category=brochures

Response:
{
  "success": true,
  "data": [
    {
      "id": "dl_123",
      "title": "Event Brochure 2026",
      "description": "Official event brochure",
      "fileType": "pdf",
      "fileSize": "2.5 MB",
      "downloadUrl": "https://...",
      "category": "brochures"
    }
  ]
}
```

---

## Example Implementations

### Example 1: Registration Form with API

```tsx
import { useState } from 'react';
import { apiService } from '@/services/api';
import { API_ENDPOINTS } from '@/constants';
import type { RegistrationFormData } from '@/types';
import { handleApiError } from '@/utils/errorHandler';

export function RegisterForm() {
  const [formData, setFormData] = useState<RegistrationFormData>({...});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await apiService.post(
        API_ENDPOINTS.REGISTRATION.CREATE,
        formData
      );

      setSuccess(true);
      // Handle success (show confirmation, redirect, etc.)
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return <SuccessMessage />;
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert variant="destructive">{error}</Alert>}
      
      {/* Form fields */}
      
      <Button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Register'}
      </Button>
    </form>
  );
}
```

### Example 2: Protected Route

```tsx
import { Navigate } from 'react-router';
import { authService } from '@/services/auth';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

// Usage in routes.tsx
{
  path: "/dashboard",
  element: (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  )
}
```

### Example 3: useAuth Hook

```tsx
// /src/hooks/useAuth.ts

import { useState, useEffect } from 'react';
import { authService } from '@/services/auth';

export function useAuth() {
  const [user, setUser] = useState(authService.getUser());
  const [isAuthenticated, setIsAuthenticated] = useState(
    authService.isAuthenticated()
  );

  const login = async (credentials) => {
    const response = await authService.login(credentials);
    setUser(response.user);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
}
```

---

## Best Practices

### 1. Error Handling

Always wrap API calls in try-catch:

```tsx
try {
  const data = await apiService.get('/endpoint');
  // Handle success
} catch (error) {
  const errorMessage = handleApiError(error);
  // Show error to user
}
```

### 2. Loading States

Show loading indicators during API calls:

```tsx
const [loading, setLoading] = useState(false);

const fetchData = async () => {
  setLoading(true);
  try {
    const data = await apiService.get('/endpoint');
  } finally {
    setLoading(false);
  }
};

return loading ? <Spinner /> : <Content />;
```

### 3. Request Cancellation

Cancel requests on component unmount:

```tsx
useEffect(() => {
  const controller = new AbortController();
  
  fetchData(controller.signal);
  
  return () => controller.abort();
}, []);
```

### 4. Token Refresh

Implement automatic token refresh for expired tokens.

### 5. Rate Limiting

Implement request debouncing for search/filter operations.

---

**Last Updated**: March 13, 2026
**Version**: 1.0.0
