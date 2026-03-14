/**
 * Helper Utilities
 * 
 * Collection of general-purpose helper functions.
 * Used throughout the application for common operations.
 */

/**
 * Debounce function - delays execution until after wait time
 * Useful for search inputs, scroll events, etc.
 * 
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 * 
 * @example
 * const debouncedSearch = debounce((query) => search(query), 300);
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function - limits execution to once per time period
 * Useful for scroll events, window resize, etc.
 * 
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 * 
 * @example
 * const throttledScroll = throttle(() => handleScroll(), 100);
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Deep clone an object
 * @param obj - Object to clone
 * @returns Cloned object
 * 
 * @example
 * const cloned = deepClone(originalObject);
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Check if object is empty
 * @param obj - Object to check
 * @returns True if empty, false otherwise
 * 
 * @example
 * isEmpty({}) // true
 * isEmpty({ name: "John" }) // false
 */
export function isEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

/**
 * Generate random ID
 * @param length - Length of ID
 * @returns Random string ID
 * 
 * @example
 * generateId(8) // "a3b8c9d2"
 */
export function generateId(length = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

/**
 * Sleep/delay function
 * @param ms - Milliseconds to sleep
 * @returns Promise that resolves after delay
 * 
 * @example
 * await sleep(1000); // Wait 1 second
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Scroll to top of page smoothly
 */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/**
 * Scroll to element by ID
 * @param elementId - ID of element to scroll to
 * @param offset - Optional offset from top (in pixels)
 */
export function scrollToElement(elementId: string, offset = 0): void {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

/**
 * Copy text to clipboard
 * @param text - Text to copy
 * @returns Promise that resolves when copied
 * 
 * @example
 * await copyToClipboard("Hello World");
 */
export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
    
    document.body.removeChild(textArea);
  }
}

/**
 * Get query parameters from URL
 * @returns Object with query parameters
 * 
 * @example
 * // URL: https://example.com?name=John&age=30
 * getQueryParams() // { name: "John", age: "30" }
 */
export function getQueryParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  
  params.forEach((value, key) => {
    result[key] = value;
  });
  
  return result;
}

/**
 * Update query parameters in URL without reload
 * @param params - Object with parameters to update
 * 
 * @example
 * updateQueryParams({ page: "2", filter: "active" });
 */
export function updateQueryParams(params: Record<string, string>): void {
  const url = new URL(window.location.href);
  
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  
  window.history.pushState({}, "", url.toString());
}

/**
 * Download file from URL
 * @param url - File URL
 * @param filename - Desired filename
 * 
 * @example
 * downloadFile("https://example.com/file.pdf", "document.pdf");
 */
export function downloadFile(url: string, filename: string): void {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Check if user is on mobile device
 * @returns True if mobile, false otherwise
 */
export function isMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Check if user is on iOS device
 * @returns True if iOS, false otherwise
 */
export function isIOS(): boolean {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

/**
 * Check if user is on Android device
 * @returns True if Android, false otherwise
 */
export function isAndroid(): boolean {
  return /Android/.test(navigator.userAgent);
}

/**
 * Get browser name
 * @returns Browser name
 */
export function getBrowser(): string {
  const userAgent = navigator.userAgent;
  
  if (userAgent.includes("Firefox")) return "Firefox";
  if (userAgent.includes("Chrome")) return "Chrome";
  if (userAgent.includes("Safari")) return "Safari";
  if (userAgent.includes("Edge")) return "Edge";
  if (userAgent.includes("Opera")) return "Opera";
  
  return "Unknown";
}

/**
 * Format relative time (e.g., "2 hours ago")
 * @param date - Date to format
 * @returns Relative time string
 * 
 * @example
 * getRelativeTime(new Date(Date.now() - 3600000)) // "1 hour ago"
 */
export function getRelativeTime(date: Date | string): string {
  const now = new Date();
  const then = typeof date === "string" ? new Date(date) : date;
  const diffMs = now.getTime() - then.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) return "just now";
  if (diffMin < 60) return `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`;
  if (diffHour < 24) return `${diffHour} hour${diffHour > 1 ? "s" : ""} ago`;
  if (diffDay < 7) return `${diffDay} day${diffDay > 1 ? "s" : ""} ago`;
  if (diffDay < 30) {
    const weeks = Math.floor(diffDay / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  }
  if (diffDay < 365) {
    const months = Math.floor(diffDay / 30);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }
  
  const years = Math.floor(diffDay / 365);
  return `${years} year${years > 1 ? "s" : ""} ago`;
}

/**
 * Group array items by key
 * @param array - Array to group
 * @param key - Key to group by
 * @returns Grouped object
 * 
 * @example
 * groupBy([{type: 'A', val: 1}, {type: 'B', val: 2}, {type: 'A', val: 3}], 'type')
 * // { A: [{type: 'A', val: 1}, {type: 'A', val: 3}], B: [{type: 'B', val: 2}] }
 */
export function groupBy<T>(
  array: T[],
  key: keyof T
): Record<string, T[]> {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

/**
 * Remove duplicates from array
 * @param array - Array with potential duplicates
 * @returns Array without duplicates
 * 
 * @example
 * removeDuplicates([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
 */
export function removeDuplicates<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Shuffle array randomly
 * @param array - Array to shuffle
 * @returns Shuffled array
 * 
 * @example
 * shuffleArray([1, 2, 3, 4, 5]) // [3, 1, 5, 2, 4]
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
