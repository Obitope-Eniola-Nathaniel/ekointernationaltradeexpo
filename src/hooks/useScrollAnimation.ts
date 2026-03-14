/**
 * useScrollAnimation Hook
 * 
 * A reusable custom hook for scroll-triggered animations.
 * Uses Intersection Observer API to detect when elements enter viewport.
 * 
 * @param threshold - Percentage of element visibility to trigger animation (0-1)
 * @returns Object containing ref and inView state
 * 
 * @example
 * ```tsx
 * const { ref, inView } = useScrollAnimation(0.1);
 * 
 * return (
 *   <div ref={ref} className={inView ? 'fade-in' : 'opacity-0'}>
 *     Content
 *   </div>
 * );
 * ```
 */

import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, triggerOnce = true } = options;
  
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          
          // If triggerOnce is true, stop observing after first trigger
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          // If triggerOnce is false, allow animation to reverse
          setInView(false);
        }
      },
      {
        threshold,
        rootMargin: "0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce]);

  return { ref, inView };
}
