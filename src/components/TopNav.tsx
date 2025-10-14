"use client";
import React from "react";
import { SimpleTopNav } from "pulseui-base";
import Image from "next/image";
import mysoreLogo from "../assets/mysorelogo.png";
import { Button } from "./Button";
// Styles imported globally from app/layout.tsx in Next.js

export interface TopNavProps {
  /** Brand name to display */
  brandName?: string;
  /** Brand title/role to display */
  brandTitle?: string;
  /** Whether to show the brand section */
  showBrand?: boolean;
  /** Whether to show the navigation section */
  showNavigation?: boolean;
  /** Whether to show the theme switcher */
  showThemeSwitcher?: boolean;
  /** Custom button to show on the right side */
  rightButton?: React.ReactNode;
  /** Custom class name */
  className?: string;
  /** Custom styles */
  sx?: Record<string, string>;
  /** Inline styles */
  style?: React.CSSProperties;
}

export const TopNav: React.FC<TopNavProps> = ({
  showBrand = true,
  showNavigation = true,
  showThemeSwitcher = false,
  rightButton,
  className,
  sx,
  style,
}) => {
  const navItems = [
    {
      id: "destinations",
      label: "Destinations",
      href: "#",
    },
    {
      id: "things-to-do",
      label: "Things To Do",
      href: "#",
    },
    {
      id: "our-services",
      label: "Our Services",
      href: "#",
    },
    {
      id: "plan-your-trip",
      label: "Plan Your Trip",
      href: "#",
    },
    {
      id: "mysore-map",
      label: "Mysore Map",
      href: "#mysore-map",
    },
    {
      id: "about-us",
      label: "About Us",
      href: "#",
    },
  ];

  return (
    <div className="tourism-topnav-wrapper">
      <SimpleTopNav
        brandLogo={
          <Image
            src={mysoreLogo}
            alt="Mysore Tourism Logo"
            height={32}
            style={{ width: "auto" }}
          />
        }
        brandName=""
        brandTitle=""
        items={navItems}
        showBrand={showBrand}
        showNavigation={showNavigation}
        showThemeSwitcher={showThemeSwitcher}
        afterNavigation={
          <div className="topnav-actions">
            {!rightButton ? (
              <Button
                variant="filled"
                size="sm"
                onClick={() => console.log("Book Now clicked!")}
              >
                Book Now
              </Button>
            ) : (
              rightButton
            )}
          </div>
        }
        className={`tourism-topnav ${className || ""}`}
        sx={{
          fontFamily:
            "Satoshi, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          // Bind Pulse UI nav tokens to our theme variables for live theme switching
          "--pulseui-nav-bg": "var(--color-surface)",
          "--pulseui-nav-border": "var(--color-border)",
          "--pulseui-nav-text": "var(--color-on-surface)",
          "--pulseui-nav-hover": "var(--color-hover-surface)",
          "--pulseui-nav-active": "var(--color-primary)",
          "--pulseui-nav-font-size": "0.875rem",
          "--pulseui-nav-font-weight": "500",
          ...sx,
        }}
        style={style}
      />
    </div>
  );
};
