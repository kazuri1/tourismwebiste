import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "../components/Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onItemClick: { action: "item clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    id: "1",
    title: "Mysore Palace",
    category: "Culture",
    imageUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Chamundi Hills",
    category: "Nature",
    imageUrl:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Brindavan Gardens",
    category: "Nature",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "St. Philomena's Cathedral",
    category: "Culture",
    imageUrl:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Mysore Zoo",
    category: "Nature",
    imageUrl:
      "https://images.unsplash.com/photo-1532102231180-8f40e7b2f83d?w=1200&q=80&auto=format&fit=crop",
  },
];

export const MultiCard: Story = {
  args: {
    items,
  },
};

export const WithClick: Story = {
  args: {
    items,
    onItemClick: (item) => alert(`Clicked ${item.title}`),
  },
};
