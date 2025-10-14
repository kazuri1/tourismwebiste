import { VideoHero } from "../components/organisms/VideoHero";
import "../components/organisms/VideoHero.css";
import { SectionTitle } from "../components/atoms/SectionTitle";
import { Carousel } from "../components/Carousel";
import ClientCategoryToggle from "../components/ClientCategoryToggle";
import ClientTabs from "../components/ClientTabs";

export default function HomePage() {
  return (
    <>
      <VideoHero
        src="/mysurvideo.mp4"
        poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop"
        height="70vh"
        controls={false}
        autoPlay
        loop
        muted
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ margin: 0, fontSize: "3rem", color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>Welcome to Mysore</h1>
          <p style={{ marginTop: 12, fontSize: "1.125rem", color: "white", textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}>
            Experience the royal heritage, magnificent palaces, and vibrant culture of Karnataka's cultural capital.
          </p>
        </div>
      </VideoHero>
      <div style={{ margin: "32px 16px 16px" }}>
        <SectionTitle>Top Destinations</SectionTitle>
      </div>
      <div style={{ marginTop: "40px", marginBottom: "80px" }}>
        <Carousel
          items={[
            {
              id: "1",
              imageUrl:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80&auto=format&fit=crop",
              title: "Mysore Palace",
              category: "Culture",
            },
            {
              id: "2",
              imageUrl:
                "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200&q=80&auto=format&fit=crop",
              title: "Chamundi Hills",
              category: "Nature",
            },
            {
              id: "3",
              imageUrl:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop",
              title: "Brindavan Gardens",
              category: "Garden",
            },
            {
              id: "4",
              imageUrl:
                "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200&q=80&auto=format&fit=crop",
              title: "St. Philomena's Church",
              category: "Church",
            },
          ]}
        />
      </div>
      <div style={{ margin: "32px 16px 16px" }}>
        <SectionTitle>Places to Visit</SectionTitle>
      </div>
      <div style={{ marginTop: "24px", marginBottom: "80px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
          <ClientCategoryToggle />
        </div>
        <div style={{ marginTop: "40px", marginBottom: "80px" }}>
          <Carousel
            items={[
              {
                id: "1",
                imageUrl:
                  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80&auto=format&fit=crop",
                title: "Mysore Palace",
                category: "Culture",
              },
              {
                id: "2",
                imageUrl:
                  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200&q=80&auto=format&fit=crop",
                title: "Chamundi Hills",
                category: "Nature",
              },
              {
                id: "3",
                imageUrl:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop",
                title: "Brindavan Gardens",
                category: "Garden",
              },
              {
                id: "4",
                imageUrl:
                  "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200&q=80&auto=format&fit=crop",
                title: "St. Philomena's Church",
                category: "Church",
              },
            ]}
          />
        </div>
      </div>
      <div style={{ margin: "32px 16px 16px" }}>
        <SectionTitle>Featured Itinerary</SectionTitle>
      </div>
      <div style={{ marginTop: "24px", marginBottom: "80px" }}>
        <div style={{ maxWidth: 2260, margin: "0 auto", padding: "0 16px" }}>
          <ClientTabs />
        </div>
        <div style={{ marginTop: "10px", marginBottom: "80px" }}>
          <Carousel
            items={[
              {
                id: "1",
                imageUrl:
                  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80&auto=format&fit=crop",
                title: "Mysore Palace",
                category: "Culture",
              },
              {
                id: "2",
                imageUrl:
                  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200&q=80&auto=format&fit=crop",
                title: "Chamundi Hills",
                category: "Nature",
              },
              {
                id: "3",
                imageUrl:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop",
                title: "Brindavan Gardens",
                category: "Garden",
              },
              {
                id: "4",
                imageUrl:
                  "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1200&q=80&auto=format&fit=crop",
                title: "St. Philomena's Church",
                category: "Church",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
