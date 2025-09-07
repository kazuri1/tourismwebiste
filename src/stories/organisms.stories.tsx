import type { Meta, StoryObj } from "@storybook/react-vite";
import { VideoHero } from "../components/organisms/VideoHero";
import "../components/organisms/VideoHero.css";
import { TopNav } from "../components/TopNav";
import "../components/TopNav.css";

const meta: Meta = {
  title: "Organisms",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<any>;

export const Video_Hero_Full: Story = {
  name: "Video Hero (Full Width)",
  render: () => (
    <VideoHero
      src="https://cdn.coverr.co/videos/coverr-fishes-in-the-water-1577/1080p.mp4"
      poster="https://images.unsplash.com/photo-1528821154947-1aa3d1bb17f9?q=80&w=1920&auto=format&fit=crop"
      height="calc(100vh - 72px)"
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>Discover Mysore</h1>
        <p style={{ marginTop: 8 }}>Explore culture, cuisine, and nature</p>
      </div>
    </VideoHero>
  ),
};

export const TopNav_With_VideoHero: Story = {
  name: "TopNav + VideoHero",
  parameters: { layout: "fullscreen" },
  render: () => (
    <div>
      <TopNav />
      <div style={{ marginTop: 72 }}>
        <VideoHero
          src="https://cdn.coverr.co/videos/coverr-fishes-in-the-water-1577/1080p.mp4"
          poster="https://images.unsplash.com/photo-1528821154947-1aa3d1bb17f9?q=80&w=1920&auto=format&fit=crop"
          height="calc(100vh - 72px)"
        />
      </div>
    </div>
  ),
};
