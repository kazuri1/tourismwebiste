import React from "react";
import { Button as PulseUIButton } from "pulseui-base";
import "./Button.css";

export interface ButtonProps {
  /** Button text content */
  children: React.ReactNode;
  /** Button variant */
  variant?: "filled" | "outline" | "subtle" | "light" | "white" | "default";
  /** Button size */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Whether the button takes full width */
  fullWidth?: boolean;
  /** Button type */
  type?: "button" | "submit" | "reset";
  /** Click handler */
  onClick?: (e?: React.MouseEvent) => void;
  /** Custom class name */
  className?: string;
  /** Custom styles */
  sx?: Record<string, string>;
  /** Inline styles */
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "filled",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  type = "button",
  onClick,
  className,
  sx,
  style,
}) => {
  return (
    <PulseUIButton
      variant={variant}
      size={size}
      disabled={disabled}
      className={`tourism-button ${className || ""}`}
      type={type}
      onClick={onClick}
      style={{
        width: fullWidth ? "100%" : "auto",
        fontFamily:
          'Satoshi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        ...style,
      }}
      data-variant={variant}
      sx={{
        "--pulseui-button-bg":
          variant === "filled" ? "var(--color-primary)" : "transparent",
        "--pulseui-button-text":
          variant === "filled" ? "#ffffff" : "var(--color-primary)",
        "--pulseui-button-border":
          variant === "outline" ? "var(--color-primary)" : "transparent",
        "--pulseui-button-hover":
          variant === "filled" ? "var(--color-primary-hover)" : "#fff5f3",
        "--pulseui-button-active":
          variant === "filled" ? "var(--color-primary-active)" : "#ffe8e4",
        "--pulseui-button-disabled": "#9CA3AF",
        ...sx,
      }}
    >
      {loading ? (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              border: "2px solid currentColor",
              borderTop: "2px solid transparent",
              borderRadius: "50%",
              transform: "none",
            }}
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </PulseUIButton>
  );
};
