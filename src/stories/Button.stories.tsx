import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["filled", "outline", "subtle", "light", "white", "default"],
      description: "Button variant style",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Button size",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    loading: {
      control: { type: "boolean" },
      description: "Whether the button shows loading state",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Whether the button takes full width",
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
      description: "Button type",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "filled",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "md",
  },
};

export const Subtle: Story = {
  args: {
    children: "Subtle Button",
    variant: "subtle",
    size: "md",
  },
};

export const Light: Story = {
  args: {
    children: "Light Button",
    variant: "light",
    size: "md",
  },
};

export const White: Story = {
  args: {
    children: "White Button",
    variant: "white",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    variant: "filled",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    variant: "filled",
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    children: "Extra Large Button",
    variant: "filled",
    size: "xl",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "filled",
    size: "md",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",
    variant: "filled",
    size: "md",
    loading: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    variant: "filled",
    size: "md",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};

export const Submit: Story = {
  args: {
    children: "Submit Form",
    variant: "filled",
    size: "md",
    type: "submit",
  },
};

export const Reset: Story = {
  args: {
    children: "Reset Form",
    variant: "outline",
    size: "md",
    type: "reset",
  },
};

export const TourismButton: Story = {
  args: {
    children: "Book Now",
    variant: "filled",
    size: "lg",
    sx: {
      "--pulseui-button-bg": "#10B981",
      "--pulseui-button-text": "#ffffff",
      "--pulseui-button-hover": "#059669",
      "--pulseui-button-active": "#047857",
    },
  },
};

export const DestinationsButton: Story = {
  args: {
    children: "Explore Destinations",
    variant: "outline",
    size: "lg",
    sx: {
      "--pulseui-button-border": "#8B5CF6",
      "--pulseui-button-text": "#8B5CF6",
      "--pulseui-button-hover": "#F3F4F6",
      "--pulseui-button-active": "#E5E7EB",
    },
  },
};


