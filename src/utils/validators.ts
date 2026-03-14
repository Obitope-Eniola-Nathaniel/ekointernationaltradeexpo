/**
 * Validator Utilities
 * 
 * Collection of validation utility functions.
 * Used for input validation throughout the application.
 */

import { FORM_VALIDATION, FILE_UPLOAD } from "../constants";

/**
 * Validate email address format
 * @param email - Email address to validate
 * @returns True if valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
  return FORM_VALIDATION.EMAIL_REGEX.test(email.trim());
}

/**
 * Validate phone number (Nigerian format)
 * @param phone - Phone number to validate
 * @returns True if valid, false otherwise
 */
export function isValidPhone(phone: string): boolean {
  return FORM_VALIDATION.PHONE_REGEX.test(phone.trim());
}

/**
 * Validate password strength
 * @param password - Password to validate
 * @returns Object with validation result and message
 */
export function validatePasswordStrength(password: string): {
  isValid: boolean;
  message: string;
  strength: "weak" | "medium" | "strong";
} {
  const length = password.length;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (length < FORM_VALIDATION.PASSWORD_MIN_LENGTH) {
    return {
      isValid: false,
      message: `Password must be at least ${FORM_VALIDATION.PASSWORD_MIN_LENGTH} characters`,
      strength: "weak",
    };
  }

  const strengthScore =
    (hasUpperCase ? 1 : 0) +
    (hasLowerCase ? 1 : 0) +
    (hasNumbers ? 1 : 0) +
    (hasSpecialChar ? 1 : 0);

  if (strengthScore <= 2) {
    return {
      isValid: true,
      message: "Weak password. Consider adding uppercase, numbers, or special characters",
      strength: "weak",
    };
  }

  if (strengthScore === 3) {
    return {
      isValid: true,
      message: "Medium strength password",
      strength: "medium",
    };
  }

  return {
    isValid: true,
    message: "Strong password",
    strength: "strong",
  };
}

/**
 * Validate URL format
 * @param url - URL to validate
 * @returns True if valid, false otherwise
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate file type
 * @param file - File to validate
 * @returns True if valid, false otherwise
 */
export function isValidFileType(file: File): boolean {
  return FILE_UPLOAD.ALLOWED_TYPES.includes(file.type);
}

/**
 * Validate file size
 * @param file - File to validate
 * @returns True if valid, false otherwise
 */
export function isValidFileSize(file: File): boolean {
  return file.size <= FILE_UPLOAD.MAX_SIZE;
}

/**
 * Validate file (both type and size)
 * @param file - File to validate
 * @returns Object with validation result and message
 */
export function validateFile(file: File): {
  isValid: boolean;
  message: string;
} {
  if (!isValidFileType(file)) {
    return {
      isValid: false,
      message: `Invalid file type. Allowed types: ${FILE_UPLOAD.ALLOWED_EXTENSIONS.join(", ")}`,
    };
  }

  if (!isValidFileSize(file)) {
    return {
      isValid: false,
      message: `File too large. Maximum size: ${FILE_UPLOAD.MAX_SIZE / 1024 / 1024}MB`,
    };
  }

  return {
    isValid: true,
    message: "File is valid",
  };
}

/**
 * Validate required field
 * @param value - Value to validate
 * @returns True if not empty, false otherwise
 */
export function isRequired(value: string | undefined | null): boolean {
  return !!value && value.trim().length > 0;
}

/**
 * Validate minimum length
 * @param value - Value to validate
 * @param minLength - Minimum required length
 * @returns True if meets minimum length, false otherwise
 */
export function hasMinLength(value: string, minLength: number): boolean {
  return value.trim().length >= minLength;
}

/**
 * Validate maximum length
 * @param value - Value to validate
 * @param maxLength - Maximum allowed length
 * @returns True if within maximum length, false otherwise
 */
export function hasMaxLength(value: string, maxLength: number): boolean {
  return value.trim().length <= maxLength;
}

/**
 * Validate string contains only letters
 * @param value - Value to validate
 * @returns True if contains only letters, false otherwise
 */
export function isAlpha(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value);
}

/**
 * Validate string contains only letters and spaces
 * @param value - Value to validate
 * @returns True if contains only letters and spaces, false otherwise
 */
export function isAlphaSpace(value: string): boolean {
  return /^[a-zA-Z\s]+$/.test(value);
}

/**
 * Validate string contains only alphanumeric characters
 * @param value - Value to validate
 * @returns True if alphanumeric, false otherwise
 */
export function isAlphanumeric(value: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(value);
}

/**
 * Validate Nigerian NIN (National Identification Number)
 * @param nin - NIN to validate
 * @returns True if valid format, false otherwise
 */
export function isValidNIN(nin: string): boolean {
  // NIN is 11 digits
  return /^\d{11}$/.test(nin);
}

/**
 * Validate date is in the future
 * @param date - Date to validate
 * @returns True if in the future, false otherwise
 */
export function isFutureDate(date: Date | string): boolean {
  const inputDate = typeof date === "string" ? new Date(date) : date;
  return inputDate > new Date();
}

/**
 * Validate date is in the past
 * @param date - Date to validate
 * @returns True if in the past, false otherwise
 */
export function isPastDate(date: Date | string): boolean {
  const inputDate = typeof date === "string" ? new Date(date) : date;
  return inputDate < new Date();
}

/**
 * Validate age (must be 18 or older)
 * @param birthDate - Birth date to validate
 * @returns True if 18 or older, false otherwise
 */
export function isAdult(birthDate: Date | string): boolean {
  const birth = typeof birthDate === "string" ? new Date(birthDate) : birthDate;
  const today = new Date();
  const age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    return age - 1 >= 18;
  }

  return age >= 18;
}
