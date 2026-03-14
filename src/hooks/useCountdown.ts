/**
 * useCountdown Hook
 * 
 * A reusable custom hook for countdown timer functionality.
 * Used in Countdown.tsx and Home.tsx
 * 
 * @param targetDate - The target date to count down to (timestamp in milliseconds)
 * @returns Object containing days, hours, minutes, and seconds remaining
 * 
 * @example
 * ```tsx
 * const timeLeft = useCountdown(new Date("2026-09-22T08:00:00").getTime());
 * console.log(timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds);
 * ```
 */

import { useState, useEffect } from "react";
import type { TimeLeft } from "../types";

export function useCountdown(targetDate: number): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate initial time left
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        return {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
      }

      // Return zeros if the countdown has finished
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    };

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}
