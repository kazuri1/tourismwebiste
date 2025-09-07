import type { Metadata } from "next";
import "pulseui-base/styles";
import "../styles/theme.css";
import "../index.css";
// Global component styles (Next: import global CSS from a single entry)
import "../components/TopNav.css";
import "../components/atoms/SectionTitle.css";
import "../components/Carousel.css";
import "../components/atoms/ImageTitleCard.css";

import React from "react";
import { TopNav } from "../components/TopNav";
import { ThemeSetup } from "../components/ThemeSetup";

export const metadata: Metadata = {
  title: "Tourism Website",
  description: "Next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" data-env={process.env.NODE_ENV}>
      <body style={{ background: "var(--color-surface)" }}>
        <ThemeSetup />
        <TopNav showThemeSwitcher={true} />
        <main style={{ paddingTop: 72 }}>{children}</main>
      </body>
    </html>
  );
}
