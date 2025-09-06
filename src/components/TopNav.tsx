import React from "react";
import { SimpleTopNav } from "pulseui-base";
import mysoreLogo from "../assets/mysorelogo.png";
import { Button } from "./Button";
import "./TopNav.css";

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
      href: "#",
    },
    {
      id: "about-us",
      label: "About Us",
      href: "#",
    },
  ];

  return (
    <SimpleTopNav
      brandLogo={
        <div style={{ background: "transparent", padding: "0", margin: "0" }}>
          <img
            src={mysoreLogo}
            alt="Mysore Tourism Logo"
            style={{
              height: "32px",
              width: "auto",
              background: "transparent",
              border: "none",
              borderRadius: "0",
              display: "block",
            }}
          />
        </div>
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
        "--pulseui-nav-bg": "#ffffff",
        "--pulseui-nav-border": "#E5E7EB",
        "--pulseui-nav-text": "#1F2937",
        "--pulseui-nav-hover": "#F3F4F6",
        "--pulseui-nav-active": "var(--color-primary)",
        "--pulseui-nav-font-size": "0.875rem",
        "--pulseui-nav-font-weight": "500",
        ...sx,
      }}
      style={style}
    />
  );
};
