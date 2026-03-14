/**
 * useFormValidation Hook
 * 
 * A reusable custom hook for form validation logic.
 * Provides common validation functions and error handling.
 * 
 * @example
 * ```tsx
 * const { validateEmail, validatePhone, errors } = useFormValidation();
 * 
 * if (!validateEmail(email)) {
 *   // Handle validation error
 * }
 * ```
 */

import { useState } from "react";
import { FORM_VALIDATION } from "../constants";

interface ValidationErrors {
  [key: string]: string;
}

export function useFormValidation() {
  const [errors, setErrors] = useState<ValidationErrors>({});

  /**
   * Validate email address
   */
  const validateEmail = (email: string): boolean => {
    const isValid = FORM_VALIDATION.EMAIL_REGEX.test(email);
    
    if (!isValid) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.email;
        return newErrors;
      });
    }
    
    return isValid;
  };

  /**
   * Validate phone number (Nigerian format)
   */
  const validatePhone = (phone: string): boolean => {
    const isValid = FORM_VALIDATION.PHONE_REGEX.test(phone);
    
    if (!isValid) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid Nigerian phone number",
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.phone;
        return newErrors;
      });
    }
    
    return isValid;
  };

  /**
   * Validate password strength
   */
  const validatePassword = (password: string): boolean => {
    const isValid = password.length >= FORM_VALIDATION.PASSWORD_MIN_LENGTH;
    
    if (!isValid) {
      setErrors((prev) => ({
        ...prev,
        password: `Password must be at least ${FORM_VALIDATION.PASSWORD_MIN_LENGTH} characters`,
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.password;
        return newErrors;
      });
    }
    
    return isValid;
  };

  /**
   * Validate password confirmation
   */
  const validatePasswordConfirmation = (
    password: string,
    confirmPassword: string
  ): boolean => {
    const isValid = password === confirmPassword;
    
    if (!isValid) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.confirmPassword;
        return newErrors;
      });
    }
    
    return isValid;
  };

  /**
   * Validate required field
   */
  const validateRequired = (
    value: string,
    fieldName: string
  ): boolean => {
    const isValid = value.trim().length > 0;
    
    if (!isValid) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: `${fieldName} is required`,
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
    
    return isValid;
  };

  /**
   * Validate field length
   */
  const validateLength = (
    value: string,
    fieldName: string,
    minLength: number,
    maxLength: number
  ): boolean => {
    const length = value.trim().length;
    const isValid = length >= minLength && length <= maxLength;
    
    if (!isValid) {
      if (length < minLength) {
        setErrors((prev) => ({
          ...prev,
          [fieldName]: `${fieldName} must be at least ${minLength} characters`,
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          [fieldName]: `${fieldName} must not exceed ${maxLength} characters`,
        }));
      }
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
    
    return isValid;
  };

  /**
   * Clear all errors
   */
  const clearErrors = () => {
    setErrors({});
  };

  /**
   * Clear specific error
   */
  const clearError = (fieldName: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  };

  return {
    errors,
    validateEmail,
    validatePhone,
    validatePassword,
    validatePasswordConfirmation,
    validateRequired,
    validateLength,
    clearErrors,
    clearError,
  };
}
