import type { Meta, StoryObj } from "@storybook/react-vite";
import { TopNav } from "../components/TopNav";

const meta = {
  title: "Navigation/TopNav",
  component: TopNav,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    brandName: {
      control: { type: "text" },
      description: "Brand name to display",
    },
    brandTitle: {
      control: { type: "text" },
      description: "Brand title/role to display",
    },
    showBrand: {
      control: { type: "boolean" },
      description: "Whether to show the brand section",
    },
    showNavigation: {
      control: { type: "boolean" },
      description: "Whether to show the navigation section",
    },
    showThemeSwitcher: {
      control: { type: "boolean" },
      description: "Whether to show the theme switcher",
    },
    rightButton: {
      control: { type: "object" },
      description: "Custom button to show on the right side",
    },
  },
} satisfies Meta<typeof TopNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brandName: "Mysore Tourism",
    brandTitle: "Discover the Royal City",
    showBrand: true,
    showNavigation: true,
    showThemeSwitcher: true,
  },
};

export const WithoutBrand: Story = {
  args: {
    brandName: "Mysore Tourism",
    brandTitle: "Discover the Royal City",
    showBrand: false,
    showNavigation: true,
    showThemeSwitcher: false,
  },
};

export const WithThemeSwitcher: Story = {
  args: {
    brandName: "Mysore Tourism",
    brandTitle: "Discover the Royal City",
    showBrand: true,
    showNavigation: true,
    showThemeSwitcher: true,
  },
};

export const CustomBranding: Story = {
  args: {
    brandName: "Wanderlust",
    brandTitle: "Your Journey Begins Here",
    showBrand: true,
    showNavigation: true,
    showThemeSwitcher: false,
  },
};

export const DarkTheme: Story = {
  args: {
    brandName: "Mysore Tourism",
    brandTitle: "Discover the Royal City",
    showBrand: true,
    showNavigation: true,
    showThemeSwitcher: false,
    sx: {
      "--pulseui-nav-bg": "#0F172A",
      "--pulseui-nav-border": "#1E293B",
      "--pulseui-nav-text": "#F8FAFC",
      "--pulseui-nav-hover": "#1E293B",
      "--pulseui-nav-active": "#3B82F6",
    },
  },
};

export const CustomColors: Story = {
  args: {
    brandName: "Mysore Tourism",
    brandTitle: "Discover the Royal City",
    showBrand: true,
    showNavigation: true,
    showThemeSwitcher: false,
    sx: {
      "--pulseui-nav-bg": "#FEF3C7",
      "--pulseui-nav-border": "#F59E0B",
      "--pulseui-nav-text": "#92400E",
      "--pulseui-nav-hover": "#FDE68A",
      "--pulseui-nav-active": "#D97706",
    },
  },
};

export const WithRightButton: Story = {
  args: {
    brandName: "Mysore Tourism",
    brandTitle: "Discover the Royal City",
    showBrand: true,
    showNavigation: true,
    showThemeSwitcher: true,
    rightButton: (
      <button
        style={{
          backgroundColor: "#10B981",
          color: "#ffffff",
          border: "none",
          borderRadius: "6px",
          padding: "8px 16px",
          fontSize: "0.875rem",
          fontWeight: "500",
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#059669";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#10B981";
        }}
      >
        Book Now
      </button>
    ),
  },
};

export const WithRightButtonAndThemeSwitcher: Story = {
  args: {
    brandName: "Mysore Tourism",
    brandTitle: "Discover the Royal City",
    showBrand: true,
    showNavigation: true,
    showThemeSwitcher: true,
    rightButton: (
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <button
          style={{
            backgroundColor: "transparent",
            color: "#10B981",
            border: "1px solid #10B981",
            borderRadius: "6px",
            padding: "6px 12px",
            fontSize: "0.8rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#F0FDF4";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          Sign In
        </button>
        <button
          style={{
            backgroundColor: "#10B981",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            padding: "6px 12px",
            fontSize: "0.8rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#059669";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#10B981";
          }}
        >
          Sign Up
        </button>
      </div>
    ),
  },
};
