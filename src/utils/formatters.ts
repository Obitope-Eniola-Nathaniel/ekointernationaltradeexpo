/**
 * Formatter Utilities
 * 
 * Collection of utility functions for formatting data.
 * Used throughout the application for consistent data presentation.
 */

/**
 * Format date to readable string
 * @param date - Date object or ISO string
 * @param format - Format type ('short', 'long', 'time')
 * @returns Formatted date string
 * 
 * @example
 * formatDate(new Date(), 'long') // "January 15, 2026"
 * formatDate(new Date(), 'short') // "01/15/2026"
 */
export function formatDate(
  date: Date | string,
  format: "short" | "long" | "time" = "long"
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  switch (format) {
    case "short":
      return dateObj.toLocaleDateString("en-US");
    case "time":
      return dateObj.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    case "long":
    default:
      return dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  }
}

/**
 * Format phone number for display
 * @param phone - Phone number string
 * @returns Formatted phone number
 * 
 * @example
 * formatPhoneNumber("+2347039138773") // "+234 703 913 8773"
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, "");

  // Format Nigerian numbers
  if (cleaned.startsWith("234")) {
    return `+234 ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
  }

  // Format local numbers
  if (cleaned.startsWith("0")) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }

  return phone;
}

/**
 * Format file size to human-readable format
 * @param bytes - File size in bytes
 * @returns Formatted file size string
 * 
 * @example
 * formatFileSize(1024) // "1 KB"
 * formatFileSize(1048576) // "1 MB"
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/**
 * Format currency (Nigerian Naira)
 * @param amount - Amount to format
 * @param showSymbol - Whether to show currency symbol
 * @returns Formatted currency string
 * 
 * @example
 * formatCurrency(50000) // "₦50,000"
 * formatCurrency(50000, false) // "50,000"
 */
export function formatCurrency(amount: number, showSymbol = true): string {
  const formatted = new Intl.NumberFormat("en-NG").format(amount);
  return showSymbol ? `₦${formatted}` : formatted;
}

/**
 * Format countdown time unit with leading zero
 * @param value - Time value to format
 * @returns Formatted string with leading zero if needed
 * 
 * @example
 * formatTimeUnit(5) // "05"
 * formatTimeUnit(15) // "15"
 */
export function formatTimeUnit(value: number): string {
  return value.toString().padStart(2, "0");
}

/**
 * Truncate text with ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis
 * 
 * @example
 * truncateText("Long text here", 10) // "Long text..."
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

/**
 * Capitalize first letter of each word
 * @param text - Text to capitalize
 * @returns Capitalized text
 * 
 * @example
 * capitalizeWords("hello world") // "Hello World"
 */
export function capitalizeWords(text: string): string {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

/**
 * Format email for display (hide middle part)
 * @param email - Email address
 * @returns Partially hidden email
 * 
 * @example
 * formatEmailPrivacy("john@example.com") // "jo**@example.com"
 */
export function formatEmailPrivacy(email: string): string {
  const [name, domain] = email.split("@");
  if (name.length <= 2) return email;
  
  const visibleStart = name.slice(0, 2);
  const hiddenPart = "*".repeat(Math.min(name.length - 2, 4));
  
  return `${visibleStart}${hiddenPart}@${domain}`;
}

/**
 * Format percentage
 * @param value - Decimal value (0-1)
 * @param decimals - Number of decimal places
 * @returns Formatted percentage string
 * 
 * @example
 * formatPercentage(0.753, 1) // "75.3%"
 */
export function formatPercentage(value: number, decimals = 0): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Format count with K/M suffix for large numbers
 * @param count - Number to format
 * @returns Formatted count string
 * 
 * @example
 * formatCount(1500) // "1.5K"
 * formatCount(1500000) // "1.5M"
 */
export function formatCount(count: number): string {
  if (count < 1000) return count.toString();
  if (count < 1000000) return `${(count / 1000).toFixed(1)}K`;
  return `${(count / 1000000).toFixed(1)}M`;
}
