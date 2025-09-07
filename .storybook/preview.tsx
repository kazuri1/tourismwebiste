import React from "react";
import type { Preview } from "@storybook/react";
import { PreviewWrapper } from "./PreviewWrapper";
import "pulseui-base/styles";
import "./fonts.css";
import "./theme.css";
// Load app global CSS and component CSS so Storybook matches Next
import "../src/styles/theme.css";
import "../src/index.css";
import "../src/components/Button.css";
import "../src/components/TopNav.css";
import "../src/components/Carousel.css";
import "../src/components/atoms/CategoryToggle.css";
import "../src/components/atoms/ImageTitleCard.css";
import "../src/components/atoms/SectionTitle.css";
import "../src/components/atoms/Tabs.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    layout: "fullscreen",
  },

  decorators: [
    (Story) => {
      if (typeof document !== "undefined") {
        const root = document.documentElement;
        if (!root.getAttribute("data-theme")) {
          root.setAttribute("data-theme", "light");
        }
      }
      return (
        <PreviewWrapper>
          <div
            style={{
              fontFamily:
                "Satoshi, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            <Story />
          </div>
        </PreviewWrapper>
      );
    },
  ],
};

export default preview;
