import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { CategoryToggle } from "../components/atoms/CategoryToggle";
import type { CategoryKey } from "../components/atoms/CategoryToggle";
import { Tabs } from "../components/atoms/Tabs";
import { ImageTitleCard } from "../components/atoms/ImageTitleCard";
import { SectionTitle } from "../components/atoms/SectionTitle";
import "../components/atoms/CategoryToggle.css";
import "../components/atoms/Tabs.css";
import "../components/atoms/ImageTitleCard.css";
import "../components/atoms/SectionTitle.css";

const meta: Meta = {
  title: "Atoms",
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<any>;

export const Category_Toggle: Story = {
  name: "Category Toggle",
  render: () => {
    const [value, setValue] = useState<CategoryKey>("all");
    return (
      <div style={{ width: 800 }}>
        <CategoryToggle value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Tabs_Pills: Story = {
  name: "Tabs (Pills)",
  render: () => {
    const [val, setVal] = useState("1d");
    return (
      <Tabs
        value={val}
        onChange={setVal}
        items={[
          { key: "1d", label: "1 Day" },
          { key: "2d", label: "2 Day" },
          { key: "3d", label: "3 Day" },
        ]}
      />
    );
  },
};

export const Image_Title_Card: Story = {
  name: "Image + Title Card",
  render: () => (
    <div style={{ width: 660 }}>
      <ImageTitleCard
        imageUrl="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80&auto=format&fit=crop"
        title="Mysore Palace"
        category="Culture"
      />
    </div>
  ),
};

export const Section_Title: Story = {
  name: "Section Title",
  render: () => <SectionTitle>Top Destinations</SectionTitle>,
};
