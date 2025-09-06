import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

// Create a custom theme
const theme = create({
  base: "light",
  brandTitle: "Tourism Website",
  brandUrl: "https://your-tourism-website.com",
  brandImage: undefined,
  brandTarget: "_self",

  // Custom colors
  colorPrimary: "#3B82F6",
  colorSecondary: "#10B981",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appBorderColor: "#E5E7EB",
  appBorderRadius: 8,

  // Text colors
  textColor: "#1F2937",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#6B7280",
  barSelectedColor: "#3B82F6",
  barBg: "#F9FAFB",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#D1D5DB",
  inputTextColor: "#1F2937",
  inputBorderRadius: 6,
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});


