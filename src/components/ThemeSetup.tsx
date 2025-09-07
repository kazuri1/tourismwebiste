"use client";
import React, { useEffect } from "react";

/**
 * Ensures a default Pulse UI theme is applied at runtime and synced with localStorage.
 * - Defaults to "light" if no theme is set.
 * - Respects a persisted theme in localStorage under the key "theme".
 */
export const ThemeSetup: React.FC = () => {
  useEffect(() => {
    const root = document.documentElement;
    const existing = root.getAttribute("data-theme") || "";
    const persisted = (localStorage.getItem("theme") || "").trim();
    const initial =
      existing ||
      (persisted === "dark" || persisted === "light" ? persisted : "light");
    if (existing !== initial) {
      root.setAttribute("data-theme", initial);
    }

    // Persist changes from UI toggles (e.g., Pulse UI theme switcher)
    const observer = new MutationObserver(() => {
      const current = root.getAttribute("data-theme") || "";
      if (current === "light" || current === "dark") {
        localStorage.setItem("theme", current);
      }
    });
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // React to theme changes from other tabs/windows
    const onStorage = (e: StorageEvent) => {
      if (
        e.key === "theme" &&
        (e.newValue === "light" || e.newValue === "dark")
      ) {
        if (root.getAttribute("data-theme") !== e.newValue) {
          root.setAttribute("data-theme", e.newValue);
        }
      }
    };
    window.addEventListener("storage", onStorage);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return null;
};

export default ThemeSetup;
