import React from "react";
import type { Preview } from "@storybook/react-vite";
import { PreviewWrapper } from "./PreviewWrapper";
import "pulseui-base/styles";
import "./fonts.css";
import "./theme.css";

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
    (Story) => (
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
    ),
  ],
};

export default preview;
