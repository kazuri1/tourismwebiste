"use client";

import { useState, useEffect } from "react";

export interface ScreenSize {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
}

/**
 * Custom hook to detect screen sizes for mobile, tablet, and desktop
 *
 * @param breakpoints - Custom breakpoints (optional)
 * @returns Object with isMobile, isTablet, isDesktop booleans and current width
 *
 * Default breakpoints:
 * - Mobile: < 768px
 * - Tablet: 768px - 1023px
 * - Desktop: >= 1024px
 */
export function useIsMobile(
  breakpoints = { mobile: 768, tablet: 1024 }
): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>(() => {
    if (typeof window === "undefined") {
      return {
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        width: 1024,
      };
    }

    const width = window.innerWidth;
    return {
      isMobile: width < breakpoints.mobile,
      isTablet: width >= breakpoints.mobile && width < breakpoints.tablet,
      isDesktop: width >= breakpoints.tablet,
      width,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width < breakpoints.mobile,
        isTablet: width >= breakpoints.mobile && width < breakpoints.tablet,
        isDesktop: width >= breakpoints.tablet,
        width,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints.mobile, breakpoints.tablet]);

  return screenSize;
}
